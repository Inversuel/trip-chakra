import {
  Button,
  CardBody,
  Heading,
  Image,
  Text,
  Card as CardChakra,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";

type CardType = {
  id: string;
  title: string;
  country_count: number;
  days: number;
  emission: number;
  emission_unit: string;
  rating: number;
  img: string;
};

const Card = ({
  id,
  title,
  country_count,
  days,
  emission,
  emission_unit,
  rating,
  img,
}: CardType) => {
  const ArrayRating = Array(Math.ceil(rating)).fill("");
  return (
    <CardChakra position="relative" w="400px" h="300px" p="5" borderRadius="xl">
      <CardBody
        position="relative"
        overflow="hidden"
        w="100%"
        h="100%"
        borderRadius="xl"
      >
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          position="absolute"
          inset={0}
          objectFit="cover"
          filter="brightness(70%)"
        />
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          position="absolute"
          gap="2"
          inset={0}
          pt={6}
          px={5}
        >
          <Heading
            color="white"
            size="md"
            textAlign="center"
            textTransform="capitalize"
          >
            {title}
          </Heading>
          <Flex gap="2" justifyContent="center">
            <Text color="white" fontSize="xs">
              {country_count} Countries,
            </Text>
            <Text color="white" fontSize="xs">
              {days} days
            </Text>
          </Flex>
          <Link href={`/details/${id}`} alignSelf="center">
            <Button variant="solid" colorScheme="blue">
              Learn more
            </Button>
          </Link>
          <Flex
            bgColor="blue.800"
            justifyContent="space-between"
            p="3"
            borderRadius="xl"
            mb="16"
          >
            <Text color="white">Emission offset:</Text>
            <Text color="white">
              {emission} {emission_unit} CO<sub>2</sub>e
            </Text>
          </Flex>
        </Flex>
      </CardBody>
      <Flex
        justifyContent="space-between"
        borderTopRadius="xl"
        alignItems="center"
        p={3}
        bgColor="white"
        h={16}
        zIndex={2}
        mx={10}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
      >
        <Text>Trip rating</Text>
        <Flex alignItems="center" gap="2" alignContent="center">
          <Flex>
            {ArrayRating?.map((_, i) => (
              <StarIcon w={4} h={4} key={i} color="yellow.400" />
            ))}
          </Flex>
          <Text>{rating.toFixed(1)}</Text>
        </Flex>
      </Flex>
    </CardChakra>
  );
};

export default Card;
