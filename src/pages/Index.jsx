import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Stack, Grid, Image, Link, Divider, Container, SimpleGrid } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import FeaturedJobs from "../components/FeaturedJobs";
import Footer from "../components/Footer";

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
      <Box backgroundImage="url('https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWdlbmVyYXRpdmUlMjBhZ3JpY3VsdHVyZXxlbnwwfHx8fDE3MTE2NDUxNTl8MA&ixlib=rb-4.0.3&q=80&w=1080')" backgroundSize="cover" backgroundPosition="center" minHeight="70vh" display="flex" alignItems="center" justifyContent="center" color="white" py={20}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Find your dream job in regenerative agriculture
          </Heading>
          <Stack direction={["column", "row"]} spacing={4} justifyContent="center">
            <Input placeholder="Search jobs..." size="lg" value={searchTerm} onChange={handleSearch} maxWidth="400px" />
            <Button leftIcon={<FaSearch />} colorScheme="green" size="lg" px={8}>
              Search
            </Button>
          </Stack>
        </Box>
      </Box>
      <Container maxW="container.lg" py={12}>
        <FeaturedJobs jobs={jobs.slice(0, 3)} />
      </Container>
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
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About RegenAgWork.com
            </Heading>
            <Text fontSize="lg" mb={6}>
              RegenAgWork.com is the leading job board for regenerative agriculture professionals. We connect passionate individuals with meaningful careers in various regenerative ag niches, including no-till farming, adaptive grazing, compost production, and more.
            </Text>
            <Text fontSize="lg">Our mission is to support the growth of regenerative agriculture by facilitating connections between employers and job seekers who share a commitment to sustainable and regenerative practices. Join our community today and take the next step in your regenerative agriculture career!</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWdlbmVyYXRpdmUlMjBhZ3JpY3VsdHVyZXxlbnwwfHx8fDE3MTE2NDUxNTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Regenerative Agriculture" mb={4} borderRadius="md" boxShadow="md" />
          </Box>
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;
