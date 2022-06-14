import './App.css';
// import Counter from './Counter';
// import CarDetails from './CarComponents';
// import CustomerDetails from './CustomerForm';
// import AddressApp from './address';
import Header from './Header';
import ProductTable from './SearchValue';
// import MilesAhead from './MilesAhead';
// import Clock from './Clock';
// import AnotherComponent from './Footer';
// import PropPractice from './Props_practice';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <AddressApp/>
      <PropPractice name="Moogle" age={6} likes="Cable ties" dislikes="Mickey"/>
      <PropPractice name="Mickey" age={5} likes="Belly rubs" dislikes="Moogle's tail"/>
      <AnotherComponent/> */}

      {/* <MilesAhead/>
      <Clock/> */}
      {/* <CustomerDetails/> */}
      {/* <CarDetails/> */}

      <ProductTable/>

      {/* <Counter/> */}

    </div>
  );
}

export default App;