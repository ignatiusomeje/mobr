export type dashboardType = {
  name: string;
  url: string;
  Totalbooking: number;
  box: Box[];
};

type Box = {
  name: string;
  total: number;
  color: string;
};

export type cardType = {
  name: string;
  color: string;
  total: number;
}
