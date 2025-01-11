import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

const Loader = () => {
    return (
        <Flex justify="center" align="center" h="100vh">
            <Spinner size="xl" color="teal" />
        </Flex>
    )
};

export default Loader;