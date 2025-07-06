import { Account, TransactionResult } from "@demox-labs/miden-sdk";
import { useClient } from "../../hooks/web3/useClient";

/// @param symbol can't exceed 6 characters
/// @param decimals can't exceed 12
export async function deployFaucet(
  symbol: string,
  decimals: number,
  maxSupply: number
): Promise<Account> {
  const { getClient } = useClient();

  try {
    const client = await getClient();
    const { AccountStorageMode } = await import("@demox-labs/miden-sdk");
    const faucet = await client.newFaucet(
      AccountStorageMode.public(),
      false,
      symbol,
      decimals,
      BigInt(maxSupply)
    );
    return faucet;
  } catch (err) {
    throw new Error("Failed to deploy faucet");
  }
}

export async function mintToken(
  accountId: string,
  faucetId: string,
  amount: number
): Promise<TransactionResult> {
  const { getClient } = useClient();

  try {
    const client = await getClient();
    const { AccountId, NoteType } = await import("@demox-labs/miden-sdk");
    const mintTxRequest = client.newMintTransactionRequest(
      AccountId.fromHex(accountId),
      AccountId.fromHex(faucetId),
      NoteType.Public,
      BigInt(amount)
    );
    const txResult = await client.newTransaction(
      AccountId.fromHex(faucetId),
      mintTxRequest
    );
    await client.submitTransaction(txResult);
    return txResult;
  } catch (err) {
    throw new Error("Failed to mint token");
  }
}
