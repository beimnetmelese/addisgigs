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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;

    // Submit the form using JS
    fetch("https://formsubmit.co/addisgigs@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        onOpen();
        setFormData({ email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("Form submission error:", err);
      });
  };

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
          <Text fontSize="sm" color="gray.100">
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
              <Text fontSize="sm">addisgigs@gmail.com</Text>
            </HStack>
          </Box>
        </VStack>

        {/* Right Side (Form) */}
        <Box
          flex="1"
          bg="rgba(255, 255, 255, 0.05)"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
          borderRadius="xl"
          p={8}
        >
          <Heading color={"blue.300"} fontSize="xl" mb={5}>
            GET IN TOUCH
          </Heading>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                border="none"
                bg="rgba(255, 255, 255, 0.00)"
                borderBottom="1px solid"
                placeholder="Email"
                variant="filled"
                required
                _placeholder={{ color: "gray.300" }}
              />
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                border="none"
                bg="rgba(255, 255, 255, 0.00)"
                borderBottom="1px solid"
                borderColor="white"
                placeholder="Subject"
                variant="filled"
                required
                _placeholder={{ color: "gray.300" }}
              />
              <Input
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                variant="filled"
                border="none"
                bg="rgba(255, 255, 255, 0.00)"
                borderBottom="1px solid"
                required
                _placeholder={{ color: "gray.300" }}
              />
              {/* Hidden input to disable CAPTCHA */}
              <input type="hidden" name="_captcha" value="false" />
              <Button bg={"blue.600"} w="full" mt={2} type="submit">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="#0a0a0a" color="white">
          <ModalHeader color="blue.300">Message Sent</ModalHeader>
          <ModalBody>Your message has been sent successfully!</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default ContactUs;
