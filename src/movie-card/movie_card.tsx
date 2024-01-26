import {
  ButtonGroup,
  Heading,
  Stack,
  Card,
  CardBody,
  Image,
  Text,
  Divider,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { movie } from "../types/type";
import { Link } from "react-router-dom";
interface moviecardprops {
  movied: movie;
}

export const MovieCard = ({ movied }: moviecardprops) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Link to="/desc_film">
          <Image src={movied.Poster} alt={movied.Title} borderRadius="lg" />
        </Link>
        <Stack mt="6" spacing="3">
          <Heading size="md">{movied.Title}</Heading>

          <Text color="blue.600" fontSize="2xl"></Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <p>{movied.Year}</p>
        <p>{movied.Type}</p>
      </CardFooter>
    </Card>
  );
};
