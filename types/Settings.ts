import { Dispatch, SetStateAction } from "react";

export type SettingsTabType = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  email:string
};
