// component/portfolio.tsx
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  keyframes,
  Icon,
  useBreakpointValue,
  Skeleton,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";
import dipcomSchool from "../assets/dipcom school.png";
import stock from "../assets/stock.png";
import yetimtools from "../assets/yetimtools.png";
import paradise from "../assets/paradise.png";
import soma from "../assets/soma.png";
import craving from "../assets/cravings.png";
import amrogn from "../assets/amrogn.png";
import hiFalafel from "../assets/hi flafel.png";
import goldenplate from "../assets/goldenplate.png";
import alchemist from "../assets/thealchemist.png";
import unioncocktail from "../assets/unioncocktail.png";
import choke from "../assets/choke.png";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

interface Props {
  title: string;
  description: string;
  link: string;
  tags: string[];
  category: string;
  phone?: string;
  image?: string;
}

const PortfolioCard = ({
  title,
  description,
  link,
  tags,
  category,
  phone,
  image,
}: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      w="100%"
      borderRadius="2xl"
      overflow="hidden"
      bg="rgba(20, 20, 30, 0.8)"
      border="1px solid rgba(59, 130, 246, 0.1)"
      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      position="relative"
      display="block"
      textDecoration="none"
      _hover={{
        transform: isMobile
          ? "translateY(-4px)"
          : "translateY(-8px) scale(1.01)",
        borderColor: "rgba(59, 130, 246, 0.4)",
        boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15)",
        bg: "rgba(30, 30, 50, 0.9)",
      }}
      _focus={{
        outline: "none",
        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
      }}
      _active={{
        textDecoration: "none",
      }}
    >
      {/* Animated gradient border */}
      <Box
        position="absolute"
        inset="-1px"
        borderRadius="2xl"
        bgGradient="linear(to-r, transparent, rgba(59,130,246,0.2), transparent)"
        backgroundSize="200% 100%"
        animation={`${shimmer} 3s ease-in-out infinite`}
        opacity="0"
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.3s"
        pointerEvents="none"
      />

      <Box position="relative" overflow="hidden" bg="#0f0f1a">
        <Skeleton
          isLoaded={imageLoaded}
          h="220px"
          w="full"
          startColor="rgba(255,255,255,0.08)"
          endColor="rgba(255,255,255,0.02)"
        >
          <Image
            src={image}
            alt={`${title} website preview`}
            w="full"
            h="220px"
            objectFit="cover"
            objectPosition="top"
            transition="transform 0.5s"
            _hover={{ transform: "scale(1.05)" }}
            onLoad={() => setImageLoaded(true)}
          />
        </Skeleton>

        {/* Category badge */}
        <Badge
          position="absolute"
          top="12px"
          left="12px"
          bg="rgba(0, 0, 0, 0.85)"
          color="#60a5fa"
          px="12px"
          py="4px"
          borderRadius="full"
          fontSize="10px"
          backdropFilter="blur(12px)"
          border="1px solid rgba(59,130,246,0.25)"
        >
          {category}
        </Badge>

        <Box
          position="absolute"
          top="12px"
          right="12px"
          display="flex"
          gap="8px"
          flexWrap="wrap"
          maxW="60%"
          justifyContent="flex-end"
        >
          {tags.slice(0, 2).map(
            (tag, i) =>
              tag && (
                <Badge
                  key={i}
                  bg="rgba(0, 0, 0, 0.85)"
                  color="#93c5fd"
                  px="10px"
                  py="3px"
                  borderRadius="full"
                  fontSize="10px"
                  backdropFilter="blur(12px)"
                  border="1px solid rgba(93, 179, 253, 0.2)"
                >
                  {tag}
                </Badge>
              ),
          )}
        </Box>
      </Box>

      <VStack p={6} align="start" spacing={3}>
        <Text fontSize="lg" fontWeight="700" color="white" noOfLines={1}>
          {title}
        </Text>

        <Text fontSize="14px" color="gray.400" lineHeight="1.6" noOfLines={2}>
          {description}
        </Text>

        {phone && (
          <HStack
            spacing={2}
            bg="rgba(59, 130, 246, 0.08)"
            px="12px"
            py="4px"
            borderRadius="full"
            border="1px solid rgba(59, 130, 246, 0.15)"
          >
            <Text fontSize="11px" color="gray.500">
              📞
            </Text>
            <Text fontSize="12px" color="gray.400">
              {phone}
            </Text>
          </HStack>
        )}

        <HStack spacing={4} pt={2} w="full" justifyContent="space-between">
          <HStack
            as="a"
            href={link}
            target="_blank"
            spacing={2}
            color="#60a5fa"
            fontSize="14px"
            fontWeight="500"
            _hover={{ color: "#93c5fd" }}
            transition="color 0.3s"
          >
            <Text>View Project</Text>
            <FaExternalLinkAlt size={12} />
          </HStack>

          <HStack spacing={1} color="gray.500" fontSize="11px">
            <Icon as={FaGithub} size={12} />
            <Text>Web App</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

