import React from "react";
import { Box } from "@chakra-ui/react";

const DecorativeBox = ({ w, h, ...props }) => {
  return (
    <Box
      w={w}
      h={h}
      bgGradient="linear(to-r, teal.500, blue.500)"
      borderRadius="md"
      boxShadow="lg"
      {...props}
    >
      {/* Add any decorative elements here */}
    </Box>
  );
};

export default DecorativeBox;
