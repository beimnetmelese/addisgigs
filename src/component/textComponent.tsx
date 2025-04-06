import { Text, useBreakpointValue } from "@chakra-ui/react";

interface TextComponentProps {
  text: string;
}

const TextComponent = ({ text }: TextComponentProps) => {
  const fontSize = useBreakpointValue({ base: "26px", lg: "50px" });

  return (
    <Text
      textAlign="center"
      color="blue.300"
      fontWeight="bold"
      marginTop="20px"
      marginBottom="60px"
      fontSize={fontSize}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
