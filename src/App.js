import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddItems from './components/AddItems';
import ListItems from './components/ListItems';

function App() {
  return (
    <div className="App">
     <Header />
     <AddItems />
     <ListItems/>
    </div>
  );
}

export default App;
