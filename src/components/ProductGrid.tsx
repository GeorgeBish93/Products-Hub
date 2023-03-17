import useProducts from "../hooks/useProducts";

const ProductGrid = () => {
  const { products, error } = useProducts();

  return (
    <>
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
    </>

  );
};

export default ProductGrid;
