import { Box, keyframes } from "@chakra-ui/react";
import {
  FaMobileAlt,
  FaGlobe,
  FaTelegramPlane,
  FaLaptopCode,
} from "react-icons/fa";
import { useEffect, useMemo, useRef } from "react";

const float = keyframes`
  0% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.6; }
`;

const icons = [FaMobileAlt, FaGlobe, FaTelegramPlane, FaLaptopCode];
const totalIcons = 100;

const FloatingIcons = () => {
  const iconData = useMemo(
    () =>
      [...Array(totalIcons)].map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        Icon: icons[Math.floor(Math.random() * icons.length)],
        animationDuration: 1.5 + Math.random() * 2,
      })),
    []
  );

  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * totalIcons);
      const el = iconRefs.current[index];

      if (el) {
        el.style.boxShadow = `
            0 0 6px white,
            0 0 12px white,
            0 0 24px white
            `;
        el.style.opacity = "1";

        setTimeout(() => {
          el.style.boxShadow = "none";
          el.style.opacity = "0.2";
        }, 500);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={-1}
      overflow="hidden"
      bg="black"
    >
      {iconData.map(({ top, left, Icon, animationDuration }, index) => (
        <Box
          key={index}
          ref={(el) => (iconRefs.current[index] = el)}
          position="absolute"
          top={`${top}%`}
          left={`${left}%`}
          animation={`${float} ${animationDuration}s ease-in-out infinite`}
          opacity={0.2}
          background="transparent"
          transition="opacity 0.3s ease, box-shadow 0.3s ease"
          pointerEvents="none"
          boxShadow="none"
        >
          <Box as={Icon} color="white" fontSize="12px" />
        </Box>
      ))}
    </Box>
  );
};

export default FloatingIcons;
