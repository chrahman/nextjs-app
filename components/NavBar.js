import React from "react";
import Link from "next/link";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link href="/">
              <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color="gray.600"
                _dark={{
                  color: "white",
                  _hover: {
                    color: "gray.300",
                  },
                }}
                _hover={{
                  color: "gray.700",
                }}
              >
                <Image src="/vercel.svg" alt="logo" width={80} height={40} />
              </chakra.h1>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>

              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>

              <Link href="/contact">
                <Button variant="ghost">Contact us</Button>
              </Link>

              <Link href="/ningaList">
                <Button variant="ghost">Ninga List</Button>
              </Link>

              <Link href="/company">
                <Button variant="ghost">Company</Button>
              </Link>
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="lg"
                zIndex="999"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link href="/">
                  <Button variant="ghost" onClick={mobileNav.onClose}>
                    Home
                  </Button>
                </Link>

                <Link href="/about">
                  <Button variant="ghost" onClick={mobileNav.onClose}>
                    About
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button variant="ghost" onClick={mobileNav.onClose}>
                    Contact us
                  </Button>
                </Link>

                <Link href="/ningaList">
                  <Button variant="ghost" onClick={mobileNav.onClose}>
                    Ninga List
                  </Button>
                </Link>

                <Link href="/company">
                  <Button variant="ghost" onClick={mobileNav.onClose}>
                    Company
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};
export default Navbar;
