import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={1}>
      <Flex
        bg="transparent"
        color="white"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
      >
        <Spacer />
        <Button as={Link} to="/search" variant="ghost" mr={4}>
          Search Jobs
        </Button>
        <Button as={Link} to="/companies" variant="ghost" mr={4}>
          Company List
        </Button>
        <Button as={Link} to="/blog" variant="ghost" mr={4}>
          Blog
        </Button>
        <Button as={Link} to="/about" variant="ghost">
          About
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;