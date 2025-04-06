// ContactSection.tsx
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function ContactUs() {
  return (
    <Flex
      color="white"
      py={20}
      px={10}
      justify="center"
      align="center"
      minH="100vh"
    >
      <Flex
        _hover={{
          boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)",
          transform: "scale(1.02)",
          transition: "all 0.3s ease-in-out",
        }}
        maxW="1200px"
        w="full"
        borderRadius="2xl"
        p={10}
        gap={10}
        flexDirection={{ base: "column", md: "row" }}
        bg="#0a0a0a"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
      >
        {/* Left Side */}
        <VStack align="start" flex="1" spacing={4}>
          <Heading color={"blue.300"} fontSize="3xl" fontWeight="bold">
            CONTACT US
          </Heading>
          <Text fontSize="sm" color="gray.300">
            Reach out to us and we’ll get back to you as soon as possible.
          </Text>

          <Box>
            <Heading color={"blue.300"} fontSize="md" mb={1}>
              Address
            </Heading>
            <HStack spacing={2}>
              <Icon as={FaMapMarkerAlt} />
              <Text fontSize="sm">Addis Abeba, Ethiopia</Text>
            </HStack>
          </Box>

          <Box>
            <Heading color={"blue.300"} fontSize="md" mb={1}>
              Phone
            </Heading>
            <HStack spacing={2}>
              <Icon as={FaPhone} />
              <Text fontSize="sm">+251963659350</Text>
            </HStack>
          </Box>

          <Box>
            <Heading color={"blue.300"} fontSize="md" mb={1}>
              Email
            </Heading>
            <HStack spacing={2}>
              <Icon as={FaEnvelope} />
              <Text fontSize="sm">beimnetmelese16@gmail.com</Text>
            </HStack>
          </Box>

          <HStack pt={4} spacing={4}>
            <Icon as={FaFacebook} boxSize={5} cursor="pointer" />
            <Icon as={FaTwitter} boxSize={5} cursor="pointer" />
            <Icon as={FaInstagram} boxSize={5} cursor="pointer" />
            <Icon as={FaLinkedin} boxSize={5} cursor="pointer" />
          </HStack>
        </VStack>

        {/* Right Side (Form) */}
        <Box
          flex="1"
          bg="rgba(255, 255, 255, 0.05)" // transparent effect
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
          borderRadius="xl"
          p={8}
        >
          <Heading color={"blue.300"} fontSize="xl" mb={5}>
            GET IN TOUCH
          </Heading>
          <VStack spacing={4}>
            <Input
              border="none"
              bg="rgba(255, 255, 255, 0.00)"
              borderBottom={"1px solid"}
              borderBottomWidth={"1px"}
              placeholder="Email"
              variant="filled"
              _placeholder={{ color: "gray.300" }}
            />
            <Input
              border="none"
              bg="rgba(255, 255, 255, 0.00)"
              borderBottom={"1px solid"}
              borderBottomWidth={"1px"}
              borderColor={"white"}
              placeholder="Subject"
              variant="filled"
              _placeholder={{ color: "gray.300" }}
            />

            <Input
              placeholder="Message"
              variant="filled"
              border="none"
              bg="rgba(255, 255, 255, 0.00)"
              borderBottom={"1px solid"}
              borderBottomWidth={"1px"}
              _placeholder={{ color: "gray.300" }}
            />
            <Button bg={"blue.600"} w="full" mt={2}>
              Send Message
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ContactUs;
