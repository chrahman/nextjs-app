import Footer from "./Footer";
import Navbar from "./NavBar";
import { Container } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" mt={8} as="main">
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
