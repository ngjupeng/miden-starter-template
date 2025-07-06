import { apiServer } from ".";
import { ICounterResponse } from "../../types/counter";

async function getCounter(): Promise<ICounterResponse> {
  const res = await apiServer.get(`/counter`, {});
  return res.data;
}

export { getCounter };
