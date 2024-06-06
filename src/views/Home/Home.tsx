/* Libraries */
import { Box, Button, Center, Input, InputAddon, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import { FaDotCircle } from "react-icons/fa";
import HeaderMain from "../../components/Header/HeaderMain";
import { IoCalendarOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <Box width="full">
      <HeaderMain />

      <Box bg="blue.500" height="20rem" width="full">
        <Text color="white" mt="6px" fontSize="4rem" fontWeight="bold" textAlign="center">Your pick of rides at low prices</Text>
      </Box>

      <Center mt="-2rem">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="white"
          borderLeftRadius="10px"
          // borderRadius="10px"
          width="fit-content"
          boxShadow="lg"
          py={2}
        >
          <InputGroup size='lg'>
            <Input
              py={2}
              border="none"
              type="text"
              placeholder='Leaving from'
              _focus={{ border: "none", ring: "none" }}
            />

            <InputLeftElement>
              <FaDotCircle size={20} />
            </InputLeftElement>
          </InputGroup>

          <InputGroup size='lg'>
            <Input
              py={2}
              border="none"
              type="text"
              placeholder='Going to'
              _focus={{ border: "none", ring: "none" }}
            />

            <InputLeftElement>
              <FaDotCircle size={20} />
            </InputLeftElement>
          </InputGroup>

          <InputGroup size='lg'>
            <Input
              py={2}
              border="none"
              type="date"
              placeholder='Today'
              _focus={{ border: "none", ring: "none" }}
            />

            <InputLeftElement>
              <IoCalendarOutline size={20} />
            </InputLeftElement>
          </InputGroup>

          <InputGroup size='lg'>
            <Input
              py={2}
              border="none"
              type="number"
              placeholder='Passengers'
              _focus={{ border: "none", ring: "none" }}
            />

            <InputLeftElement>
              <CiUser size={20} />
            </InputLeftElement>
          </InputGroup>
        </Box>

        <Button
          color="white"
          bg="blue.600"
          size="lg"
          height='64px'
          width='180px'
          borderLeftRadius="none"
          _hover={{ bg: "blue.800" }}
          leftIcon={<CiSearch size={24} />}
        >
          Search
        </Button>
      </Center>
    </Box>
  )
}

export default Home