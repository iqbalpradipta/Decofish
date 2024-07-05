import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Rating, Star } from "@smastrom/react-rating";

const Ratings = (rating:any) => {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#FFC663",
    inactiveFillColor: "#d3d3d3",
  };
  return (
    <Flex gap={2}>
      <Rating
        style={{ maxWidth: 115 }}
        value={rating.rating}
        readOnly
        itemStyles={myStyles}
      />

      <Text>{rating.rating}/5</Text>
    </Flex>
  );
};

export default Ratings;
