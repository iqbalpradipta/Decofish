import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  Button,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Footers from "../../components/footers";
import Breadcrums from "./components/breadcrums";
import PreviewImage from "./components/previewImage";
import DetailCard from "./components/detailCard";
import Reviews from "./components/reviews";
import Recomendation from "./components/recomendation";

const DetailProduct = () => {
  return (
    <>
      <Navbar />

      <Box>
        <Box
          w={{ base: "90%", "2xl": "80%" }}
          h="100%"
          m="auto"
          mb="20"
          py="10"
        >
          <Breadcrums />

          <Grid templateColumns="repeat(2, 1fr)" gap={5} mt="50px">
            <GridItem colSpan={1}>
              <PreviewImage />
            </GridItem>

            <GridItem colSpan={1} pl="5">
              <DetailCard />
            </GridItem>
          </Grid>

          <Reviews />

          <Recomendation />
        </Box>
      </Box>

      <Footers />
    </>
  );
};

export default DetailProduct;
