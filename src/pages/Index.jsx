import { Box, Button, Checkbox, Container, Flex, HStack, IconButton, Input, Select, Table, Tbody, Td, Text, Th, Thead, Tr, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FaBell, FaEdit, FaQuestionCircle, FaTrash, FaUserCircle } from "react-icons/fa";
import { MdImportExport } from "react-icons/md";

const Index = () => {
  return (
    <Container maxW="container.xl" p={{ base: 4, md: 0 }}>
      <Flex h="100vh" direction={{ base: "column", md: "row" }}>
        {/* Sidebar */}
        <Box w={{ base: "100%", md: "20%" }} bg="gray.100" p={4}>
          <VStack align="start" spacing={4}>
            <Box>
              <Text fontSize="xl" fontWeight="bold">Project Name</Text>
              <Text fontSize="sm">Category</Text>
            </Box>
            <VStack align="start" spacing={2}>
              <Text>Call Tool</Text>
              <Text>Invoice Tool</Text>
            </VStack>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box flex="1" p={{ base: 4, md: 6 }}>
          <Flex justify={{ base: "center", md: "space-between" }} align="center" mb={4} direction={{ base: "column", md: "row" }}>
            <Text fontSize="2xl" fontWeight="bold">Data Table</Text>
            <HStack spacing={{ base: 2, md: 4 }} mt={{ base: 4, md: 0 }}>
              <Button leftIcon={<FaEdit />} colorScheme="teal">Add report</Button>
              <IconButton icon={<FaQuestionCircle />} />
              <IconButton icon={<FaBell />} />
              <IconButton icon={<FaUserCircle />} />
            </HStack>
          </Flex>

          <Flex mb={4} direction={{ base: "column", md: "row" }}>
            <Input placeholder="Search" maxW={{ base: "100%", md: "200px" }} mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} />
            <Select placeholder="Category" maxW={{ base: "100%", md: "200px" }} mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            <Button leftIcon={<FaEdit />} mr={{ base: 0, md: 2 }} mb={{ base: 4, md: 0 }}>Filter</Button>
            <Button leftIcon={<FaEdit />}>Sort</Button>
          </Flex>

          <Flex mb={4} direction={{ base: "column", md: "row" }}>
            <Button leftIcon={<MdImportExport />} mr={{ base: 0, md: 2 }} mb={{ base: 4, md: 0 }}>Import</Button>
            <Button leftIcon={<MdImportExport />}>Export</Button>
          </Flex>

          <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th><Checkbox /></Th>
                  <Th>ITEM</Th>
                  <Th>VALUE ($)</Th>
                  <Th>DATA</Th>
                  <Th>DATA</Th>
                  <Th>STATUS</Th>
                  <Th>ACTION</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Array(10).fill("").map((_, index) => (
                  <Tr key={index}>
                    <Td><Checkbox /></Td>
                    <Td>Lorem dolore</Td>
                    <Td>9,000</Td>
                    <Td>Data series</Td>
                    <Td>DD/MM/YY</Td>
                    <Td><Button size="sm">Status</Button></Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton icon={<FaEdit />} size="sm" />
                        <IconButton icon={<FaTrash />} size="sm" />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          <Text mt={4}>106 results</Text>
          <Flex justify="center" mt={4} wrap="wrap">
            <Button size="sm" mr={2} mb={2}>1</Button>
            <Button size="sm" mr={2} mb={2}>2</Button>
            <Button size="sm" mr={2} mb={2}>3</Button>
            <Button size="sm" mr={2} mb={2}>4</Button>
            <Button size="sm" mr={2} mb={2}>...</Button>
            <Button size="sm" mr={2} mb={2}>10</Button>
            <Button size="sm" mb={2}>11</Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;