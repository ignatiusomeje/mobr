export type dashboardType = {
  name: string;
  url: string;
  Totalbooking: number;
  box: Box[];
};

export type dashboardTempType = {
  loading: boolean;
  data: data[];
};

type data = {
  name: string;
  url: string;
  Totalbooking: number;
  box: Box[];
};

type Box = {
  name: string;
  total: number;
};

export type cardType = {
  name: string;
  total: number;
};
