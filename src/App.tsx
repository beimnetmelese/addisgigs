import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./component/navBar";
import Hero from "./component/hero";
import Service from "./component/service";
import Portofolio from "./component/portofolio";
import Price from "./component/price";
import AboutUs from "./component/aboutUs";
import ContactUs from "./component/contactUs";
import FloatingIcons from "./component/floatingIcons";

function App() {
  return (
    <>
      <FloatingIcons />
      <Grid
        templateAreas={{
          lg: `"nav" "main"`,
        }}
        height={"100hv"}
      >
        <GridItem
          bg="rgba(255, 255, 255,1)" // transparent effect
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
          width={"100%"}
          position={"fixed"}
          zIndex={3}
          area={"nav"}
          background="inherit"
        >
          <NavBar />
        </GridItem>

        <GridItem marginTop={"5%"} area={"main"}>
          <div id="home" style={{ scrollMarginTop: "140px" }}>
            <Hero />
          </div>
          <div id="service" style={{ scrollMarginTop: "65px" }}>
            <Service />
          </div>
          <div id="portofolio" style={{ scrollMarginTop: "65px" }}>
            <Portofolio />
          </div>
          <div id="price" style={{ scrollMarginTop: "65px" }}>
            <Price />
          </div>
          <div id="why-choose-us" style={{ scrollMarginTop: "65px" }}>
            <AboutUs />
          </div>
          <div id="contact" style={{ scrollMarginTop: "65px" }}>
            <ContactUs />
          </div>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
