import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Breadcrums from "./components/breadcrums";
import ListCheckout from "./components/ListCheckoutCard";
import OrderSummary from "./components/orderSummart";
import Footers from "../../components/footers";
import Navbar from "../../components/navbar";

function Carts() {
  return (
    <>
      <Navbar />
      {/* <Box border="1px" borderColor="#EDEDED" w="90%" /> */}
      <Box py="10" w={{ base: "90%", "2xl": "80%" }} m="auto" mb='20'>
        <Breadcrums />
        <Text fontWeight="bold" fontSize="40px" mt="20px">
          Your Cart
        </Text>
        <Grid templateColumns="repeat(6, 1fr)">
          <GridItem colSpan={4} mt='5'>
            {/* <Grid gap={4}> */}
              <ListCheckout />
            {/* </Grid> */}
          </GridItem>

          <GridItem colSpan={2} mt='5'>
            <OrderSummary />
          </GridItem>
        </Grid>
      </Box>
      <Footers />
    </>
  );
}

export default Carts;
