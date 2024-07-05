import {
  Box,
  Grid,
  Text,
  Image,
  NumberInput,
  HStack,
  Button,
} from "@chakra-ui/react";
import Breadcrums from "./components/breadcrums";
import FiltersCards from "./components/filtersCards";
import dataMobel from "./mocks/dataMobel.json";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Navbar from "../../components/navbar";
import Footers from "../../components/footers";

function Category() {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#FFC663",
    inactiveFillColor: "gray",
  };
  return (
    <>
      <Navbar />
      <Breadcrums />
      <HStack>
        <Box width="75%" ms="5%" mt="50px" mb="100px">
          <Text fontSize="30px" fontWeight="bold">
            Decorative Fish
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mr="10">
            {dataMobel.map((data, index) => (
              <Box mt="10px" key={index}>
                <Image
                  borderRadius="20px"
                  boxSize="500px"
                  width="100%"
                  height="250px"
                  objectFit="cover"
                  src={data.image}
                  alt="chevrolet"
                />
                <Text fontWeight="bold" fontSize="20px">
                  {data.name}
                </Text>
                <Box display="flex" gap={2}>
                  <Rating
                    style={{ maxWidth: 115 }}
                    value={data.rating}
                    readOnly
                    itemStyles={myStyles}
                  />
                  <Text>{data.rating}/5</Text>
                </Box>
                <Text fontWeight="bold" fontSize="15px">
                  {data.harga}
                </Text>
                <Button>Add To Chart</Button>
              </Box>
            ))}
          </Grid>
        </Box>
        <FiltersCards />
      </HStack>

      <Footers />
    </>
  );
}

export default Category;
