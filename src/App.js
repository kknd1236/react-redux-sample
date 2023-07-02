import react, { useState } from 'react';
import { legacy_createStore as createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import './App.css';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1 };
  }

  const newState = { ...currentState };

  if (action.type === 'PLUS') {
    newState.number++;
  }

  return newState;
}

const store = createStore(reducer);

function App() {
  const [number, setNumber] = useState(1);
  return (
    <Provider store={store}>
      <div id="container">
        <div id="grid">
          <h1>Root </h1>
          <Left1></Left1>
          <Right1></Right1>
        </div>
      </div>
    </Provider>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>left1 : {props.number}</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>left2 : {props.number}</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>left3 : </h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1 : </h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  console.log('2');
  return (
    <div>
      <h1>Right2 : </h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  console.log('3');
  const number = useSelector(state => state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3 : {number}</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      ></input>
    </div>
  );
}
export default App;
