// component/service.tsx
import {
  Box,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  keyframes,
  useBreakpointValue,
  Badge,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaTelegramPlane,
  FaCrown,
  FaArrowRight,
} from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.2), 0 0 80px rgba(139, 92, 246, 0.1); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

interface Props {
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  index: number;
}

const ServiceCard = ({ title, description, icon, features, index }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const cardStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s`,
  };

  return (
    <Box
      ref={ref}
      style={cardStyle}
      position="relative"
      w="100%"
      h="100%"
      p={8}
      rounded="2xl"
      bg="rgba(255, 255, 255, 0.03)"
      border="1px solid rgba(255,255,255,0.06)"
      transition="all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      _hover={{
        transform: "translateY(-12px) scale(1.01)",
        borderColor: "rgba(59, 130, 246, 0.4)",
        boxShadow: "0 30px 80px rgba(0, 0, 0, 0.4)",
        bg: "rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Animated background glow */}
      <Box
        position="absolute"
        top="-50%"
        right="-50%"
        w="200%"
        h="200%"
        bg="radial-gradient(circle at 30% 50%, rgba(59,130,246,0.03), transparent 70%)"
        pointerEvents="none"
        animation={`${floatAnimation} 6s ease-in-out infinite`}
        transitionDelay={`${index * 0.5}s`}
      />

      <VStack align="start" spacing={5} position="relative" zIndex={1}>
        <Box
          position="relative"
          w={16}
          h={16}
          borderRadius="xl"
          bg="linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))"
          display="flex"
          alignItems="center"
          justifyContent="center"
          animation={`${glowPulse} 3s ease-in-out infinite`}
          _hover={{
            transform: "scale(1.1) rotate(-5deg)",
          }}
          transition="transform 0.3s"
        >
          <Icon as={icon} boxSize={7} color="#60a5fa" />
        </Box>

        <Badge
          colorScheme="blue"
          bg="rgba(59,130,246,0.1)"
          color="#60a5fa"
          fontSize="10px"
          px="12px"
          py="4px"
          borderRadius="full"
          border="1px solid rgba(59,130,246,0.2)"
        >
          {index === 0
            ? "🚀 Most Popular"
            : index === 1
              ? "⭐ Premium"
              : "🤖 AI Powered"}
        </Badge>

        <Text fontSize="xl" fontWeight="700" color="white">
          {title}
        </Text>

        <Text color="gray.400" lineHeight="1.7" fontSize="15px">
          {description}
        </Text>

        <VStack align="start" spacing={2.5} w="full" pt={2}>
          {features.map((feature, i) => (
            <HStack key={i} spacing={3} _groupHover={{}}>
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
                flexShrink={0}
                transition="all 0.3s"
              />
              <Text
                fontSize="14px"
                color="gray.300"
                transition="color 0.3s"
                _hover={{
                  color: "white",
                }}
              >
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>

        <HStack
          spacing={2}
          color="#60a5fa"
          fontSize="14px"
          fontWeight="500"
          pt={2}
          cursor="pointer"
          _hover={{
            color: "#93c5fd",
          }}
          transition="all 0.3s"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Text>Learn More</Text>
          <Icon
            as={FaArrowRight}
            boxSize="12px"
            transition="transform 0.3s"
            _hover={{ transform: "translateX(5px)" }}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

function Service() {
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

  const services = [
    {
      title: "Web Application Development",
      description:
        "Create polished web experiences with responsive layouts, fast performance, and clean architecture.",
      icon: FaLaptopCode,
      features: [
        "React, Next.js, Node.js",
        "Responsive & Mobile-first",
        "SEO Optimized",
        "Cloud Deployment",
      ],
    },
    {
      title: "Mobile Application Development",
      description:
        "Build mobile-first applications for Android and iOS with premium UI and strong performance.",
      icon: FaMobileAlt,
      features: [
        "React Native, Flutter",
        "Native Performance",
        "App Store & Play Store",
        "Push Notifications",
      ],
    },
    {
      title: "Telegram Bot Development",
      description:
        "Design intelligent Telegram bots that improve engagement, support, and operations.",
      icon: FaTelegramPlane,
      features: [
        "Custom Commands",
        "AI Integration",
        "Real-time Notifications",
        "Web App Integration",
      ],
    },
  ];

  return (
    <Box maxW="1400px" mx="auto" position="relative">
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="10%"
        left="-10%"
        w="500px"
        h="500px"
        bg="radial-gradient(circle, rgba(59,130,246,0.03), transparent 70%)"
        borderRadius="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="10%"
        right="-10%"
        w="500px"
        h="500px"
        bg="radial-gradient(circle, rgba(139,92,246,0.03), transparent 70%)"
        borderRadius="full"
        pointerEvents="none"
      />

      <VStack spacing={isMobile ? 10 : 16} position="relative">
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
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="#3b82f6"
                animation={`${glowPulse} 2s ease-in-out infinite`}
              />
              <Text>What We Do</Text>
            </HStack>
          </Badge>

          <Text
            fontSize={{ base: "32px", md: "48px", lg: "56px" }}
            fontWeight="800"
            color="white"
            letterSpacing="-0.02em"
            lineHeight="1.1"
          >
            Our{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #3b82f6, #8b5cf6, #3b82f6)"
              bgClip="text"
              backgroundSize="200%"
              animation={`${shimmer} 4s ease-in-out infinite`}
            >
              Services
            </Text>
          </Text>

          <Text
            color="gray.400"
            maxW="600px"
            fontSize={isMobile ? "15px" : "18px"}
            lineHeight="1.8"
          >
            Comprehensive digital solutions tailored to your business needs
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={isMobile ? 6 : 8}
          w="full"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </SimpleGrid>

        {/* Bottom CTA */}
        <Box
          w="full"
          display="flex"
          justifyContent="center"
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.4}s`,
          }}
        >
          <HStack
            bg="rgba(255,255,255,0.03)"
            border="1px solid rgba(255,255,255,0.06)"
            borderRadius="2xl"
            px={{ base: 6, md: 10 }}
            py={{ base: 4, md: 6 }}
            spacing={{ base: 4, md: 8 }}
            wrap="wrap"
            justify="center"
            w="100%"
            maxW="700px"
            transition="all 0.3s"
            _hover={{
              borderColor: "rgba(59,130,246,0.2)",
              bg: "rgba(255,255,255,0.05)",
            }}
          >
            <HStack spacing={2}>
              <Icon as={FaCrown} color="#fbbf24" boxSize="20px" />
              <Text color="gray.300" fontSize="14px">
                Need a custom solution?
              </Text>
            </HStack>
            <HStack
              spacing={2}
              color="#60a5fa"
              fontWeight="600"
              cursor="pointer"
              _hover={{ color: "#93c5fd" }}
              transition="color 0.3s"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Text>Let's talk</Text>
              <Icon
                as={FaArrowRight}
                boxSize="14px"
                transition="transform 0.3s"
                _hover={{ transform: "translateX(5px)" }}
              />
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default Service;
