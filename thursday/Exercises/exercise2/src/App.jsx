import './App.css';
import ProductCard from './components/ProductCard';
function App() {
  return (
    <div className="App">
      <ProductCard
        name="Jollof-Rice & coleslaw"
        price={10000}
        image="https://d2j6dbq0eux0bg.cloudfront.net/images/87385252/4118598097.jpg"
        inStock={true}
      />
      <ProductCard
        name="Fried-Rice & Plantain"
        price={8000}
        image="https://www.sweetnspicee.com/wp-content/uploads/2020/11/LEY_1301-scaled.jpg"
        inStock={true}
      />
      <ProductCard
        name="Goatmeat Peppersoup"
        price={5000}
        image="https://www.chefadora.com/_next/image?url=https%3A%2F%2Fchefadora.b-cdn.net%2Fmedium_1000101431_57d7567d47.jpg&w=1080&q=75"
        inStock={false}
      />
    </div>
  );
}
export default App;