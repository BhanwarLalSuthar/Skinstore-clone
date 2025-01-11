import React from "react";
import { Flex, Button } from "@chakra-ui/react";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
    return (
        <Flex>
            <Button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
                Prev
            </Button>
            <Button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
                Next
            </Button>
        </Flex>
    )
};

export default Pagination;