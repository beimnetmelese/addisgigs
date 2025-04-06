import { Box, Flex, Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaLaptopCode, FaMobileAlt, FaTelegramPlane } from "react-icons/fa";
import TextComponent from "./textComponent";

interface Props {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard = ({ title, description, icon }: Props) => {
  return (
    <Box
      w="100%"
      p="6"
      marginBottom={"30px"}
      rounded="xl"
      shadow="lg"
      bg="#0a0a0a" // transparent effect
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
      textAlign="center"
      position="relative"
      _hover={{
        boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)",
        transform: "scale(1.02)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Box
        position="absolute"
        top="-30px"
        left="50%"
        transform="translateX(-50%)"
        boxSize={"80px"}
        textAlign={"center"}
        p="4"
        rounded="full"
        shadow="md"
        bg="rgba(255, 255, 255, 0.05)" // transparent effect
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
      >
        <Icon as={icon} boxSize={8} color="blue.500" marginTop={"9px"} />
      </Box>
      <VStack spacing={3} mt={8}>
        <Text fontSize="xl" fontWeight="bold" color={"blue.300"}>
          {title}
        </Text>
        <Text fontSize="sm" color="white">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

function Service() {
  return (
    <>
      <TextComponent text="Our Services" />
      <Box marginLeft={"7%"} marginRight={"7%"}>
        <Flex justifyContent={"center"}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing="50px">
            <ServiceCard
              title="Web Application Development"
              description="We create dynamic web applications, whether it’s a static website or a full-stack solution, tailored to meet your business needs. Our web apps are responsive, fast, and built with modern technologies."
              icon={FaLaptopCode}
            />
            <ServiceCard
              title="Mobile Application Development"
              description="We design and develop user-friendly mobile applications for both Android and iOS platforms. From simple apps to complex solutions, we ensure seamless user experiences and performance optimization."
              icon={FaMobileAlt}
            />
            <ServiceCard
              title="Telegram Bot Development"
              description="Automate tasks and interact with your users using custom Telegram bots. We specialize in building interactive, responsive bots for your business needs, whether for support, marketing, or notifications."
              icon={FaTelegramPlane}
            />
          </SimpleGrid>
        </Flex>
      </Box>
    </>
  );
}

export default Service;
