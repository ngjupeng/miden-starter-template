import { AccountId, NoteType } from "@demox-labs/miden-sdk";
import { useClient } from "../../hooks/web3/useClient";

export async function createP2IDNote(
  sender: AccountId,
  receiver: AccountId,
  faucet: AccountId,
  amount: number,
  noteType: NoteType
) {
  const { FungibleAsset, OutputNote, Note, NoteAssets, Word, Felt } =
    await import("@demox-labs/miden-sdk");

  return OutputNote.full(
    Note.createP2IDNote(
      sender,
      receiver,
      new NoteAssets([new FungibleAsset(faucet, BigInt(amount))]),
      noteType,
      // @todo: replace hardcoded values with random values
      Word.newFromFelts([
        new Felt(BigInt(1)),
        new Felt(BigInt(2)),
        new Felt(BigInt(3)),
        new Felt(BigInt(4)),
      ]),
      new Felt(BigInt(0))
    )
  );
}

export async function createP2IDRNote(
  sender: AccountId,
  receiver: AccountId,
  faucet: AccountId,
  amount: number,
  noteType: NoteType,
  recallHeight: number
) {
  const { FungibleAsset, OutputNote, Note, NoteAssets, Word, Felt } =
    await import("@demox-labs/miden-sdk");

  return OutputNote.full(
    Note.createP2IDRNote(
      sender,
      receiver,
      new NoteAssets([new FungibleAsset(faucet, BigInt(amount))]),
      noteType,
      // @todo: replace hardcoded values with random values
      Word.newFromFelts([
        new Felt(BigInt(1)),
        new Felt(BigInt(2)),
        new Felt(BigInt(3)),
        new Felt(BigInt(4)),
      ]),
      recallHeight,
      new Felt(BigInt(0))
    )
  );
}

export async function consumeAllNotes(accountId: string, noteIds: string[]) {
  const { getClient } = useClient();
  try {
    const client = await getClient();
    const { AccountId } = await import("@demox-labs/miden-sdk");
    const consumeTxRequest = client.newConsumeTransactionRequest(noteIds);
    const txResult = await client.newTransaction(
      AccountId.fromHex(accountId),
      consumeTxRequest
    );
    await client.submitTransaction(txResult);
  } catch (err) {
    throw new Error("Failed to consume notes");
  }
}

export async function getConsumableNotes(accountId: string) {
  const { getClient } = useClient();

  try {
    const client = await getClient();

    const notes = await client.getConsumableNotes(AccountId.fromHex(accountId));
    return notes;
  } catch (error) {
    throw new Error("Failed to fetch consumable notes");
  }
}
