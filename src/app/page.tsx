"use client";

import Card from "@/component/card";
import { fetchTrip } from "@/fetch/fetch";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView();
  const { data, fetchNextPage, hasNextPage, isError, error, isLoading } =
    useInfiniteQuery({
      queryKey: ["trip"],
      queryFn: fetchTrip,
      getNextPageParam: (lastPage, pages) => lastPage.data.next_page,
      initialPageParam: 1,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <Box bgColor="blackAlpha.100">
      <Box>
        {isLoading ? (
          <Box w="100%" h="100dvh" display="grid" placeItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            />
            </Box>
        ) : isError ? (
          <Text color="red.500">{error.message}</Text>
        ) : (
          <Flex
            flexWrap="wrap"
            flexDirection="row"
            w="100%"
            p={4}
            py={20}
            gap="5"
            justifyContent="center"
          >
            {data?.pages?.map((page) =>
              page.data?.data?.map((item, index) => (
                <Card
                  id={item.id}
                  key={item.id}
                  country_count={item.country_include.length}
                  days={item.how_long.value}
                  emission={item.emission.value}
                  emission_unit={item.emission.unit}
                  img={item.img.src}
                  rating={item.rating}
                  title={item.title}
                />
              ))
            )}
          </Flex>
        )}
      </Box>
      <div ref={ref}></div>
    </Box>
  );
}
