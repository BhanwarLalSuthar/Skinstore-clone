import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Flex, Spinner } from "@chakra-ui/react";
import { getProductById } from "../services/api";

const ProductDetail= () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id).then(data => {
            setLoading(false);
            setProduct(data);
        })
    }, [id]);
    
    if (loading) {
        return (
            <Flex justify="center" align="center" h='100vh'>
            <Spinner size="xl" color="teal" />
        </Flex>
    )
    }
    return (
        <Box>
            {product && (
                <Flex>
                    <Image src={product.image} alt={product.name} boxSize="300px" />
                    <Box>
                        <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
                        <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
                        <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
                    </Box>
                </Flex>
            )}
        </Box>
    )
};

export default ProductDetail