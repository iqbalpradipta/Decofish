import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import ListBrands from "./components/ListBrands";
import CardProduct from "./components/newArivalscomp/CardProduct";
import CardBestSeller from "./components/bestSellers/CardBestSeller";
import Navbar from "../../components/navbar";
import BoxCategory from "./components/boxCategory/BoxCategory";
import Footers from "../../components/footers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        backgroundImage="url('https://asset.kompas.com/crops/-wGvjmdHhBveMeCOeZoRTvAznkA=/0x0:750x500/750x500/data/photo/2021/04/29/608add6ec4f80.jpg')"
        backgroundSize="cover"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        p={10}
        py={20}
      >
        <Card w={"50%"} p={8} rounded={"2xl"}>
          <Heading mb={4} fontFamily={"abril"} pt={5} w={"50%"}>
            FIND YOUR FAVORITE DECORATIVE FISH
          </Heading>
          <Text w={"90%"} mb={4}>
            Explore the decorative fish we have available, provided with high
            quality that will highlight your individuality and satisfy yourself.
          </Text>
          <Button
            mb={12}
            w={"30%"}
            bg={"black"}
            color={"white"}
            _hover={{ bg: "gray.200", color: "black" }}
            rounded={"full"}
          >
            Shop Now
          </Button>
          <Flex justifyContent={"center"} mb={4}>
            <Flex flexDirection={"column"} mr={10}>
              <Heading fontWeight={"bold"} fontSize={"xxx-large"}>
                1+
              </Heading>
              <Text fontSize={15} textAlign={"center"} color={"gray.500"}>
                International Brands
              </Text>
            </Flex>
            <Flex flexDirection={"column"} mr={10}>
              <Heading fontWeight={"bold"} fontSize={"xxx-large"}>
                2.000+
              </Heading>
              <Text fontSize={15} textAlign={"center"} color={"gray.500"}>
                Number of Fish sold
              </Text>
            </Flex>
            <Flex flexDirection={"column"} mr={10}>
              <Heading fontWeight={"bold"} fontSize={"xxx-large"}>
                90.000+
              </Heading>
              <Text fontSize={15} textAlign={"center"} color={"gray.500"}>
                Happy Customers
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Box>
      <ListBrands />
      <CardProduct />
      <Box border={"1px solid gray"} mb={10} />
      <CardBestSeller />
      <Box p={4} px={16}>
        <BoxCategory />
      </Box>
      <Footers />
    </>
  );
};

export default Home;
