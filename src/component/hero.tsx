import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import CustomButton from "./customButton";

function Hero() {
  const fontSize = useBreakpointValue({ base: "26px", lg: "50px" });
  const margin = useBreakpointValue({ base: "12%", lg: "25%" });
  const marginTop = useBreakpointValue({ base: "15%", lg: "6%" });

  return (
    <>
      <Box
        bg="black"
        marginTop={marginTop}
        marginLeft={margin}
        marginRight={margin}
        textAlign={"center"}
      >
        <Text
          textAlign={"center"}
          fontWeight={"Bold"}
          color={"white"}
          marginBottom={"10px"}
          fontSize={fontSize}
        >
          Empowering Your Business with{" "}
          <Text
            marginBottom={"20px"}
            textAlign={"center"}
            fontWeight={"Bold"}
            color={"blue.300"}
          >
            Cutting-Edge Technology Solutions
          </Text>
        </Text>

        <Text marginBottom={"25px"} textAlign={"center"} fontSize={"15"}>
          At AddisGigs, we specialize in creating innovative and powerful
          digital solutions tailored to meet your unique business needs. Whether
          you're looking for an advanced Telegram bot, a dynamic website, or a
          sleek mobile app, our team of experts is here to bring your vision to
          life. We don't just develop products; we craft experiences that engage
          your audience, streamline your operations, and elevate your brand.
          With years of experience, we understand what it takes to make your
          project a success. We are passionate about delivering top-tier quality
          and ensuring every detail is executed to perfection.
        </Text>
        <Box marginBottom={"60px"} textAlign={"center"}>
          <CustomButton
            title="Hire Us"
            animation={true}
            height="50px"
            width="200px"
            fontSize="20px"
          />
        </Box>
      </Box>
    </>
  );
}

export default Hero;
