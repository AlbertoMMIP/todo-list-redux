import { Provider } from 'react-redux';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { createStore } from 'redux';

const initialValue = {
  items: [{ item: 'uno' }, { item: 'dos' }, { item: 'tres' }]
}

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload]}
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.item !== action.payload)}
    default:
      return state;
  }
  
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
