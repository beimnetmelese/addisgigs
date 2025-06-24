import { Box, Text, Image, SimpleGrid, Flex } from "@chakra-ui/react";
import scoresnap from "../assets/scoresnap.jpg";
import addis from "../assets/addisgigs.png";
import book from "../assets/bookethiopia.jpg";
import aastu from "../assets/aastu.jpg";
import mentorix from "../assets/mentorix.jpg";
import movie from "../assets/movie.jpg";
import job from "../assets/job.jpg";
import tv from "../assets/TV.jpg";
import feedflow from "../assets/feedflow.jpg";
import tom from "../assets/tom.jpg";
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
            description="AddisGigs is a freelancing agency that builds mobile apps, Telegram bots, and full-stack web apps delivering fast, scalable, and user-focused digital solutions."
            image={addis}
            link="#"
          />
          <PortofolioCard
            title="Book Ethiopia"
            description="Book Ethiopia is a platform that makes hotel booking in Ethiopia easy. Browse, compare, and book hotels at the best prices for business or leisure stays."
            image={book}
            link="https://book-ethiopia.vercel.app/"
          />
          <PortofolioCard
            title="Stream Bot"
            description="sleek, dark-themed React and Tailwind CSS interface for managing and viewing live and planned streams."
            image={tv}
            link="https://tvapp-kappa.vercel.app/"
          />
          <PortofolioCard
            title="Digital Pet Twin"
            description="Digital Pet Twin is an AI-based 3D web app that brings a virtual cat to life with real emotions, intelligent conversations, and memory."
            image={tom}
            link="https://digital-pet-twin.vercel.app/"
          />
          <PortofolioCard
            title="Smart Feedback Assistant"
            description="Smart Feedback Assistant is an AI-powered system that helps businesses manage customer questions and feedback. "
            image={feedflow}
            link="https://feed-flow-ten.vercel.app/"
          />
          <PortofolioCard
            title="MovieMate"
            description="MovieMate is a Telegram bot that recommends movies based on your favorite genres, helping you discover the perfect film for any mood or movie night."
            image={movie}
            link="https://t.me/MovieMatePybot"
          />
          <PortofolioCard
            title="Mentorix Employee Bot"
            description="Mentorix is a Telegram bot that connects tutors with students. Tutors can easily register, create profiles, and offer their expertise, making learning accessible and hassle-free."
            image={mentorix}
            link="https://t.me/MentorixEmployeeBot"
          />
          <PortofolioCard
            title="Mentorix Client Bot"
            description="Mentorix Client Bot helps users find and connect with qualified tutors on Telegram."
            image={mentorix}
            link="https://t.me/MentorixClientBot"
          />
          <PortofolioCard
            title="Job Notify"
            description="JobNotify is a Telegram bot that sends job alerts based on your selected preferences, making it easy to discover relevant opportunities tailored to your interests."
            image={job}
            link="https://t.me/Job_NotifyBot"
          />
          <PortofolioCard
            title="AASTU Lost And Found"
            description="AAStU Lost and Found Bot is a Telegram bot for AAStU students and staff to report and recover lost items. It simplifies matching lost belongings with their rightful owners for a quicker, easier recovery."
            image={aastu}
            link="https://t.me/aastulostandfoundunionbot"
          />
          <PortofolioCard
            title="ScoreSnap"
            description="Score Snap is a Telegram bot that provides live football scores, recent results, and real-time updates making it easy to stay connected with your favorite teams and matches."
            image={scoresnap}
            link="https://t.me/Scoresnapresultbot"
          />

          <PortofolioCard
            title="MovieMate"
            description="MovieMate is a Telegram bot that recommends movies based on your favorite genres, helping you discover the perfect film for any mood or movie night."
            image={movie}
            link="https://t.me/MovieMatePybot"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Portofolio;
