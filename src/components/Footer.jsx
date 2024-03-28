import React from "react";
import { Box, Container, Stack, Text, Link, Input, Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" py={12}>
      <Container maxW="container.lg">
        <Stack direction={["column", "row"]} spacing={8} mb={8}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              RegenAgWork.com
            </Text>
            <Stack direction="column" spacing={2}>
              <Link href="#">Search Jobs</Link>
              <Link href="#">Company List</Link>
              <Link href="#">Blog</Link>
              <Link href="#">About</Link>
            </Stack>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Newsletter
            </Text>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input placeholder="Your email" size="lg" />
              <Button colorScheme="green" size="lg">
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Text fontSize="sm" color="gray.500">
          &copy; {new Date().getFullYear()} RegenAgWork.com. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
