"use client";

import { fetchTripDetails } from "@/fetch/fetch";
import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ComponentWithAs,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconProps,
  Image,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

type DetailsProp = {
  params: {
    id: string;
  };
};

const Details = ({ params }: DetailsProp) => {
  const { id } = params;
  const { back } = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["tripdetails", id],
    queryFn: () => fetchTripDetails(id),
    enabled: !!id,
  });
  if (isLoading || data === undefined) {
    return (
      <Flex
        gap="10"
        flexDirection="column"
        bgColor="blackAlpha.100"
        p={[2, 10, 14]}
        w="100%"
        h="100dvh"
        alignItems="flex-start"
      >
        <Button
          variant="link"
          colorScheme="grey"
          onClick={back}
          textDecoration="underline"
          textUnderlineOffset={3}
        >
          Go back
        </Button>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  const { data: tripDetails } = data;

  const icons: Record<string, ComponentWithAs<"svg", IconProps>> = {
    MoonIcon: MoonIcon,
  };

  return (
    <Box bgColor="blackAlpha.100" p={[2, 10, 14]}>
      <Button
        variant="link"
        colorScheme="grey"
        onClick={back}
        textDecoration="underline"
        textUnderlineOffset={3}
        mb={20}
      >
        Go back
      </Button>
      <Heading fontSize="x-large" textTransform="capitalize">
        {tripDetails.title}
      </Heading>
      <Text
        maxW="3xl"
        color="gray.700"
        mt="4"
        mb="8"
        fontSize="xs"
        noOfLines={1}
      >
        {tripDetails.description}
      </Text>
      <Flex gap="16" alignItems="flex-start" flexDirection={{base: "column", md: "row"}}>
        <Flex gap="5" flexDirection="column" w={{base: "100%", md: "70%"}}>
          <Image
            src={tripDetails.img.src}
            alt={tripDetails.img.atl}
            borderRadius="xl"
            fit="cover"
            h={400}
          />
          <Text fontWeight={600} fontSize="large">
            Overview
          </Text>
          <Grid
            templateColumns={{lg: "repeat(2,1fr)", sm: "repeat(1, 1fr)"}}
            templateRows={{lg: "repeat(2, 1fr)", sm: "repeat(2, 1fr)"}}
            display="grid"
            gap={4}
          >
            {tripDetails.overview?.map((val) => {
              return (
                <GridItem key={val.title}>
                  <Flex gap={5}>
                    {!!icons[val.icon] && (
                      <Icon as={icons[val.icon]} boxSize={7} />
                    )}
                    <Box>
                      <Text
                        textTransform="capitalize"
                        fontSize="large"
                        fontWeight="500"
                      >
                        {val.title}
                      </Text>
                      <Text>{val.description}</Text>
                    </Box>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
          <Text color="gray.700" mt="4">
            {tripDetails.description}
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          gap="5"
          bgColor="white"
          borderRadius="lg"
          w="sm"
          p="5"
          boxShadow="base"
          h="fit-content"
        >
          <Flex flexDirection="column" gap="2" mb="4">
            <Text fontWeight="700" fontSize="large">
              {tripDetails.how_long.value} {tripDetails.how_long.unit}
            </Text>
            <Text fontSize="small">
              Emission: {tripDetails.emission.value} {tripDetails.emission.unit}{" "}
              CO
              <sub>2</sub>e
            </Text>
          </Flex>
          <Divider />
          <Box>
            <Text fontSize="small" fontWeight={600}>
              Countries included:
            </Text>
            <UnorderedList
              maxH="120px"
              spacing="1"
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              {tripDetails.country_include?.map((val) => (
                <ListItem key={val} color="gray.600">
                  <Text color="gray.600" fontSize="small">
                    {val}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Details;
