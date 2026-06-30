// component/testimonials.tsx
import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  Avatar,
  SimpleGrid,
  keyframes,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaStar, FaStarHalf } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.05); }
  50% { box-shadow: 0 0 60px rgba(59, 130, 246, 0.1); }
`;

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  index: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating,
  avatar,
  index,
}: TestimonialProps) => {
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
    transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`,
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} as={FaStar} color="#fbbf24" boxSize="14px" />);
    }
    if (hasHalfStar) {
      stars.push(
        <Icon key="half" as={FaStarHalf} color="#fbbf24" boxSize="14px" />,
      );
    }
    return stars;
  };

  return (
    <Box
      ref={ref}
      style={cardStyle}
      position="relative"
      p={8}
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.03)"
      border="1px solid rgba(255,255,255,0.06)"
      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      _hover={{
        transform: isMobile
          ? "translateY(-4px)"
          : "translateY(-8px) scale(1.01)",
        borderColor: "rgba(59, 130, 246, 0.3)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        bg: "rgba(255, 255, 255, 0.06)",
      }}
      animation={`${glowPulse} 4s ease-in-out infinite`}
    >
      {/* Quote icon */}
      <Icon
        as={FaQuoteLeft}
        position="absolute"
        top="20px"
        right="24px"
        color="rgba(59,130,246,0.1)"
        boxSize="32px"
      />

      <VStack align="start" spacing={4}>
        {/* Rating */}
        <HStack spacing={1}>
          {renderStars()}
          <Text color="gray.400" fontSize="12px" ml={2}>
            {rating.toFixed(1)}
          </Text>
        </HStack>

        {/* Content */}
        <Text
          color="gray.300"
          fontSize="15px"
          lineHeight="1.8"
          fontStyle="italic"
        >
          "{content}"
        </Text>

        {/* Author */}
        <HStack spacing={4} pt={2} w="full">
          <Avatar
            src={avatar}
            name={name}
            size="md"
            bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
            color="white"
          />
          <Box>
            <Text color="white" fontWeight="600" fontSize="15px">
              {name}
            </Text>
            <Text color="gray.400" fontSize="13px">
              {role} • {company}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

function Testimonials() {
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

  const testimonials = [
    {
      name: "Alemu T.",
      role: "Retail Partner",
      company: "DIPCOM Tech",
      content:
        "The inventory flow is clean, the products are organized, and the team is quick with support and repairs. Their professionalism is outstanding.",
      rating: 5,
      avatar: "",
    },
    {
      name: "Marta S.",
      role: "School Admin",
      company: "DIPCOM Tech",
      content:
        "Training was practical and easy to follow. Our staff learned printer setup and maintenance very quickly. Highly recommended!",
      rating: 5,
      avatar: "",
    },
    {
      name: "Daniel K.",
      role: "Office Manager",
      company: "DIPCOM Tech",
      content:
        "Their service is professional and the printer repair work saved us time and money. Very dependable team with excellent results.",
      rating: 4.5,
      avatar: "",
    },
    {
      name: "Tigist W.",
      role: "Restaurant Owner",
      company: "Hi Falafel",
      content:
        "AddisGigs built an amazing website for our restaurant. The online ordering system has increased our sales significantly.",
      rating: 5,
      avatar: "",
    },
    {
      name: "Yonas A.",
      role: "CEO",
      company: "Yetim Tools",
      content:
        "The custom tools platform they developed transformed our business operations. Innovative solutions delivered on time.",
      rating: 4.5,
      avatar: "",
    },
    {
      name: "Mekdes H.",
      role: "Operations Manager",
      company: "Stock Management",
      content:
        "The inventory and reservation system has streamlined our entire workflow. Real-time tracking is a game changer.",
      rating: 5,
      avatar: "",
    },
  ];

  return (
    <Box maxW="1400px" mx="auto" position="relative">
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="5%"
        left="-5%"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(59,130,246,0.03), transparent 70%)"
        borderRadius="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="5%"
        right="-5%"
        w="400px"
        h="400px"
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
              <Text>Testimonials</Text>
            </HStack>
          </Badge>

          <Text
            fontSize={{ base: "32px", md: "48px", lg: "56px" }}
            fontWeight="800"
            color="white"
            letterSpacing="-0.02em"
            lineHeight="1.1"
          >
            What Our{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #3b82f6, #8b5cf6, #3b82f6)"
              bgClip="text"
              backgroundSize="200%"
              animation={`${shimmer} 4s ease-in-out infinite`}
            >
              Clients Say
            </Text>
          </Text>

          <Text
            color="gray.400"
            maxW="600px"
            fontSize={isMobile ? "15px" : "18px"}
            lineHeight="1.8"
          >
            Hear from our satisfied clients about their experience working with
            us
          </Text>
        </VStack>

        {/* Testimonials Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </SimpleGrid>

        {/* Stats */}
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
            maxW="700px"
            transition="all 0.3s"
            _hover={{
              borderColor: "rgba(59,130,246,0.2)",
              bg: "rgba(255,255,255,0.04)",
            }}
          >
            <VStack spacing={1}>
              <Text fontSize="28px" fontWeight="700" color="white">
                50+
              </Text>
              <Text fontSize="13px" color="gray.400">
                Happy Clients
              </Text>
            </VStack>
            <Box w="1px" h="40px" bg="rgba(255,255,255,0.08)" />
            <VStack spacing={1}>
              <Text fontSize="28px" fontWeight="700" color="white">
                4.8★
              </Text>
              <Text fontSize="13px" color="gray.400">
                Average Rating
              </Text>
            </VStack>
            <Box w="1px" h="40px" bg="rgba(255,255,255,0.08)" />
            <VStack spacing={1}>
              <Text fontSize="28px" fontWeight="700" color="white">
                98%
              </Text>
              <Text fontSize="13px" color="gray.400">
                Satisfaction Rate
              </Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default Testimonials;
