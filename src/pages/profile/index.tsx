import {
  Box,
  Button,
  Card,
  Flex,
  Input,
  Text,
  Textarea,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../../components/navbar";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiFilePaper2Line } from "react-icons/ri";
import Footers from "../../components/footers";
import EditProfile from "./components/editProfile";
import TransactionHistory from "./components/transactionHistory";

const MyProfile = () => {
  const [selected, setSelected] = useState<string>("profile");

  return (
    <>
      <Navbar />
      {/* <Box p="20px" display={"flex"} flexDirection={"row"} mb={4} w={"full"}> */}
      <Grid
        templateColumns="repeat(12, 1fr)"
        w={{ base: "90%", "2xl": "80%" }}
        m="auto"
      >
        <GridItem
          // w={"22%"}
          colSpan={2}
          h={"100%"}
          mt="28"
        >
          <Flex flexDirection="column" gap="6">
            <Link
              _hover={{ bg: "transparent", color: "gray" }}
              bg={"transparent"}
              onClick={() => setSelected("profile")}
            >
              <Flex gap="2" alignItems="center">
                <CgProfile size={25} />
                <Text
                  // _hover={{ color: "gray" }}
                  fontWeight="600"
                  alignItems="center"
                  // mt={2}
                >
                  Profile
                </Text>
              </Flex>
            </Link>

            <Link
              _hover={{ bg: "transparent", color: "gray" }}
              bg={"transparent"}
              onClick={() => setSelected("transaction")}
            >
              <Flex gap="2" alignItems="center">
                <RiFilePaper2Line size={25} />
                <Text
                  // _hover={{ color: "gray" }}
                  fontWeight="600"
                  alignItems="center"
                  // mt={2}
                >
                  Transaction History
                </Text>
              </Flex>
            </Link>
          </Flex>
        </GridItem>

        <GridItem colSpan={10} mt="5" mb="20">
          {selected == "profile" ? <EditProfile /> : <TransactionHistory />}
        </GridItem>
      </Grid>
      {/* </Box> */}
      <Footers />
    </>
  );
};

export default MyProfile;
