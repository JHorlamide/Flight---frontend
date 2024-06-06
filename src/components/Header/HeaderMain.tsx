import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { FaCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';

const HeaderMain = () => {
  return (
    <Box px={10} py={5} bg={"gray-500"} display="flex" justifyContent="space-between">
      <Flex gap={5}>
        <h4>Logo</h4>

        <Flex gap={5}>
          <h5>Carpool</h5>
          <h5>Bus</h5>
        </Flex>
      </Flex>

      <Flex gap={5} alignContent="center">
        <Link to="">
          <Box display="flex" gap={2} alignItems="center"><CiSearch size={20} /> Search</Box>
        </Link>

        <Link to="">
          <Box display="flex" gap={2} alignItems="center"><CiCirclePlus size={20} /> Publish a ride</Box>
        </Link>

        <Box display="flex" gap={2} alignItems="center"><FaCircleUser size={20} /></Box>
      </Flex>
    </Box>
  )
}

export default HeaderMain