import { useClient } from "../../hooks/web3/useClient";

export async function deployAccount(isPublic: boolean) {
  const { getClient } = useClient();
  const client = await getClient();
  const { AccountStorageMode } = await import("@demox-labs/miden-sdk");

  const account = await client.newWallet(
    isPublic ? AccountStorageMode.public() : AccountStorageMode.private(),
    true
  );

  return account;
}
