import React, { useState, useEffect } from "react";
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
import datas from "../mocks/data.json";

const PreviewImage = () => {
  const [selectedImage, setSelectedImage] = useState<string>(datas[0].image[0]);

  // useEffect(() => {
  //     setSelectedImage(datas[0].image[0])
  // }, [])

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={5}>
      <GridItem colSpan={3} display="flex" flexDirection="column" gap="5">
        {datas[0].image.map((item, index) => {
          return (
            <Button
              w="90%"
              h="130px"
              key={index}
              p={0}
              rounded="10px"
              border={selectedImage == item ? "5px solid #313131" : ""}
              onClick={() => setSelectedImage(item)}
            >
              <Image
                w="100%"
                h="100%"
                src={item}
                alt="Dan Abramov"
                rounded="10px"
                objectFit="cover"
              />
            </Button>
          );
        })}
      </GridItem>

      <GridItem colSpan={9}>
        <Image
          w="100%"
          h="100%"
          src={selectedImage}
          alt="Dan Abramov"
          rounded="10px"
          objectFit="cover"
        />
      </GridItem>
    </Grid>
  );
};

export default PreviewImage;
