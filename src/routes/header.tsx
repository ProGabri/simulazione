import { Link } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bgColor="red" bgSize={"100%"}>
      <Flex
        align="center"
        justify="space-between"
        p={4}
        mx="auto"
        maxWidth="1000px"
      >
        <Link to="/">
          <Image
            height={50} // Set your preferred height
            width={50} // Set your preferred width
            src="https://t4.ftcdn.net/jpg/01/25/57/91/360_F_125579108_cKIL8gnBgRKqcLeyG03llZNaeFOjoCLH.jpg"
            alt="Homepage"
          />
        </Link>
        {/* Add other header elements or links here */}
      </Flex>
    </Box>
  );
};
