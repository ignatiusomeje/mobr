export type dashboardType = {
  name: string;
  url: string;
  Totalbooking: number;
  box: Box[];
};

export type dashboardTempType = {
  loading: boolean;
};

type Box = {
  name: string;
  total: number;
};

export type cardType = {
  name: string;
  total: number;
};
