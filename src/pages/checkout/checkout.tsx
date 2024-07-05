import React from "react";
import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Footers from "../../components/footers";
import Breadcrums from "./components/breadcrumbs";
import ProductCard from "./components/productCard";
import Address from "./components/address";
import Delivery from "./components/delivery";
import TotalPrice from "./components/totalPrice";

const Checkout = () => {
  return (
    <Box>
      <Navbar />
      <Box w={{ base: "90%", "2xl": "80%" }} m="auto" py="10" mb="10">
        <Breadcrums />
        <ProductCard />
        <Address />
        <Delivery />
        <Box w="100%" h="2px" bg="gray" mt='10'/>
        <TotalPrice />
      </Box>
      <Footers />
    </Box>
  );
};

export default Checkout;
