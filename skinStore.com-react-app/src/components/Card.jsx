import { Flex } from '@chakra-ui/react';
import CardUI from './CardUI';
import { useProducts } from './ProductContext';

const Card = () => {
  const products = useProducts();

  // Filter products for the "15% off" discount
  const filteredProducts = products.filter((product) => product.discount === "15% off");

  return (
    <Flex justify="center" bg="white" color="black" width="90%" m="auto" mt={10} wrap="wrap" gap={6}>
      {filteredProducts.map((product) => (
        <CardUI
          key={product.id}
          img1={product.img1}
          img2={product.img2}
          altText={product.name}
          title={product.name}
          offer={`${product.discount} with code: ${product.code}`}
          rating={product.rating}
          reviews={product.reviews}
          price={product.price}
        />
      ))}
    </Flex>
  );
};

export default Card;
