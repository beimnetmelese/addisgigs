// component/footer.tsx
import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Image,
  Link,
  Divider,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logos.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg="#0a0a0f"
      borderTop="1px solid rgba(255,255,255,0.05)"
      color="white"
      mt="auto"
    >
      <Box
        maxW="1400px"
        mx="auto"
        px={{ base: "20px", md: "60px", xl: "100px" }}
        py={12}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {/* Logo and About */}
          <VStack align="start" spacing={4}>
            <Image src={logo} boxSize="50px" objectFit="contain" />
            <Text fontSize="14px" color="gray.400" lineHeight="1.8">
              Empowering businesses with cutting-edge technology solutions. We
              build web apps, mobile apps, and Telegram bots.
            </Text>
            <HStack spacing={4}>
              <Link href="#" isExternal _hover={{ color: "#60a5fa" }}>
                <Icon
                  as={FaFacebook}
                  boxSize="20px"
                  color="gray.400"
                  _hover={{ color: "#60a5fa" }}
                />
              </Link>
              <Link href="#" isExternal _hover={{ color: "#60a5fa" }}>
                <Icon
                  as={FaTwitter}
                  boxSize="20px"
                  color="gray.400"
                  _hover={{ color: "#60a5fa" }}
                />
              </Link>
              <Link href="#" isExternal _hover={{ color: "#60a5fa" }}>
                <Icon
                  as={FaLinkedin}
                  boxSize="20px"
                  color="gray.400"
                  _hover={{ color: "#60a5fa" }}
                />
              </Link>
              <Link href="#" isExternal _hover={{ color: "#60a5fa" }}>
                <Icon
                  as={FaGithub}
                  boxSize="20px"
                  color="gray.400"
                  _hover={{ color: "#60a5fa" }}
                />
              </Link>
              <Link
                href="https://t.me/AddisGigsBot"
                isExternal
                _hover={{ color: "#60a5fa" }}
              >
                <Icon
                  as={FaTelegram}
                  boxSize="20px"
                  color="gray.400"
                  _hover={{ color: "#60a5fa" }}
                />
              </Link>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing={3}>
            <Text fontSize="16px" fontWeight="700" color="white">
              Quick Links
            </Text>
            <Link href="#home" _hover={{ color: "#60a5fa" }}>
              Home
            </Link>
            <Link href="#service" _hover={{ color: "#60a5fa" }}>
              Services
            </Link>
            <Link href="#portfolio" _hover={{ color: "#60a5fa" }}>
              Portfolio
            </Link>
            <Link href="#price" _hover={{ color: "#60a5fa" }}>
              Pricing
            </Link>
            <Link href="#why-choose-us" _hover={{ color: "#60a5fa" }}>
              Why Us
            </Link>
            <Link href="#contact" _hover={{ color: "#60a5fa" }}>
              Contact
            </Link>
          </VStack>

          {/* Services */}
          <VStack align="start" spacing={3}>
            <Text fontSize="16px" fontWeight="700" color="white">
              Services
            </Text>
            <Text
              fontSize="14px"
              color="gray.400"
              _hover={{ color: "#60a5fa" }}
            >
              Web Development
            </Text>
            <Text
              fontSize="14px"
              color="gray.400"
              _hover={{ color: "#60a5fa" }}
            >
              Mobile Apps
            </Text>
            <Text
              fontSize="14px"
              color="gray.400"
              _hover={{ color: "#60a5fa" }}
            >
              Telegram Bots
            </Text>
            <Text
              fontSize="14px"
              color="gray.400"
              _hover={{ color: "#60a5fa" }}
            >
              UI/UX Design
            </Text>
            <Text
              fontSize="14px"
              color="gray.400"
              _hover={{ color: "#60a5fa" }}
            >
              Cloud Solutions
            </Text>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={3}>
            <Text fontSize="16px" fontWeight="700" color="white">
              Contact Info
            </Text>
            <HStack spacing={3}>
              <Icon as={FaMapMarkerAlt} color="#60a5fa" boxSize="16px" />
              <Text fontSize="14px" color="gray.400">
                Addis Ababa, Ethiopia
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaPhone} color="#60a5fa" boxSize="16px" />
              <Text fontSize="14px" color="gray.400">
                +251 963 659 350
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color="#60a5fa" boxSize="16px" />
              <Text fontSize="14px" color="gray.400">
                addisgigs@gmail.com
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaTelegram} color="#60a5fa" boxSize="16px" />
              <Text fontSize="14px" color="gray.400">
                @AddisGigsBot
              </Text>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="rgba(255,255,255,0.05)" my={8} />

        {/* Bottom Bar */}
        <HStack
          justify="space-between"
          wrap="wrap"
          spacing={4}
          fontSize="14px"
          color="gray.500"
        >
          <Text>© {currentYear} AddisGigs. All rights reserved.</Text>
          <HStack spacing={6}>
            <Link href="#" _hover={{ color: "#60a5fa" }}>
              Privacy Policy
            </Link>
            <Link href="#" _hover={{ color: "#60a5fa" }}>
              Terms of Service
            </Link>
            <Link href="#" _hover={{ color: "#60a5fa" }}>
              Cookie Policy
            </Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Footer;
