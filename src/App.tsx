// App.tsx
import { Box, VStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./component/navBar";
import Hero from "./component/hero";
import Service from "./component/service";
import Price from "./component/price";
import AboutUs from "./component/aboutUs";
import ContactUs from "./component/contactUs";
import FloatingIcons from "./component/floatingIcons";
import Portfolio from "./component/portofolio";
import Testimonials from "./component/testimonials";
import Footer from "./component/footer";

function App() {
  return (
    <Box
      bg="#0a0a0f"
      minH="100vh"
      overflowX="hidden"
      display="flex"
      flexDirection="column"
    >
      <FloatingIcons />
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={30}
        backdropFilter="blur(20px)"
        bg="rgba(10, 10, 15, 0.85)"
        borderBottom="1px solid rgba(255,255,255,0.05)"
      >
        <NavBar />
      </Box>

      <VStack spacing={0} align="stretch" flex="1">
        {/* Hero - Full width, no padding */}
        <Box id="home" as="section">
          <Hero />
        </Box>

        {/* Other sections with padding */}
        <Box
          id="service"
          as="section"
          px={{ base: "20px", md: "60px", xl: "100px" }}
          py={{ base: "40px", md: "60px" }}
        >
          <Service />
        </Box>

        <Box
          id="portfolio"
          as="section"
          px={{ base: "20px", md: "60px", xl: "100px" }}
          py={{ base: "40px", md: "60px" }}
        >
          <Portfolio />
        </Box>

        <Box
          id="price"
          as="section"
          px={{ base: "20px", md: "60px", xl: "100px" }}
          py={{ base: "40px", md: "60px" }}
        >
          <Price />
        </Box>

        <Box
          id="testimonials"
          as="section"
          px={{ base: "20px", md: "60px", xl: "100px" }}
          py={{ base: "40px", md: "60px" }}
        >
          <Testimonials />
        </Box>

        <Box
          id="why-choose-us"
          as="section"
          px={{ base: "20px", md: "60px", xl: "100px" }}
          py={{ base: "40px", md: "60px" }}
        >
          <AboutUs />
        </Box>

        <Box
          id="contact"
          as="section"
          px={{ base: "20px", md: "60px", xl: "100px" }}
          py={{ base: "40px", md: "60px" }}
        >
          <ContactUs />
        </Box>
      </VStack>

      <Footer />
    </Box>
  );
}

export default App;
