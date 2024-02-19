export interface Trip {
  data: Data[];
  next_page: number;
  page: number;
  per_page: number;
  pre_page: number;
  total: number;
  total_pages: number;
}

export interface Data {
  id: string;
  title: string;
  description: string;
  img: Img;
  rating: number;
  how_long: HowLong;
  emission: Emission;
  country_include: string[];
  overview: Overview[];
}

export interface Img {
  src: string;
  atl: string;
}

export interface HowLong {
  value: number;
  unit: string;
}

export interface Emission {
  value: number;
  unit: string;
}

export interface Overview {
  title: string;
  description: string;
  icon: string;
}
