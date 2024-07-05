import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Input, Select, Text } from '@chakra-ui/react';
import Icons from './icons';

function FiltersCards() {
  return (
    <Box mb='24'>
      <Box border="1px" borderRadius="15px" borderColor="#EDEDED" w="280px" h="700px" boxShadow="lg" mt="30px" ms="30px">
        <Text fontWeight="bold" p="20px" fontSize="23px">
          Filters
        </Text>
        <Icons />
        <Box border="1px" borderColor="#EDEDED" w="250px" ms="15px" mt="-10px" />
        <Box p="20px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Category
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Select border="1px" borderColor="#EDEDED" mt="5px" borderRadius="5px">
                  <option value="option1">Ikan Hias</option>
                  <option value="option2">Ikan Ternak</option>
                  <option value="option3">Ikan Konsumsi</option>
                </Select>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box p="20px">
          <Text fontWeight="bold" fontSize="23px" mt="-10px">
            Price
          </Text>
          <Box border="1px" mt='10px' borderColor="#EDEDED" w="250px" ms="-4px" />

          <Text mt="10px">Minimum</Text>
          <Input border="1px" borderColor="#EDEDED" borderRadius="8px" p="15px" placeholder="Rp. " mb="15px" />

          <Text mt="10px">Maximum</Text>
          <Input border="1px" borderColor="#EDEDED" borderRadius="8px" p="15px" placeholder="Rp. " />

          <Button bgColor="#000000" color='white' variant="outline" w='200px' h='35px' p='20px' borderRadius='30px' ms='8px' mt='20px'>
            Apply Filter
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FiltersCards;
