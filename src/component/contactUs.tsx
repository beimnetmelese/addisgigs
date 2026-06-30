// component/contactUs.tsx
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
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegramPlane,
} from "react-icons/fa";

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
    <Box maxW="1400px" mx="auto">
      <VStack spacing={12}>
        <VStack spacing={4} textAlign="center">
          <Text
            fontSize="12px"
            fontWeight="600"
            color="#60a5fa"
            letterSpacing="3px"
            textTransform="uppercase"
          >
            Contact Us
          </Text>
          <Text
            fontSize={{ base: "32px", md: "48px" }}
            fontWeight="800"
            color="white"
            letterSpacing="-0.02em"
          >
            Get In{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #3b82f6, #8b5cf6)"
              bgClip="text"
            >
              Touch
            </Text>
          </Text>
        </VStack>

        <Flex
          w="full"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          gap={10}
          flexDirection={{ base: "column", lg: "row" }}
          bg="rgba(255,255,255,0.03)"
          border="1px solid rgba(255,255,255,0.06)"
          transition="all 0.3s"
          _hover={{
            borderColor: "rgba(59,130,246,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Left Side */}
          <VStack align="start" flex="1" spacing={6}>
            <Heading fontSize="24px" fontWeight="700" color="white">
              Let's Build Something Amazing Together
            </Heading>
            <Text fontSize="15px" color="gray.400" lineHeight="1.8">
              Have a project in mind? We'd love to hear about it. Reach out and
              we'll get back to you within 24 hours.
            </Text>

            <VStack align="start" spacing={4} pt={4} w="full">
              <HStack spacing={4}>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="rgba(59,130,246,0.1)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaMapMarkerAlt} color="#60a5fa" boxSize="16px" />
                </Box>
                <Box>
                  <Text fontSize="13px" color="gray.500">
                    Address
                  </Text>
                  <Text fontSize="15px" color="white">
                    Addis Ababa, Ethiopia
                  </Text>
                </Box>
              </HStack>

              <HStack spacing={4}>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="rgba(59,130,246,0.1)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaPhone} color="#60a5fa" boxSize="16px" />
                </Box>
                <Box>
                  <Text fontSize="13px" color="gray.500">
                    Phone
                  </Text>
                  <Text fontSize="15px" color="white">
                    +251 963 659 350
                  </Text>
                </Box>
              </HStack>

              <HStack spacing={4}>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="rgba(59,130,246,0.1)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaEnvelope} color="#60a5fa" boxSize="16px" />
                </Box>
                <Box>
                  <Text fontSize="13px" color="gray.500">
                    Email
                  </Text>
                  <Text fontSize="15px" color="white">
                    addisgigs@gmail.com
                  </Text>
                </Box>
              </HStack>

              <HStack spacing={4}>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="rgba(59,130,246,0.1)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaTelegramPlane} color="#60a5fa" boxSize="16px" />
                </Box>
                <Box>
                  <Text fontSize="13px" color="gray.500">
                    Telegram
                  </Text>
                  <Text fontSize="15px" color="white">
                    @AddisGigsBot
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </VStack>

          {/* Right Side - Form */}
          <Box
            flex="1"
            bg="rgba(255,255,255,0.03)"
            borderRadius="xl"
            p={{ base: 6, md: 8 }}
            border="1px solid rgba(255,255,255,0.06)"
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  variant="filled"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.08)"
                  borderRadius="lg"
                  color="white"
                  _focus={{
                    borderColor: "#3b82f6",
                    boxShadow: "0 0 20px rgba(59,130,246,0.1)",
                  }}
                  _placeholder={{ color: "gray.500" }}
                  required
                />
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  variant="filled"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.08)"
                  borderRadius="lg"
                  color="white"
                  _focus={{
                    borderColor: "#3b82f6",
                    boxShadow: "0 0 20px rgba(59,130,246,0.1)",
                  }}
                  _placeholder={{ color: "gray.500" }}
                  required
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  variant="filled"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.08)"
                  borderRadius="lg"
                  color="white"
                  minH="120px"
                  _focus={{
                    borderColor: "#3b82f6",
                    boxShadow: "0 0 20px rgba(59,130,246,0.1)",
                  }}
                  _placeholder={{ color: "gray.500" }}
                  required
                />
                <input type="hidden" name="_captcha" value="false" />
                <Button
                  type="submit"
                  w="full"
                  bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
                  color="white"
                  py="28px"
                  fontSize="16px"
                  fontWeight="600"
                  borderRadius="full"
                  _hover={{
                    transform: "scale(1.02)",
                    boxShadow: "0 0 40px rgba(59,130,246,0.3)",
                  }}
                  transition="all 0.3s"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </VStack>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          bg="#1a1a2e"
          color="white"
          border="1px solid rgba(255,255,255,0.06)"
        >
          <ModalHeader color="#60a5fa">Message Sent 🎉</ModalHeader>
          <ModalBody fontSize="15px" color="gray.300">
            Your message has been sent successfully! We'll get back to you
            within 24 hours.
          </ModalBody>
          <ModalFooter>
            <Button
              bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
              color="white"
              onClick={onClose}
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.3s"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ContactUs;
