import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={6}>
      <Heading mb={4}>About This Project</Heading>
      <Text fontSize="lg" mb={3}>
        The "Head & Tail" page allows users to select values from a dropdown (either H or T) and submit them. Based on the selection pattern, the values are displayed in separate vertical columns helping visualize patterns and logic.
      </Text>
    </Box>
  );
};

export default About;
