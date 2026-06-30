// component/navBar.tsx
import {
  HStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import logo from "../assets/logos.png";

const sections = [
  { name: "Home", id: "home" },
  { name: "Services", id: "service" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Pricing", id: "price" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Why Us", id: "why-choose-us" },
  { name: "Contact", id: "contact" },
];

function NavBar() {
  const [active, setActive] = useState("Home");
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item: (typeof sections)[0]) => (
    <Text
      key={item.name}
      onClick={() => handleClick(item.id)}
      color={active === item.name ? "#60a5fa" : "white"}
      cursor="pointer"
      fontSize="15px"
      fontWeight={active === item.name ? "600" : "400"}
      transition="all 0.3s"
      _hover={{ color: "#60a5fa" }}
      position="relative"
      _after={
        active === item.name
          ? {
              content: '""',
              position: "absolute",
              bottom: "-4px",
              left: "0",
              right: "0",
              height: "2px",
              bg: "#60a5fa",
              borderRadius: "full",
            }
          : undefined
      }
    >
      {item.name}
    </Text>
  );

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      px={{ base: "16px", md: "40px" }}
      py="12px"
      bg="transparent"
      color="white"
      maxW="1400px"
      mx="auto"
    >
      <Image src={logo} boxSize="45px" objectFit="contain" />

      {isMobile ? (
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            _hover={{ bg: "whiteAlpha.100" }}
            _active={{ bg: "whiteAlpha.200" }}
            color="white"
            p="8px"
          >
            <FiMenu size={24} />
          </MenuButton>
          <MenuList
            bg="#1a1a2e"
            color="white"
            border="1px solid rgba(255,255,255,0.05)"
            backdropFilter="blur(20px)"
          >
            {sections.map((item) => (
              <MenuItem
                key={item.name}
                onClick={() => handleClick(item.id)}
                bg="transparent"
                color={active === item.name ? "#60a5fa" : "white"}
                _hover={{ bg: "whiteAlpha.50", color: "#60a5fa" }}
                _focus={{ bg: "transparent" }}
                fontWeight={active === item.name ? "600" : "400"}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <>
          <HStack spacing={8}>{sections.map(renderNavItem)}</HStack>
          <Button
            bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
            color="white"
            fontWeight="600"
            px="28px"
            py="22px"
            borderRadius="full"
            fontSize="14px"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
            }}
            transition="all 0.3s"
            onClick={() => handleClick("contact")}
          >
            Get Started
          </Button>
        </>
      )}
    </HStack>
  );
}

export default NavBar;
