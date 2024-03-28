import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Stack, Grid, Image, Link, Divider, Container } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "No-Till Farm Manager",
    company: "Green Acres Farm",
    location: "Remote",
  },
  {
    id: 2,
    title: "Adaptive Grazing Specialist",
    company: "Regenerative Ranching Co.",
    location: "Texas",
  },
  {
    id: 3,
    title: "Compost Production Manager",
    company: "Soil Builders Inc.",
    location: "California",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box>
      <Box bg="green.500" color="white" py={20}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            RegenAgWork.com
          </Heading>
          <Text fontSize="xl" mb={8}>
            Find your dream job in regenerative agriculture
          </Text>
          <Stack direction={["column", "row"]} spacing={4}>
            <Input placeholder="Search jobs..." size="lg" value={searchTerm} onChange={handleSearch} />
            <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" px={8}>
              Search
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container maxW="container.lg" py={12}>
        <Grid templateColumns={["1fr", "1fr 1fr"]} gap={8}>
          {filteredJobs.map((job) => (
            <Box key={job.id} borderWidth={1} p={6} borderRadius="md">
              <Heading as="h2" size="lg" mb={2}>
                {job.title}
              </Heading>
              <Text fontSize="md" mb={4}>
                {job.company} - {job.location}
              </Text>
              <Link href="#" color="green.500">
                View Details
              </Link>
            </Box>
          ))}
        </Grid>
      </Container>
      <Divider my={12} />
      <Container maxW="container.lg" py={12}>
        <Heading as="h2" size="xl" mb={8}>
          About RegenAgWork.com
        </Heading>
        <Stack direction={["column", "row"]} spacing={8}>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWdlbmVyYXRpdmUlMjBhZ3JpY3VsdHVyZXxlbnwwfHx8fDE3MTE2NDUxNTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Regenerative Agriculture" mb={4} />
            <Text fontSize="lg">RegenAgWork.com is the leading job board for regenerative agriculture professionals. We connect passionate individuals with meaningful careers in various regenerative ag niches, including no-till farming, adaptive grazing, compost production, and more.</Text>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmd8ZW58MHx8fHwxNzExNjQ1MTU5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sustainable Farming" mb={4} />
            <Text fontSize="lg">Our mission is to support the growth of regenerative agriculture by facilitating connections between employers and job seekers who share a commitment to sustainable and regenerative practices. Join our community today and take the next step in your regenerative agriculture career!</Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
