import axios from "axios";
import { Trip } from "./fetch.type";
import { TripDetails } from "./fetchDetails.type";
import { cache } from "react";

const BASEURL = '/api/trip/'

export const fetchTrip = cache(async ({ pageParam = 1 }) => {
  const res = await axios<Trip>(
    `${BASEURL}?_page=${pageParam}&_per_page=10`
  );
  return res;
});
export const fetchTripDetails = cache(async (id: string) => {
  const res = await axios<TripDetails>(`${BASEURL}${id}`);
  return res;
});
