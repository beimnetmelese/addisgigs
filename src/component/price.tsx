// component/price.tsx
import {
  Box,
  Button,
  Text,
  Icon,
  List,
  ListItem,
  VStack,
  SimpleGrid,
  keyframes,
  Badge,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaCheck, FaRocket, FaStar, FaCrown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const borderGlow = keyframes`
  0%, 100% { border-color: rgba(59, 130, 246, 0.2); }
  50% { border-color: rgba(139, 92, 246, 0.4); }
`;

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  index: number;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  popular,
  index,
}: PricingCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

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
      w="100%"
      position="relative"
      bg={
        popular
          ? "linear-gradient(145deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))"
          : "rgba(255,255,255,0.02)"
      }
      border="1px solid"
      borderColor={popular ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.06)"}
      borderRadius="2xl"
      p={8}
      color="white"
      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      _hover={{
        transform: isMobile
          ? "translateY(-4px)"
          : "translateY(-12px) scale(1.02)",
        boxShadow: popular
          ? "0 30px 80px rgba(59,130,246,0.2)"
          : "0 20px 60px rgba(0, 0, 0, 0.3)",
        borderColor: popular ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.1)",
        bg: popular
          ? "linear-gradient(145deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))"
          : "rgba(255,255,255,0.04)",
      }}
      animation={popular ? `${borderGlow} 3s ease-in-out infinite` : undefined}
    >
      {/* Popular badge with animation */}
      {popular && (
        <Box
          position="absolute"
          top="-14px"
          left="50%"
          transform="translateX(-50%)"
          bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
          px="24px"
          py="6px"
          borderRadius="full"
          fontSize="12px"
          fontWeight="700"
          letterSpacing="1px"
          textTransform="uppercase"
          boxShadow="0 4px 20px rgba(59,130,246,0.3)"
          animation={`${floatAnimation} 3s ease-in-out infinite`}
          whiteSpace="nowrap"
        >
          <HStack spacing={2}>
            <Icon as={FaStar} boxSize="12px" />
            <Text>Most Popular</Text>
          </HStack>
        </Box>
      )}

      {/* Decorative gradient orb */}
      <Box
        position="absolute"
        top="-50%"
        right="-30%"
        w="200%"
        h="200%"
        bg="radial-gradient(circle at 70% 30%, rgba(59,130,246,0.03), transparent 70%)"
        pointerEvents="none"
      />

      <VStack spacing={6} align="start" position="relative" zIndex={1}>
        {/* Header with icon */}
        <HStack spacing={3} w="full" justifyContent="space-between">
          <Text fontSize="22px" fontWeight="700" color="white">
            {title}
          </Text>
          <Icon
            as={popular ? FaCrown : FaRocket}
            color={popular ? "#fbbf24" : "#60a5fa"}
            boxSize="20px"
            opacity={0.6}
          />
        </HStack>

        {/* Price */}
        <Box>
          <Text
            fontSize="44px"
            fontWeight="800"
            color="white"
            letterSpacing="-0.02em"
          >
            {price}
          </Text>
          <Text fontSize="14px" color="gray.400" mt={1}>
            Starting price • Negotiable
          </Text>
        </Box>

        <Text fontSize="15px" color="gray.300" lineHeight="1.7">
          {description}
        </Text>

        {/* Features list with animations */}
        <List spacing={3} w="full" pt={2}>
          {features.map((feature, i) => (
            <ListItem
              key={i}
              display="flex"
              alignItems="center"
              gap={3}
              fontSize="14px"
              color="gray.300"
              transition="all 0.3s"
              _hover={{
                color: "white",
                transform: "translateX(4px)",
              }}
            >
              <Box
                minW="18px"
                h="18px"
                borderRadius="full"
                bg="linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Icon as={FaCheck} color="#60a5fa" boxSize="10px" />
              </Box>
              {feature}
            </ListItem>
          ))}
        </List>

        {/* CTA Button */}
        <Button
          w="full"
          h="56px"
          bg={
            popular
              ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
              : "rgba(255,255,255,0.06)"
          }
          color="white"
          borderRadius="full"
          fontSize="16px"
          fontWeight="600"
          letterSpacing="0.5px"
          border={popular ? "none" : "1px solid rgba(255,255,255,0.1)"}
          _hover={{
            transform: "scale(1.03)",
            boxShadow: popular
              ? "0 0 60px rgba(59,130,246,0.3)"
              : "0 0 30px rgba(255,255,255,0.05)",
            bg: popular
              ? "linear-gradient(135deg, #2563eb, #7c3aed)"
              : "rgba(255,255,255,0.1)",
          }}
          transition="all 0.3s"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {buttonText}
        </Button>

        {/* Trust badge */}
        <HStack spacing={2} justify="center" w="full" opacity={0.4}>
          <Text fontSize="11px" color="gray.500">
            🔒 No hidden fees • 100% secure
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

