import { Button, keyframes } from "@chakra-ui/react";
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 8px rgba(59, 130, 246, 0.35); }
  50% { box-shadow: 0 0 28px rgba(59, 130, 246, 0.6); }
  100% { box-shadow: 0 0 8px rgba(59, 130, 246, 0.35); }
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
    <a href="https://t.me/AddisGigsBot" target="_blank" rel="noreferrer">
      <Button
        bgGradient="linear(to-r, #3b82f6, #60a5fa)"
        color="white"
        fontWeight="bold"
        width={width ? width : undefined}
        height={height ? height : undefined}
        fontSize={fontSize ? fontSize : undefined}
        px="7"
        py="5"
        animation={
          animation ? `${glowAnimation} 2.5s infinite ease-in-out` : undefined
        }
        borderRadius="30px"
        _hover={{
          bgGradient: "linear(to-r, #2563eb, #3b82f6)",
          animation: "none",
        }}
        _active={{ bgGradient: "linear(to-r, #1d4ed8, #2563eb)" }}
        _focus={{ boxShadow: "0 0 16px rgba(59, 130, 246, 0.45)" }}
      >
        {title}
      </Button>
    </a>
  );
}

export default CustomButton;
