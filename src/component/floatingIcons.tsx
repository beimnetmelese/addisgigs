// component/floatingIcons.tsx
import { Box, Icon, keyframes } from "@chakra-ui/react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql } from "react-icons/si";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
`;

const floatDelay = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(-5deg); }
`;

const icons = [
  { Icon: FaReact, color: "#61DAFB", delay: 0, duration: 4 },
  { Icon: FaNodeJs, color: "#339933", delay: 0.5, duration: 4.5 },
  { Icon: SiTypescript, color: "#3178C6", delay: 1, duration: 3.8 },
  { Icon: SiTailwindcss, color: "#06B6D4", delay: 0.3, duration: 4.2 },
  { Icon: FaPython, color: "#3776AB", delay: 0.8, duration: 4.7 },
  { Icon: SiPostgresql, color: "#4169E1", delay: 1.2, duration: 3.5 },
  { Icon: FaAws, color: "#FF9900", delay: 0.6, duration: 4.3 },
  { Icon: FaDocker, color: "#2496ED", delay: 1.5, duration: 3.9 },
  { Icon: FaGitAlt, color: "#F05032", delay: 0.2, duration: 4.1 },
];

function FloatingIcons() {
  return (
    <Box
      position="fixed"
      inset={0}
      pointerEvents="none"
      zIndex={0}
      overflow="hidden"
    >
      {icons.map(({ Icon: IconComponent, color, delay, duration }, i) => {
        // Position icons in a grid pattern across the screen
        const positions = [
          { top: "8%", left: "5%" },
          { top: "15%", right: "8%" },
          { top: "45%", left: "3%" },
          { top: "55%", right: "4%" },
          { top: "80%", left: "8%" },
          { top: "85%", right: "7%" },
          { top: "25%", left: "45%" },
          { top: "70%", left: "55%" },
          { top: "40%", left: "85%" },
        ];

        const pos = positions[i % positions.length];

        return (
          <Box
            key={i}
            position="absolute"
            {...pos}
            animation={`${i % 2 === 0 ? float : floatDelay} ${duration}s ease-in-out infinite`}
            transitionDelay={`${delay}s`}
            opacity={0.15}
            _hover={{ opacity: 0.4 }}
            transition="opacity 0.3s"
          >
            <Icon
              as={IconComponent}
              boxSize={{ base: "30px", md: "45px" }}
              color={color}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default FloatingIcons;