function Price() {
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

  const pricingPlans = [
    {
      title: "Web Application",
      price: "$10,000++",
      description:
        "Modern web applications tailored to your needs with full-stack development.",
      features: [
        "Payment after completion",
        "Negotiable pricing",
        "Custom responsive design",
        "Secure & scalable backend",
        "Full deployment & docs",
        "Ongoing support",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Mobile Application",
      price: "$15,000++",
      description:
        "Cross-platform apps for Android & iOS with premium user experience.",
      features: [
        "Payment after completion",
        "Negotiable pricing",
        "Premium UI/UX design",
        "App Store & Play Store",
        "Full documentation",
        "Ongoing support",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      title: "Telegram Bot",
      price: "$8,000++",
      description:
        "Custom Telegram bots for automation and business process optimization.",
      features: [
        "Payment after completion",
        "Negotiable pricing",
        "Custom commands",
        "AI integration",
        "Web app integration",
        "Full documentation",
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <Box maxW="1400px" mx="auto" position="relative">
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="10%"
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

      <VStack spacing={isMobile ? 10 : 16} position="relative">
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
              <Text>Pricing</Text>
            </HStack>
          </Badge>

          <Text
            fontSize={{ base: "32px", md: "48px", lg: "56px" }}
            fontWeight="800"
            color="white"
            letterSpacing="-0.02em"
            lineHeight="1.1"
          >
            Transparent{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #3b82f6, #8b5cf6, #3b82f6)"
              bgClip="text"
              backgroundSize="200%"
              animation={`${shimmer} 4s ease-in-out infinite`}
            >
              Pricing
            </Text>
          </Text>

          <Text
            color="gray.400"
            maxW="600px"
            fontSize={isMobile ? "15px" : "18px"}
            lineHeight="1.8"
          >
            Flexible pricing plans designed to fit your budget and project
            requirements
          </Text>
        </VStack>

        {/* Pricing Cards */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={isMobile ? 8 : 6}
          w="full"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </SimpleGrid>

        {/* Bottom CTA */}
        <Box
          w="full"
          display="flex"
          justifyContent="center"
          pt={4}
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.4}s`,
          }}
        >
          <HStack
            bg="rgba(255,255,255,0.02)"
            border="1px solid rgba(255,255,255,0.06)"
            borderRadius="2xl"
            px={{ base: 6, md: 10 }}
            py={{ base: 4, md: 6 }}
            spacing={{ base: 4, md: 8 }}
            wrap="wrap"
            justify="center"
            w="100%"
            maxW="600px"
            transition="all 0.3s"
            _hover={{
              borderColor: "rgba(59,130,246,0.2)",
              bg: "rgba(255,255,255,0.04)",
            }}
          >
            <Text color="gray.300" fontSize="14px">
              💬 Need a custom quote?
            </Text>
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
              <Text>Contact us</Text>
              <Icon as={FaRocket} boxSize="14px" />
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default Price;
