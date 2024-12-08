import ProductCard from "./components/ProductCart";
import { productData } from "./productData";
const App = () => {
  return (
    <div>
      <ProductCard product={productData} />
    </div>
  );
};

export default App;
