import React from "react";
import { Box, Heading, Text, Grid, Link } from "@chakra-ui/react";

const FeaturedJobs = ({ jobs }) => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={8}>
        Featured Jobs
      </Heading>
      <Grid templateColumns={["1fr", "1fr 1fr"]} gap={8}>
        {jobs.map((job) => (
          <Box key={job.id} borderWidth={1} p={6} borderRadius="md">
            <Heading as="h3" size="lg" mb={2}>
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
    </Box>
  );
};

export default FeaturedJobs;
