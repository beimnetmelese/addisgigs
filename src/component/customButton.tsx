import { Button, keyframes } from "@chakra-ui/react";
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.8); }
  100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.3); }
`;

interface Props {
  animation: boolean;
  title: string;
  fontSize?: string | false;
  width?: string | false;
  height?: string | false;
}

function CustomButton({
  animation,
  title,
  fontSize = false,
  width = false,
  height = false,
}: Props) {
  return (
    <a href="https://t.me/AddisGigsBot">
      <Button
        bg="blue.500"
        color="white"
        fontWeight="bold"
        width={width ? width : undefined}
        height={height ? height : undefined}
        fontSize={fontSize ? fontSize : undefined}
        px="6"
        py="3"
        animation={
          animation ? `${glowAnimation} 2s infinite ease-in-out` : undefined
        }
        borderRadius="25px"
        _hover={{ bg: "blue.600", animation: "none" }}
        _active={{ bg: "blue.700" }}
        _focus={{ boxShadow: "0 0 8px rgba(99, 102, 241, 0.5)" }}
      >
        {title}
      </Button>
    </a>
  );
}

export default CustomButton;
