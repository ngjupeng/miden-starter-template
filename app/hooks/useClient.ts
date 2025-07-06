import { nodeEndpoint } from "@/app/utils/constant";
import { WebClient } from "@demox-labs/miden-sdk";

let client: any = null;

export function useClient() {
  async function getClient(): Promise<WebClient> {
    if (!client) {
      const { WebClient } = await import("@demox-labs/miden-sdk");
      client = await WebClient.createClient(nodeEndpoint);
      await client.syncState();
    }
    return client;
  }

  return { getClient };
}
