import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react";
import Ratings from "../../../features/Rating";

const ReviewsCard = (data: any) => {
  console.log("datas :", data);

  return (
    <Flex
      flexDirection="column"
      gap="2"
      border="1px solid #b3b3b3"
      h="200px"
      rounded="10px"
      p="5"
      pr="0"
    >
      <Ratings rating={data.review.rating} />
      <Text fontWeight="bold" fontSize="xl">
        {data.review.name}
      </Text>
      <Box
        h="100%"
        overflow="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "6px",
            backgroundColor: `none`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `black`,
            borderRadius: "3px",
          },
        }}
      >
        <Text pr="5">{data.review.message}</Text>
      </Box>
    </Flex>
  );
};

export default ReviewsCard;
