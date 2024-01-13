import Bus from "models/Bus"
export type BusDataProviderValue = {
    data?: Bus[],
    busDataFetch: Function
  }
export type RareLine = {
  [key: string]: string[];
}