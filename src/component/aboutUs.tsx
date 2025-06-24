import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/logos.png";
import CustomButton from "./customButton";
import TextComponent from "./textComponent";

interface Props {
  number: number;
  title: string;
  description: string;
}

function WhyChooseUs({ number, title, description }: Props) {
  return (
    <>
      <HStack marginBottom={"10px"}>
        <Box
          textAlign={"center"}
          bg="rgba(255, 255, 255, 0.05)"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
          boxSize={"60px"}
          color={"white"}
          padding={"10px"}
          marginBottom={"5px"}
          borderRadius={"30px"}
          marginRight={"10px"}
          borderWidth={"1px"}
          borderColor={"blue.300"}
        >
          <Text textAlign={"center"} fontSize={"25px"}>
            {number}
          </Text>
        </Box>

        <VStack alignItems="flex-start">
          <Text
            color={"blue.300"}
            fontWeight={"Bold"}
            marginBottom={"5px"}
            fontSize={"20px"}
            marginLeft={0}
          >
            {title}
          </Text>
          <Text color={"white"} marginBottom={"10px"} fontSize={"15px"}>
            {description}
          </Text>
        </VStack>
      </HStack>
    </>
  );
}

function AboutUs() {
  return (
    <>
      <TextComponent text="Why Choose Us" />

      <Grid
        templateAreas={{
          base: "main",
          lg: `"topleft topright"`,
        }}
      >
        <GridItem marginBottom={"30px"} marginLeft={"10px"} area={"topleft"}>
          <Show above="lg">
            <Image src={logo} boxSize={"500px"} />
          </Show>
        </GridItem>
        <GridItem
          marginTop={"10px"}
          marginBottom={"30px"}
          marginLeft={"10px"}
          area={"topright"}
        >
          <Show above="lg">
            <Box bg="black" textAlign={"center"}>
              <WhyChooseUs
                number={1}
                title="Expertise Across Platforms"
                description="We build web apps, mobile apps, and Telegram bots with the latest technologies."
              />
              <WhyChooseUs
                number={2}
                title="Tailored Solutions"
                description="We create customized solutions to fit your unique business needs."
              />
              <WhyChooseUs
                number={3}
                title="On-Time Delivery"
                description="We ensure timely delivery without compromising on quality."
              />
              <WhyChooseUs
                number={4}
                title="Ongoing Support"
                description="We offer continuous support to keep your project running smoothly."
              />
            </Box>
            <Box marginBottom={"60px"} marginTop={"50px"}>
              <CustomButton
                title="Contact Us"
                animation={true}
                height="50px"
                width="200px"
                fontSize="20px"
              />
            </Box>
          </Show>
        </GridItem>

        <GridItem area={"main"}>
          <Box
            bg="black"
            marginLeft={"8%"}
            marginRight={"4%"}
            display={{ base: "block", lg: "none" }}
          >
            <WhyChooseUs
              number={1}
              title="Expertise Across Platforms"
              description="We build web apps, mobile apps, and Telegram bots with the latest technologies."
            />
            <WhyChooseUs
              number={2}
              title="Tailored Solutions"
              description="We create customized solutions to fit your unique business needs."
            />
            <WhyChooseUs
              number={3}
              title="On-Time Delivery"
              description="We ensure timely delivery without compromising on quality."
            />
            <WhyChooseUs
              number={4}
              title="Ongoing Support"
              description="We offer continuous support to keep your project running smoothly."
            />
            <Box textAlign={"center"} marginBottom={"60px"} marginTop={"50px"}>
              <CustomButton
                title="Contact Us"
                animation={true}
                height="50px"
                width="200px"
                fontSize="20px"
              />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default AboutUs;
