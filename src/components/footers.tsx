import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, TileLayer } from "react-leaflet";
import yaudah from "../assets/yaudah.svg";
import "leaflet/dist/leaflet.css";

const Footers = () => {
  return (
    <>
      <Box
        w={{ base: "90%", "2xl": "80%" }}
        m="auto"
        bg="black"
        textAlign="center"
        rounded="20px"
        position="relative"
      >
        <Text
          color="white"
          boxShadow="xl"
          fontWeight="bold"
          fontSize="4xl"
          w={{ base: "90%", md: "40%" }}
          py={{ base: "5" }}
          m="auto"
        >
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </Text>
      </Box>

      <Box bg="#F0F0F0" pt="32" mt="-70px">
        <Grid
          w={{ base: "90%", "2xl": "80%" }}
          templateColumns="repeat(9, 1fr)"
          gap={6}
          m="auto"
        >
          <GridItem
            colSpan={1}
            display="flex"
            flexDirection="column"
            justifyContent="end"
            gap="10"
            py="5"
            pb="20"
          >
            {/* <Text fontWeight="bold" fontSize="3xl" mb='10'>
                AutoLux
              </Text> */}
            <Image src={yaudah} alt="logo" />

            <Flex gap="3">
              <Button
                bg="white"
                p="2"
                rounded="full"
                border="2px solid gray"
                transition="all ease-in-out 0.3s"
                _hover={{
                  bg: "black",
                  color: "white",
                  border: "2px solid black",
                }}
              >
                <FaXTwitter />
              </Button>

              <Button
                bg="white"
                p="2"
                rounded="full"
                border="2px solid gray"
                transition="all ease-in-out 0.3s"
                _hover={{
                  bg: "black",
                  color: "white",
                  border: "2px solid black",
                }}
              >
                <FaFacebook />
              </Button>

              <Button
                bg="white"
                p="2"
                rounded="full"
                border="2px solid gray"
                transition="all ease-in-out 0.3s"
                _hover={{
                  bg: "black",
                  color: "white",
                  border: "2px solid black",
                }}
              >
                <FaInstagram />
              </Button>

              <Button
                bg="white"
                p="2"
                rounded="full"
                border="2px solid gray"
                transition="all ease-in-out 0.3s"
                _hover={{
                  bg: "black",
                  color: "white",
                  border: "2px solid black",
                }}
              >
                <FaGithub />
              </Button>
            </Flex>
          </GridItem>

          <GridItem colSpan={5} pb="14">
            <Flex
              h="100%"
              justifyContent="center"
              alignItems="end"
              gap="5"
              p="5"
            >
              <Button
                rounded="20"
                // px="5"
                fontWeight="bold"
                transition="all ease-in-out 0.3s"
                _hover={{ bg: "black", color: "white" }}
              >
                Legal
              </Button>
            </Flex>
          </GridItem>

          <GridItem h="260px" colSpan={3} pl="5">
            <Flex gap="2" mb="3">
              <Text mt="1">
                <FaLocationDot />
              </Text>

              <Text>
                Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
                Banten 15413
              </Text>
            </Flex>

            <MapContainer
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
              center={[-6.3013588, 106.732582]}
              zoom={15}
            >
              <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
              />
            </MapContainer>
          </GridItem>
        </Grid>

        <Flex
          bg="#000000"
          py={3}
          justifyContent="center"
          alignItems="center"
          color="white"
          gap="2"
          fontWeight="bold"
        >
          <FaRegCopyright />
          <Text>Decofish</Text>
          <Text>2024</Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footers;
