// component/aboutUs.tsx
import {
  Box,
  HStack,
  Text,
  VStack,
  Icon,
  keyframes,
  Badge,
  SimpleGrid,
  useBreakpointValue,
  Divider,
  Button,
} from "@chakra-ui/react";
import {
  FaRocket,
  FaCog,
  FaClock,
  FaHeadset,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaAward,
  FaHandshake,
  FaCode,
  FaMobile,
  FaRobot,
  FaChartLine,
  FaStar,
  FaHeart,
  FaBrain,
  FaGlobe,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

interface ValueItemProps {
  title: string;
  description: string;
  icon: any;
  index: number;
}

const ValueItem = ({ title, description, icon, index }: ValueItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`,
  };

  return (
    <Box
      ref={ref}
      style={style}
      p={6}
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.03)"
      border="1px solid rgba(255,255,255,0.06)"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "rgba(59, 130, 246, 0.3)",
        bg: "rgba(255, 255, 255, 0.06)",
      }}
    >
      <HStack spacing={4} align="start">
        <Box
          w="48px"
          h="48px"
          borderRadius="xl"
          bg="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Icon as={icon} color="#60a5fa" boxSize="20px" />
        </Box>
        <Box>
          <Text color="white" fontWeight="600" fontSize="16px" mb={1}>
            {title}
          </Text>
          <Text color="gray.400" fontSize="14px" lineHeight="1.6">
            {description}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

interface StatItemProps {
  number: string;
  label: string;
  icon: any;
}

const StatItem = ({ number, label, icon }: StatItemProps) => {
  return (
    <VStack
      spacing={2}
      p={6}
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.03)"
      border="1px solid rgba(255,255,255,0.06)"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px) scale(1.02)",
        borderColor: "rgba(59, 130, 246, 0.3)",
        bg: "rgba(255, 255, 255, 0.06)",
      }}
      w="full"
    >
      <Icon as={icon} color="#60a5fa" boxSize="24px" />
      <Text fontSize="32px" fontWeight="800" color="white">
        {number}
      </Text>
      <Text fontSize="14px" color="gray.400">
        {label}
      </Text>
    </VStack>
  );
};

function AboutUs() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies to deliver innovative solutions that push boundaries.",
      icon: FaLightbulb,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We work closely with you to understand and achieve your goals.",
      icon: FaHandshake,
    },
    {
      title: "Quality Assurance",
      description:
        "We maintain the highest standards of quality in every project, ensuring excellence and reliability.",
      icon: FaShieldAlt,
    },
    {
      title: "Continuous Growth",
      description:
        "We invest in learning and development to stay ahead of industry trends and technologies.",
      icon: FaChartLine,
    },
    {
      title: "Transparent Communication",
      description:
        "We keep you informed at every stage, ensuring clarity and trust throughout the process.",
      icon: FaUsers,
    },
    {
      title: "Passion for Excellence",
      description:
        "We take pride in our work and strive to exceed expectations in everything we create.",
      icon: FaHeart,
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: FaCode },
    { number: "98%", label: "Client Satisfaction", icon: FaStar },
    { number: "4.8★", label: "Average Rating", icon: FaAward },
    { number: "24/7", label: "Support Available", icon: FaHeadset },
  ];

  const services = [
    {
      title: "Web Application Development",
      description: "Full-stack web solutions with modern frameworks",
      icon: FaGlobe,
    },
    {
      title: "Mobile Application Development",
      description: "Cross-platform apps for Android and iOS",
      icon: FaMobile,
    },
    {
      title: "Telegram Bot Development",
      description: "Intelligent bots with AI integration",
      icon: FaRobot,
    },
  ];

  return (
    <Box maxW="1400px" mx="auto" position="relative">
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="5%"
        left="-10%"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, rgba(59,130,246,0.03), transparent 70%)"
        borderRadius="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="10%"
        right="-10%"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, rgba(139,92,246,0.03), transparent 70%)"
        borderRadius="full"
        pointerEvents="none"
      />

      <VStack spacing={isMobile ? 12 : 20} position="relative">
        {/* Header */}
        <VStack
          spacing={4}
          textAlign="center"
          ref={headerRef}
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          <Badge
            colorScheme="blue"
            bg="rgba(59,130,246,0.1)"
            color="#60a5fa"
            px="20px"
            py="8px"
            borderRadius="full"
            fontSize="12px"
            border="1px solid rgba(59,130,246,0.2)"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            <HStack spacing={2}>
              <Box w="6px" h="6px" borderRadius="full" bg="#3b82f6" />
              <Text>About Us</Text>
            </HStack>
          </Badge>

          <Text
            fontSize={{ base: "32px", md: "48px", lg: "56px" }}
            fontWeight="800"
            color="white"
            letterSpacing="-0.02em"
            lineHeight="1.1"
          >
            Who We{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #3b82f6, #8b5cf6, #3b82f6)"
              bgClip="text"
              backgroundSize="200%"
              animation={`${shimmer} 4s ease-in-out infinite`}
            >
              Are
            </Text>
          </Text>

          <Text
            color="gray.300"
            maxW="800px"
            fontSize={isMobile ? "16px" : "20px"}
            lineHeight="1.8"
            px={{ base: "10px", md: "0" }}
          >
            AddisGigs is a forward-thinking technology company dedicated to
            empowering businesses through innovative digital solutions. We
            specialize in building cutting-edge web applications, mobile apps,
            and intelligent Telegram bots that drive growth and efficiency.
          </Text>
        </VStack>

        {/* Mission & Vision Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
          <Box
            p={8}
            borderRadius="2xl"
            bg="rgba(255, 255, 255, 0.03)"
            border="1px solid rgba(255,255,255,0.06)"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "rgba(59, 130, 246, 0.3)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
            style={{
              opacity: isHeaderVisible ? 1 : 0,
              transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.2}s`,
            }}
          >
            <VStack align="start" spacing={4}>
              <Icon as={FaRocket} color="#60a5fa" boxSize="28px" />
              <Text fontSize="24px" fontWeight="700" color="white">
                Our Mission
              </Text>
              <Text fontSize="15px" color="gray.300" lineHeight="1.8">
                To empower businesses of all sizes with accessible, innovative,
                and high-quality digital solutions that drive growth, streamline
                operations, and create meaningful impact in their industries.
              </Text>
            </VStack>
          </Box>

          <Box
            p={8}
            borderRadius="2xl"
            bg="rgba(255, 255, 255, 0.03)"
            border="1px solid rgba(255,255,255,0.06)"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "rgba(139, 92, 246, 0.3)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
            style={{
              opacity: isHeaderVisible ? 1 : 0,
              transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.3}s`,
            }}
          >
            <VStack align="start" spacing={4}>
              <Icon as={FaBrain} color="#8b5cf6" boxSize="28px" />
              <Text fontSize="24px" fontWeight="700" color="white">
                Our Vision
              </Text>
              <Text fontSize="15px" color="gray.300" lineHeight="1.8">
                To become Ethiopia's leading technology partner, recognized for
                excellence in digital innovation, client satisfaction, and
                contributions to the growth of the tech ecosystem in Africa.
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Statistics */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="full">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </SimpleGrid>

        {/* What We Do */}
        <VStack spacing={8} w="full">
          <VStack spacing={3} textAlign="center">
            <Badge
              colorScheme="blue"
              bg="rgba(59,130,246,0.1)"
              color="#60a5fa"
              px="16px"
              py="6px"
              borderRadius="full"
              fontSize="11px"
            >
              <HStack spacing={2}>
                <Box w="4px" h="4px" borderRadius="full" bg="#3b82f6" />
                <Text>Our Expertise</Text>
              </HStack>
            </Badge>
            <Text
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="700"
              color="white"
            >
              What We Do Best
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            {services.map((service, index) => (
              <Box
                key={index}
                p={6}
                borderRadius="2xl"
                bg="rgba(255, 255, 255, 0.03)"
                border="1px solid rgba(255,255,255,0.06)"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-4px)",
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  bg: "rgba(255, 255, 255, 0.06)",
                }}
                style={{
                  opacity: isHeaderVisible ? 1 : 0,
                  transform: isHeaderVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.4 + index * 0.1}s`,
                }}
              >
                <VStack align="start" spacing={3}>
                  <Icon as={service.icon} color="#60a5fa" boxSize="24px" />
                  <Text fontSize="18px" fontWeight="600" color="white">
                    {service.title}
                  </Text>
                  <Text fontSize="14px" color="gray.400" lineHeight="1.6">
                    {service.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Core Values */}
        <VStack spacing={8} w="full">
          <VStack spacing={3} textAlign="center">
            <Badge
              colorScheme="blue"
              bg="rgba(59,130,246,0.1)"
              color="#60a5fa"
              px="16px"
              py="6px"
              borderRadius="full"
              fontSize="11px"
            >
              <HStack spacing={2}>
                <Box w="4px" h="4px" borderRadius="full" bg="#3b82f6" />
                <Text>Our Values</Text>
              </HStack>
            </Badge>
            <Text
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="700"
              color="white"
            >
              Core Values That Drive Us
            </Text>
            <Text color="gray.400" maxW="600px" fontSize="15px">
              These principles guide everything we do at AddisGigs
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="full">
            {values.map((value, index) => (
              <ValueItem key={index} {...value} index={index} />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Why Choose Us Section */}
        <Box
          w="full"
          p={8}
          borderRadius="2xl"
          bg="linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))"
          border="1px solid rgba(59,130,246,0.1)"
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.6}s`,
          }}
        >
          <VStack spacing={6} align="center">
            <VStack spacing={2} textAlign="center">
              <Badge
                colorScheme="blue"
                bg="rgba(59,130,246,0.15)"
                color="#60a5fa"
                px="16px"
                py="6px"
                borderRadius="full"
                fontSize="11px"
              >
                Why Choose Us
              </Badge>
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="white"
              >
                Why Partner With AddisGigs?
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
              <HStack
                spacing={4}
                p={4}
                borderRadius="xl"
                bg="rgba(255,255,255,0.03)"
              >
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="xl"
                  bg="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon as={FaRocket} color="#60a5fa" boxSize="18px" />
                </Box>
                <Box>
                  <Text color="white" fontWeight="600" fontSize="14px">
                    Expertise Across Platforms
                  </Text>
                  <Text color="gray.400" fontSize="13px">
                    We build web apps, mobile apps, and Telegram bots with the
                    latest technologies.
                  </Text>
                </Box>
              </HStack>

              <HStack
                spacing={4}
                p={4}
                borderRadius="xl"
                bg="rgba(255,255,255,0.03)"
              >
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="xl"
                  bg="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon as={FaCog} color="#60a5fa" boxSize="18px" />
                </Box>
                <Box>
                  <Text color="white" fontWeight="600" fontSize="14px">
                    Tailored Solutions
                  </Text>
                  <Text color="gray.400" fontSize="13px">
                    We create customized solutions to fit your unique business
                    needs.
                  </Text>
                </Box>
              </HStack>

              <HStack
                spacing={4}
                p={4}
                borderRadius="xl"
                bg="rgba(255,255,255,0.03)"
              >
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="xl"
                  bg="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon as={FaClock} color="#60a5fa" boxSize="18px" />
                </Box>
                <Box>
                  <Text color="white" fontWeight="600" fontSize="14px">
                    On-Time Delivery
                  </Text>
                  <Text color="gray.400" fontSize="13px">
                    We ensure timely delivery without compromising on quality.
                  </Text>
                </Box>
              </HStack>

              <HStack
                spacing={4}
                p={4}
                borderRadius="xl"
                bg="rgba(255,255,255,0.03)"
              >
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="xl"
                  bg="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon as={FaHeadset} color="#60a5fa" boxSize="18px" />
                </Box>
                <Box>
                  <Text color="white" fontWeight="600" fontSize="14px">
                    Ongoing Support
                  </Text>
                  <Text color="gray.400" fontSize="13px">
                    We offer continuous support to keep your project running
                    smoothly.
                  </Text>
                </Box>
              </HStack>
            </SimpleGrid>

            <Button
              bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
              color="white"
              px="40px"
              py="28px"
              borderRadius="full"
              fontSize="16px"
              fontWeight="600"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 0 40px rgba(59,130,246,0.3)",
              }}
              transition="all 0.3s"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Work With Us
            </Button>
          </VStack>
        </Box>

        {/* Closing Statement */}
        <Box
          textAlign="center"
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.7}s`,
          }}
        >
          <Divider borderColor="rgba(255,255,255,0.06)" mb={8} />
          <Text
            fontSize="18px"
            color="gray.400"
            maxW="700px"
            mx="auto"
            lineHeight="1.8"
          >
            At AddisGigs, we're more than just developers — we're your strategic
            technology partner. We combine technical expertise with a deep
            understanding of business needs to deliver solutions that create
            real value.
          </Text>
          <Text fontSize="16px" color="#60a5fa" mt={4} fontWeight="600">
            Let's build something amazing together.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default AboutUs;
