import './App.css';
import AddressApp from './address';
import Header from './Header';
import AnotherComponent from './Footer';
import PropPractice from './Props_practice';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddressApp/>
      
      <PropPractice name="Moogle" age={6} likes="Cable ties"/>
      <PropPractice name="Mickey" age={5} likes="Belly rubs"/>

      <AnotherComponent/>
    </div>
  );
}

export default App;
