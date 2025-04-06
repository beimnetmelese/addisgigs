import { Box, Text, Image, SimpleGrid, Flex } from "@chakra-ui/react";
import scoresnap from "../assets/scoresnap.jpg";
import addis from "../assets/addis.jpg";
import book from "../assets/bookethiopia.jpg";
import aastu from "../assets/aastu.jpg";
import mentorix from "../assets/mentorix.jpg";
import movie from "../assets/movie.jpg";
import { FaArrowRight } from "react-icons/fa";
import TextComponent from "./textComponent";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

function PortofolioCard({ title, description, image, link }: Props) {
  return (
    <>
      <Box
        zIndex={1}
        top={"-50px"}
        w="330px"
        textAlign={"justify"}
        borderRadius="15px"
        overflow="hidden"
        bg="#0a0a0a"
        boxShadow="0 8px 30px rgba(255, 255, 255, 0.04)"
        position={"relative"}
        _hover={{
          boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)",
          transform: "scale(1.02)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Image w={"330px"} height={"250px"} src={image} mx="auto" />

        <Box p="4">
          <Text
            color={"blue.500"}
            marginBottom={"20px"}
            fontWeight="bold"
            fontSize="lg"
            mb="1"
          >
            {title}
          </Text>

          <Text marginBottom={"20px"} fontSize="sm" color="gray.200" mb="3">
            {description}
          </Text>
          <a href={link}>
            <Box
              display={"flex"}
              gap={"5px"}
              flexDirection={"row"}
              alignItems={"center"}
              color={"green.300"}
              fontWeight="bold"
              cursor="pointer"
              _hover={{
                color: "green.400",
              }}
            >
              <Text>See Project</Text>
              <FaArrowRight
                style={{
                  width: "50px",
                  transform: "scaleX(2)",
                }}
              />
            </Box>
          </a>
        </Box>
      </Box>
    </>
  );
}

function Portofolio() {
  return (
    <>
      <TextComponent text="Our Previous Works" />

      <Flex justifyContent={"center"}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
          <PortofolioCard
            title="AddisGigs"
            description="AddisGigs is a dynamic freelancing agency specializing in the development of mobile apps, Telegram bots, and full-stack web applications. With a strong focus on innovative solutions and seamless user experiences, AddisGigs helps businesses and individuals bring their digital ideas to life, providing high-quality, efficient, and scalable services tailored to every project."
            image={addis}
            link="#"
          />
          <PortofolioCard
            title="Book Ethiopia"
            description="Book Ethiopia is an online platform designed to simplify hotel bookings across Ethiopia. Users can easily browse through a wide selection of hotels, compare options, and book their stay at the best prices. Whether you're visiting for business or leisure, Book Ethiopia offers a seamless booking experience, helping you find the perfect accommodation for your needs."
            image={book}
            link="https://book-ethiopia.vercel.app/"
          />
          <PortofolioCard
            title="Mentorix Employee Bot"
            description="Mentorix is a Telegram bot that allows users to easily register as tutors. Through this platform, tutors can create profiles, offering their expertise in various subjects, and connect with learners seeking guidance. Mentorix streamlines the process, making it simple for both tutors and students to interact and start their educational journey."
            image={mentorix}
            link="https://t.me/MentorixEmployeeBot"
          />
          <PortofolioCard
            title="Mentorix Client Bot"
            description="Mentorix Client Bot is a Telegram bot designed for clients to easily find and connect with qualified tutors. Clients can search for tutors based on their needs, browse through available profiles, and get matched with the perfect tutor for personalized learning experiences. The bot simplifies the process of finding and booking tutors, making education more accessible and convenient."
            image={mentorix}
            link="https://t.me/MentorixClientBot"
          />
          <PortofolioCard
            title="ScoreSnap"
            description="Score Snap is a Telegram bot that delivers live football results and updates. Users can quickly check scores from ongoing matches, view recent results, and stay up-to-date with their favorite teams and tournaments. Score Snap makes following football easy and convenient, providing real-time information directly through Telegram."
            image={scoresnap}
            link="https://t.me/Scoresnapresultbot"
          />

          <PortofolioCard
            title="AASTU Lost And Found"
            description="AAstu Lost and Found Bot is a Telegram bot designed to help students and staff of AAStU (Addis Ababa Science and Technology University) report and recover lost items. Users can easily submit information about lost or found items, and the bot helps match lost items with their rightful owners. This bot creates a convenient and efficient way for the AAStU community to reunite with their belongings."
            image={aastu}
            link="https://t.me/aastulostandfoundunionbot"
          />

          <PortofolioCard
            title="MovieMate"
            description="MovieMate is a movie recommendation bot that suggests films based on the genres users like. Whether you're into action, comedy, drama, or any other genre, MovieMate helps you discover new movies tailored to your preferences, making it easier to find the perfect film for your next movie night."
            image={movie}
            link="https://t.me/MovieMatePybot"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Portofolio;
