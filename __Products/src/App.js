// styling
import './App.css';
//components
import Navbar from './components/navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import MenProducts from './components/MenProducts/MenProducts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      <MenProducts />
      <Footer />
    </div>
  );
}

export default App;
