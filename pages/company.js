import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

function company() {
  return (
    <Box maxW="800px" mx="auto" px={4} py={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={4}>
        About Our Company
      </Heading>
      <Box alignItems="center" mb={4}>
        <Image
          src="/vercel.svg"
          alt="Company logo"
          size={12}
          boxSize='150px'
          mr={4}
          mx="auto"
        
        />
        <Text fontSize="2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      <Text fontSize="xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Box>
  );
}

export default company;
