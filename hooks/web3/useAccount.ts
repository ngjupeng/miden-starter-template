import { useState, useEffect } from "react";
import { useClient } from "./useClient";
import {
  AccountId,
  ConsumableNoteRecord,
  FungibleAsset,
} from "@demox-labs/miden-sdk";
import { getConsumableNotes } from "../../services/utils/note";

export interface Asset {
  tokenAddress: string;
  amount: string;
}

export function useAccount(publicKey: string) {
  const [assets, setAssets] = useState<Asset[] | null>(null);
  const [consumableNotes, setConsumableNotes] = useState<
    ConsumableNoteRecord[] | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [isAccountDeployed, setIsAccountDeployed] = useState(true);
  const { getClient } = useClient();
  /// @todo: use account from extension
  // const { publicKey, connected } = useWallet();

  useEffect(() => {
    const fetchAssets = async () => {
      let accountId;
      try {
        accountId = AccountId.fromHex(publicKey);
      } catch (error) {
        setAssets(null);
        setConsumableNotes(null);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const client = await getClient();
        let account = await client.getAccount(accountId);
        if (!account) {
          await client.importAccountById(accountId);
          await client.syncState();
          account = await client.getAccount(accountId);
          if (!account) {
            throw new Error(`Account not found after import: ${publicKey}`);
          }
        }
        const accountAssets: FungibleAsset[] = account.vault().fungibleAssets();
        setAssets(
          accountAssets.map((asset: FungibleAsset) => ({
            tokenAddress: asset.faucetId().toString(),
            amount: asset.amount().toString(),
          }))
        );

        // read account consumable notes
        const consumableNotes = await getConsumableNotes(publicKey);
        setConsumableNotes(consumableNotes);
      } catch (err) {
        const error = String(err);
        if (error.includes("status: NotFound")) {
          // account didnt do any transaction
          setIsAccountDeployed(false);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, [publicKey]);

  return {
    assets,
    loading,
    error,
    isAccountDeployed,
    consumableNotes,
    accountId: publicKey,
    isError: !!error,
  };
}
