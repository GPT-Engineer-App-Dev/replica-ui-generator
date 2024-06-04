import { Box, Button, Checkbox, Container, Flex, HStack, IconButton, Input, Select, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { FaBell, FaEdit, FaQuestionCircle, FaTrash, FaUserCircle } from "react-icons/fa";
import { MdImportExport } from "react-icons/md";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh">
        {/* Sidebar */}
        <Box w="20%" bg="gray.100" p={4}>
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
        <Box flex="1" p={6}>
          <Flex justify="space-between" align="center" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">Data Table</Text>
            <HStack spacing={4}>
              <Button leftIcon={<FaEdit />} colorScheme="teal">Add report</Button>
              <IconButton icon={<FaQuestionCircle />} />
              <IconButton icon={<FaBell />} />
              <IconButton icon={<FaUserCircle />} />
            </HStack>
          </Flex>

          <Flex mb={4}>
            <Input placeholder="Search" maxW="200px" mr={4} />
            <Select placeholder="Category" maxW="200px" mr={4}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            <Button leftIcon={<FaEdit />} mr={2}>Filter</Button>
            <Button leftIcon={<FaEdit />}>Sort</Button>
          </Flex>

          <Flex mb={4}>
            <Button leftIcon={<MdImportExport />} mr={2}>Import</Button>
            <Button leftIcon={<MdImportExport />}>Export</Button>
          </Flex>

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

          <Text mt={4}>106 results</Text>
          <Flex justify="center" mt={4}>
            <Button size="sm" mr={2}>1</Button>
            <Button size="sm" mr={2}>2</Button>
            <Button size="sm" mr={2}>3</Button>
            <Button size="sm" mr={2}>4</Button>
            <Button size="sm" mr={2}>...</Button>
            <Button size="sm" mr={2}>10</Button>
            <Button size="sm">11</Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;