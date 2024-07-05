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
import ReviewsCard from "./reviewsCard";
import datas from "../mocks/data.json";
import AddReviewModal from "./addReviewModal";

const Reviews = () => {
  return (
    <Box mt="24">
      <Flex justifyContent="space-between">
        <Flex gap={3} alignItems="end">
          <Text fontWeight="bold" fontSize="2xl">
            All Reviews
          </Text>
          <Text fontSize="xl">({datas[0].reviews.length})</Text>
        </Flex>

        <AddReviewModal />
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={5} mt="6">
        {datas[0].reviews.map((review, index) => {
          return (
            <GridItem key={index} colSpan={1}>
              <ReviewsCard review={review} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Reviews;
