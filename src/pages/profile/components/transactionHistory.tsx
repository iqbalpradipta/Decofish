import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import ProductCard from "./productCard";

const TransactionHistory = () => {
  return (
    <Tabs variant="soft-rounded">
      <TabList gap="3">
        <Tab
          border="2px solid gray"
          color="gray"
          _selected={{ color: "white", bg: "black", border: "2px solid black" }}
        >
          All
        </Tab>
        <Tab
          border="2px solid gray"
          color="gray"
          _selected={{ color: "white", bg: "black", border: "2px solid black" }}
        >
          Pending
        </Tab>
        <Tab
          border="2px solid gray"
          color="gray"
          _selected={{ color: "white", bg: "black", border: "2px solid black" }}
        >
          Delivered
        </Tab>
        <Tab
          border="2px solid gray"
          color="gray"
          _selected={{ color: "white", bg: "black", border: "2px solid black" }}
        >
          Success
        </Tab>
      </TabList>
      <TabPanels py="5">
        <TabPanel>
          <Flex gap="5" flexDirection="column">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex gap="5" flexDirection="column">
            <ProductCard />
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex gap="5" flexDirection="column">
            <ProductCard />
            <ProductCard />
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex gap="5" flexDirection="column">
            <ProductCard />
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TransactionHistory;
