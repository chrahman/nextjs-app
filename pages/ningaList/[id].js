import { Flex, Spacer, Box, Button, ButtonGroup, Heading, ListItem, List, Text, Stack } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = async () => { 
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(ninga => {
        return {
            params: { id: ninga.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return {
        props: { ninga: data }
    }

}

function index({ninga}) {
    const router = useRouter();
    return (
      <>
        <Head>
          <title>{`${ninga.name} - Details Page`}</title>
          <meta name="description" content="Details Page" />
          <meta name="index" content="noindex" />
        </Head>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading as="h1" size="lg" mb={4}>
              User Details
            </Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2" p="2">
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="brand"
              size="sm"
              onClick={router.back}
            >
              Go Back
            </Button>
          </ButtonGroup>
        </Flex>

        <Box
          maxW="sm"
          rounded="lg"
          overflow="hidden"
          backgroundColor="#fafafa"
          p="3"
        >
          <Flex
            px={6}
            py={4}
            direction="row"
            align="center"
            justify="space-between"
          >
            <Stack spacing={4}>
              <Text fontSize="xl" fontWeight="bold" color="#444">
                {ninga.name}
              </Text>
              <Text fontSize="md" color="#777">
                {ninga.email}
              </Text>
            </Stack>
            {/* <Image src="/avatar.jpg" size={48} /> */}
          </Flex>
          <List px={6} py={4}>
            <ListItem>Username: {ninga.username}</ListItem>
            <ListItem>
              Address: {ninga.address.street}, {ninga.address.suite},{" "}
              {ninga.address.city}, {ninga.address.zipcode}
            </ListItem>
            <ListItem>Phone: {ninga.phone}</ListItem>
            <ListItem>Website: {ninga.website}</ListItem>
            <ListItem>
              Company: {ninga.company.name} ({ninga.company.catchPhrase})
            </ListItem>
          </List>
          <Box px={6} py={4}>
            <Text fontSize="md" color="#777">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>
      </>
    );
}

export default index;
