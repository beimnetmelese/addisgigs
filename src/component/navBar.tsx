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
  Box,
  Container,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import logo from "../assets/logos.png";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { name: "Home", id: "home" },
  { name: "Services", id: "service" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Pricing", id: "price" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Why Us", id: "why-choose-us" },
  { name: "Contact", id: "contact" },
];

// Motion components
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionText = motion(Text);

function NavBar() {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
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

      // Update scroll state for glass effect
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item: (typeof sections)[0]) => (
    <MotionText
      key={item.name}
      onClick={() => handleClick(item.id)}
      color={active === item.name ? "#60a5fa" : "rgba(255,255,255,0.8)"}
      cursor="pointer"
      fontSize="14px"
      fontWeight={active === item.name ? "600" : "400"}
      letterSpacing="0.5px"
      position="relative"
      whileHover={{
        color: "#60a5fa",
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      sx={{
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-6px",
          left: "0",
          right: "0",
          height: "2px",
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          borderRadius: "full",
          transform: active === item.name ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "left",
        },
        "&:hover::after": {
          transform: "scaleX(1)",
        },
      }}
    >
      {item.name}
    </MotionText>
  );

  const glassVariants = {
    scrolled: {
      background: "rgba(17, 17, 34, 0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    },
    top: {
      background: "transparent",
      backdropFilter: "blur(0px)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      boxShadow: "none",
    },
  };

  return (
    <MotionBox
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      animate={isScrolled ? "scrolled" : "top"}
      variants={glassVariants}
      transition={{ duration: 0.4 }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Container maxW="1400px" px={{ base: "20px", md: "40px" }}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          py={{ base: "14px", md: "18px" }}
          position="relative"
        >
          {/* Animated Logo */}
          <MotionBox
            whileHover={{
              scale: 1.05,
              rotate: [0, -3, 3, -3, 0],
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.95 }}
            display="flex"
            alignItems="center"
            gap="12px"
          >
            <Image
              src={logo}
              boxSize="42px"
              objectFit="contain"
              filter="drop-shadow(0 0 20px rgba(59, 130, 246, 0.2))"
            />
            <Text
              display={{ base: "none", sm: "block" }}
              fontSize="20px"
              fontWeight="700"
              bgGradient="linear(to-r, #3b82f6, #8b5cf6)"
              bgClip="text"
              letterSpacing="-0.5px"
            >
              AddisGigs
            </Text>
          </MotionBox>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <>
              <HStack spacing={6} position="relative">
                {sections.map(renderNavItem)}
              </HStack>

              {/* Get Started Button with Animation */}
              <MotionButton
                bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
                color="white"
                fontWeight="600"
                px="32px"
                py="24px"
                borderRadius="full"
                fontSize="14px"
                letterSpacing="0.5px"
                position="relative"
                overflow="hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "all 0.6s",
                }}
                sx={{
                  "&:hover::before": {
                    left: "100%",
                  },
                }}
                onClick={() => handleClick("contact")}
              >
                <HStack spacing={2}>
                  <Text>Get Started</Text>
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </HStack>
              </MotionButton>
            </>
          ) : (
            /* Mobile Menu with Enhanced Animation */
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                _hover={{
                  bg: "rgba(255,255,255,0.08)",
                  transform: "scale(1.05)",
                }}
                _active={{
                  bg: "rgba(255,255,255,0.12)",
                  transform: "scale(0.95)",
                }}
                color="white"
                p="10px"
                borderRadius="full"
                transition="all 0.2s"
              >
                <FiMenu size={24} />
              </MenuButton>
              <AnimatePresence>
                <MenuList
                  bg="rgba(17, 17, 34, 0.95)"
                  color="white"
                  border="1px solid rgba(255,255,255,0.08)"
                  backdropFilter="blur(20px)"
                  boxShadow="0 20px 60px rgba(0,0,0,0.5)"
                  p="8px"
                  minW="220px"
                  as={motion.div}
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                >
                  {sections.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <MenuItem
                        onClick={() => handleClick(item.id)}
                        bg="transparent"
                        color={
                          active === item.name
                            ? "#60a5fa"
                            : "rgba(255,255,255,0.8)"
                        }
                        _hover={{
                          bg: "rgba(255,255,255,0.06)",
                          color: "#60a5fa",
                          transform: "translateX(8px)",
                        }}
                        _focus={{ bg: "transparent" }}
                        fontWeight={active === item.name ? "600" : "400"}
                        borderRadius="lg"
                        transition="all 0.2s"
                      >
                        {item.name}
                      </MenuItem>
                    </motion.div>
                  ))}
                </MenuList>
              </AnimatePresence>
            </Menu>
          )}
        </HStack>
      </Container>

      {/* Animated Gradient Border */}
      <MotionBox
        position="absolute"
        bottom="-1px"
        left="0"
        right="0"
        height="2px"
        background="linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent)"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        opacity={0.6}
      />
    </MotionBox>
  );
}

export default NavBar;
