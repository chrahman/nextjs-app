import React from "react";
import { Box, Heading, Text, Grid, GridGap, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

function contact() {
  return (
    <Box mx="auto" px={0} py={8}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={20}>
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            Contact us
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          </Text>
        </Box>
        <Box>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "This is only experimental Site in Next.js. And this form won't work!"
              );
            }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" placeholder="Enter your name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                id="subject"
                type="text"
                placeholder="Enter the subject of your message"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea id="message" placeholder="Enter your message" />
            </FormControl>
            <Button mt={4} colorScheme="brand" type="submit">
              Send Message
            </Button>
          </form>
        </Box>
      </Grid>
    </Box>
  );
}

export default contact;