function Portfolio() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 3 });

  const projects = [
    // Featured Projects (on top)
    {
      title: "DIPCOM Tech",
      description:
        "School management system with printer services, repair tracking, and training modules.",
      link: "https://school.dipcomtech.com/",
      tags: ["School", "Management", "React"],
      category: "⭐ Featured",
      image: dipcomSchool,
    },
    {
      title: "Stock Management",
      description:
        "Online inventory and reservation system with real-time tracking and management.",
      link: "https://stock.dipcomtech.com/",
      tags: ["Inventory", "Reservation", "Analytics"],
      category: "⭐ Featured",
      image: stock,
    },
    {
      title: "Yetim Tools",
      description:
        "Custom tools and utilities platform with innovative solutions for various needs.",
      link: "https://yetimtools.vercel.app/",
      tags: ["Tools", "Utilities", "React"],
      category: "⭐ Featured",
      image: yetimtools,
    },
    {
      title: "Golden Plate",
      description:
        "Fine dining restaurant website with elegant design and menu presentation.",
      link: "https://golden-plate-kappa.vercel.app/",
      tags: ["Next.js", "Restaurant"],
      category: "Client Site",
      image: goldenplate,
    },
    {
      title: "Alchemist",
      description:
        "Creative agency website with immersive design and interactive elements.",
      link: "https://alchemist-nu.vercel.app/",
      tags: ["Framer", "Creative"],
      category: "Client Site",
      image: alchemist,
    },
    // Client websites (with phone numbers)
    {
      title: "Paradise",
      description:
        "A premium business platform with modern design and seamless user experience.",
      link: "https://paradise-sable.vercel.app/",
      tags: ["React", "Tailwind", "Business"],
      category: "Client Site",
      image: paradise,
    },
    {
      title: "Soma",
      description:
        "Elegant web presence with clean UI and responsive design for modern businesses.",
      link: "https://soma-zeta.vercel.app/",
      tags: ["Vite", "Tailwind", "Modern"],
      category: "Client Site",
      image: soma,
    },
    {
      title: "Amrogn Chicken",
      description:
        "E-commerce platform for premium chicken products with ordering system.",
      link: "https://amrogn-chicken.vercel.app/",
      tags: ["Next.js", "E-commerce"],
      category: "Client Site",
      image: amrogn,
    },
    {
      title: "Hi Falafel",
      description:
        "Restaurant website featuring menu showcase and online ordering capabilities.",
      link: "https://hi-falafel.vercel.app/",
      tags: ["React", "Food", "Ordering"],
      category: "Client Site",
      image: hiFalafel,
    },

    {
      title: "Rofam",
      description:
        "Professional business platform with comprehensive features and clean design.",
      link: "https://rofam.vercel.app/",
      tags: ["React", "Business"],
      category: "Client Site",
      image: craving,
    },
    {
      title: "Union Cocktail",
      description:
        "Premium cocktail bar website with stylish design and menu showcase.",
      link: "https://union-cocktail.vercel.app/",
      tags: ["Bar", "Menu"],
      category: "Client Site",
      image: unioncocktail,
    },
    {
      title: "Choke Burger",
      description:
        "Burger restaurant website with online ordering and menu display.",
      link: "https://choke-burger.vercel.app/",
      tags: ["Food", "Ordering"],
      category: "Client Site",
      image: choke,
    },
  ];

  return (
    <Box maxW="1400px" mx="auto" position="relative">
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="5%"
        right="-5%"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(59,130,246,0.03), transparent 70%)"
        borderRadius="full"
        pointerEvents="none"
      />

      <VStack spacing={isMobile ? 8 : 12} position="relative">
        <VStack spacing={4} textAlign="center">
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
              <Text>Our Portfolio</Text>
            </HStack>
          </Badge>

          <Text
            fontSize={{ base: "32px", md: "48px", lg: "56px" }}
            fontWeight="800"
            color="white"
            letterSpacing="-0.02em"
            lineHeight="1.1"
          >
            Recent{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #3b82f6, #8b5cf6, #3b82f6)"
              bgClip="text"
              backgroundSize="200%"
              animation={`${shimmer} 4s ease-in-out infinite`}
            >
              Projects
            </Text>
          </Text>

          <Text
            color="gray.400"
            maxW="600px"
            fontSize={isMobile ? "15px" : "18px"}
            lineHeight="1.8"
          >
            Showcasing our work across various industries and technologies
          </Text>
        </VStack>

        <SimpleGrid columns={columns} spacing={isMobile ? 6 : 8} w="full">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </SimpleGrid>

        {/* View All CTA */}
        <Box w="full" display="flex" justifyContent="center" pt={4}>
          <HStack
            bg="rgba(20, 20, 35, 0.7)"
            border="1px solid rgba(59, 130, 246, 0.15)"
            borderRadius="2xl"
            px={{ base: 6, md: 10 }}
            py={{ base: 4, md: 6 }}
            spacing={{ base: 4, md: 8 }}
            wrap="wrap"
            justify="center"
            w="100%"
            maxW="500px"
            transition="all 0.3s"
            _hover={{
              borderColor: "rgba(59, 130, 246, 0.3)",
              bg: "rgba(30, 30, 50, 0.8)",
            }}
          >
            <Text color="gray.300" fontSize="14px">
              🌟 More projects coming soon
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
              <Text>Start your project</Text>
              <Icon as={FaExternalLinkAlt} boxSize="12px" />
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default Portfolio;
