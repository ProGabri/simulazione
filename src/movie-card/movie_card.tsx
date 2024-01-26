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
interface moviecardprops {
  movied: movie;
}

export const MovieCard = ({ movied }: moviecardprops) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={movied.Poster} alt={movied.Title} borderRadius="lg" />
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
