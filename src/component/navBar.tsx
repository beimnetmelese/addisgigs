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
import logo from "../assets/logo.png";
import CustomButton from "./customButton";

const sections = [
  { name: "Home", id: "home" },
  { name: "Service", id: "service" },
  { name: "Portofolio", id: "portofolio" },
  { name: "Price", id: "price" },
  { name: "Why Choose US", id: "why-choose-us" },
  { name: "Contact", id: "contact" },
];

function NavBar() {
  const [active, setActive] = useState("Home");
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Scroll to section
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
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
      color={active === item.name ? "blue.500" : "white"}
      cursor="pointer"
      textDecoration={active === item.name ? "underline" : undefined}
      textDecorationColor={active === item.name ? "blue.500" : undefined}
    >
      {item.name}
    </Text>
  );

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      paddingLeft={"30px"}
      paddingRight={"30px"}
      bg="#0a0a0a"
      color="white"
    >
      <Image src={logo} boxSize="50px" />

      {isMobile ? (
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            color="white"
          >
            <FiMenu size={24} />
          </MenuButton>
          <MenuList bg="#0a0a0a" color="white">
            {sections.map((item) => (
              <MenuItem
                key={item.name}
                onClick={() => handleClick(item.id)}
                bg="transparent"
                color={active === item.name ? "blue.500" : "white"}
                _hover={{ bg: "transparent", cursor: "pointer" }}
                _focus={{ bg: "transparent" }}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <>
          <HStack spacing={8}>{sections.map(renderNavItem)}</HStack>
          <CustomButton title="Hire Us" animation={false} />
        </>
      )}
    </HStack>
  );
}

export default NavBar;
