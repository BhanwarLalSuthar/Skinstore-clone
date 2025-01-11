import React from "react";
import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";

const FilterSidebar = () => {
    return (
        <Box p={4} border="1px" borderColor="gray.200">
            <Text fontSize='lg' fontWeight="bold" mb={4}>
                Filters
            </Text>
            <Stack spacing={2}>
                <Checkbox>Brand A</Checkbox>
                <Checkbox>Brand B</Checkbox>
                <Checkbox>Under $50</Checkbox>
            </Stack>
        </Box>
    );
};

export default FilterSidebar;