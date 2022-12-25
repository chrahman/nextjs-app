import { CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon, Flex , Box, Spacer, Heading, color } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ningas: data },
  };
};


function Ninga({ ningas }) {
  return (
    <>
      <Head>
        <title>Ninga List page</title>
        <meta name="description" content="Ninga List page" />
      </Head>

      <Heading as="h1" size="xl" mb={4}>
        Ninga users List
      </Heading>

      <List spacing={3}>
        {ningas.map((ninga) => (
          <ListItem
            paddingY="16px"
            paddingX="10px"
            background="white"
            shadow="xs"
            borderLeft="10px solid"
            borderColor="brand.500"
            transition="all 0.2s ease-in-out"
            _hover={{
              borderColor: "green.500",
            }}
          >
            <Flex
              minWidth="max-content"
              alignItems="center"
              gap="2"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box p="2">
                <Heading size="md">{`User ${ninga.id}`}</Heading>
              </Box>
              <Spacer />
              <Box p="2">
                <Heading size="md">{`${ninga.name}`}</Heading>
              </Box>
              <Spacer />
              <Box
                p="2"
                color="twitter.900"
                fontSize="md"
                _hover={{ textDecoration: "underline" }}
              >
                <Link href={`/ningaList/${ninga.id}`} key={ninga.id}>
                  Click to check details
                </Link>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Ninga;
