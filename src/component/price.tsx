import {
  Box,
  Button,
  Text,
  Icon,
  List,
  ListItem,
  VStack,
  Flex,
  SimpleGrid,
  keyframes,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import TextComponent from "./textComponent";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
}

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.8); }
  100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.3); }
`;

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
}) => {
  return (
    <Box
      w="100%"
      maxW="350px"
      bg="#0a0a0a" // transparent effect
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)" // soft box shadow
      borderRadius="20px"
      backdropFilter="blur(10px)" // glass effect
      p="6"
      color="white"
      _hover={{
        boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)",
        transform: "scale(1.02)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <VStack spacing="4" align="start">
        <Text color={"blue.400"} fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Text color={"green.300"} fontSize="lg" fontWeight="bold">
          {price}
        </Text>
        <Text opacity={0.9}>{description}</Text>
        <List spacing="2" mt="4">
          {features.map((feature, i) => (
            <ListItem key={i} display="flex" alignItems="center" gap="2">
              <Icon as={FaCheck} color="green.400" />
              {feature}
            </ListItem>
          ))}
        </List>
        <a
          href="https://t.me/AddisGigsBot"
          style={{ display: "block", width: "100%" }}
        >
          <Button
            animation={`${glowAnimation} 2s infinite ease-in-out`}
            _hover={{ bg: "blue.600", animation: "none" }}
            w="full"
            mt="4"
            color="white"
            bg="blue.600"
            borderRadius="full"
          >
            {buttonText}
          </Button>
        </a>
      </VStack>
    </Box>
  );
};

function Price() {
  return (
    <>
      <TextComponent text="Price" />

      <Flex justifyContent={"center"}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing="50px">
          <PricingCard
            title="Web Application Plan"
            price="$10,000++ Birr"
            description="Build fully functional and modern web applications tailored to your needs."
            features={[
              "Payment is done after project completion",
              "Price starts at the above amount and may increase based on project complexity.",
              "Price is negotiable",
              "Custom design and responsive layout",
              "Secure and scalable backend",
              "Full deployment and documentation",
              "Ongoing support available",
            ]}
            buttonText="Contact Us"
          />
          <PricingCard
            title="Mobile Application Plan"
            price="$15,000++ Birr"
            description="Cross-platform mobile applications for Android & iOS with high performance."
            features={[
              "Payment is done after project completion",
              "Price starts at the above amount and may increase based on project complexity.",
              "Price is negotiable",
              "Beautiful UI/UX design",
              "Offline and online data synchronization",
              "App Store & Play Store deployment",
              "Full documentation and support",
            ]}
            buttonText="Contact Us"
          />
          <PricingCard
            title="Telegram Bot Plan"
            price="$8,000++ Birr"
            description="Custom Telegram bots to automate tasks, enhance communication, and add value."
            features={[
              "Payment is done after project completion",
              "Price starts at the above amount and may increase based on project complexity.",
              "Price is negotiable",
              "Fully customizable commands",
              "Secure bot with error handling",
              "Web Applications",
              "Full documentation and support",
            ]}
            buttonText="Contact Us"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Price;
