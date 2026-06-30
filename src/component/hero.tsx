// component/hero.tsx
import {
  Box,
  Text,
  VStack,
  Button,
  keyframes,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
  50% { box-shadow: 0 0 60px rgba(59, 130, 246, 0.5), 0 0 120px rgba(139, 92, 246, 0.2); }
  100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
`;

function Hero() {
  const fontSize = useBreakpointValue({ base: "32px", md: "56px", lg: "64px" });
  const subtitleSize = useBreakpointValue({ base: "16px", md: "18px" });

  return (
    <Box
      position="relative"
      minH={{ base: "calc(100vh - 80px)", md: "calc(100vh - 90px)" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      width="100vw"
      left="50%"
      right="50%"
      marginLeft="-50vw"
      marginRight="-50vw"
      marginTop="0"
    >
      {/* Background Image - Full width */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        bgImage="url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "linear-gradient(135deg, rgba(10, 10, 15, 0.92) 0%, rgba(10, 10, 15, 0.7) 40%, rgba(10, 10, 15, 0.5) 70%, rgba(10, 10, 15, 0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* Animated gradient overlay */}
      <Box
        position="absolute"
        inset={0}
        zIndex={1}
        bg="radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)"
      />

      {/* Background glow effect */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: "400px", md: "800px" }}
        h={{ base: "400px", md: "800px" }}
        bg="radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)"
        borderRadius="full"
        zIndex={1}
      />

      <VStack
        spacing={{ base: "24px", md: "32px" }}
        position="relative"
        zIndex={2}
        marginTop="45px"
        maxW="900px"
        mx="auto"
        px={{ base: "20px", md: "40px" }}
        py={{ base: "40px", md: "60px" }}
        textAlign="center"
      >
        <Text
          fontWeight="800"
          color="white"
          fontSize={fontSize}
          lineHeight={{ base: "1.2", md: "1.1" }}
          letterSpacing="-0.02em"
          textShadow="0 4px 30px rgba(0,0,0,0.5)"
        >
          Empowering Your Business with{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, #3b82f6, #8b5cf6, #3b82f6)"
            bgClip="text"
            backgroundSize="200%"
            animation="gradient 4s ease infinite"
          >
            Cutting-Edge Technology
          </Text>
        </Text>

        <Text
          color="gray.300"
          fontSize={subtitleSize}
          maxW="700px"
          mx="auto"
          lineHeight="1.8"
          px={{ base: "10px", md: "0" }}
          textShadow="0 2px 20px rgba(0,0,0,0.5)"
          backdropFilter="blur(2px)"
          p={{ base: "10px", md: "0" }}
          borderRadius="xl"
        >
          We craft innovative digital solutions — from advanced Telegram bots
          and dynamic websites to sleek mobile apps — designed to engage,
          streamline, and elevate your brand.
        </Text>

        <HStack spacing="16px" wrap="wrap" justify="center">
          <Button
            bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
            color="white"
            size="lg"
            px="40px"
            py="28px"
            borderRadius="full"
            fontSize="16px"
            fontWeight="600"
            animation={`${glowAnimation} 3s infinite ease-in-out`}
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
            }}
            transition="all 0.3s"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Project
          </Button>

          <Button
            variant="outline"
            color="white"
            size="lg"
            px="40px"
            py="28px"
            borderRadius="full"
            fontSize="16px"
            borderColor="rgba(255,255,255,0.3)"
            bg="rgba(0,0,0,0.2)"
            backdropFilter="blur(10px)"
            _hover={{
              borderColor: "#60a5fa",
              bg: "rgba(59, 130, 246, 0.15)",
              transform: "scale(1.05)",
            }}
            transition="all 0.3s"
          >
            View Our Work →
          </Button>
        </HStack>

        {/* Stats with glass effect */}
        <HStack
          spacing={{ base: "20px", md: "40px" }}
          pt="20px"
          wrap="wrap"
          justify="center"
          bg="rgba(0,0,0,0.3)"
          backdropFilter="blur(10px)"
          px={{ base: "20px", md: "40px" }}
          py={{ base: "15px", md: "20px" }}
          borderRadius="2xl"
          border="1px solid rgba(255,255,255,0.08)"
          w="100%"
          maxW="550px"
        >
          <VStack spacing="4px">
            <Text fontSize="28px" fontWeight="700" color="white">
              50+
            </Text>
            <Text fontSize="13px" color="gray.400">
              Projects Delivered
            </Text>
          </VStack>
          <Box w="1px" h="40px" bg="rgba(255,255,255,0.1)" />
          <VStack spacing="4px">
            <Text fontSize="28px" fontWeight="700" color="white">
              98%
            </Text>
            <Text fontSize="13px" color="gray.400">
              Client Satisfaction
            </Text>
          </VStack>
          <Box w="1px" h="40px" bg="rgba(255,255,255,0.1)" />
          <VStack spacing="4px">
            <Text fontSize="28px" fontWeight="700" color="white">
              4.9★
            </Text>
            <Text fontSize="13px" color="gray.400">
              Average Rating
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Hero;
