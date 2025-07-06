# Miden Starter Template

A starter template for building dApps on the [Miden](https://miden.xyz/) blockchain.

---

## Quick Start

1. Git clone `https://github.com/ngjupeng/miden-starter-template.git`
2. Run `cp .env.example .env`
3. **Install dependencies:**

   ```bash
   pnpm install

   ```

4. **Run the dev server:**
   ```bash
   pnpm run dev
   ```

---

## Project Structure

- `/hooks/web3/` — Miden React hooks for account, assets etc.
- `/hooks/server/` — Server React hooks for with tanstack query
- `/components/` — UI components
- `/services/utils/` — Utility functions for account, note, faucet, and more.
- `/services/store/` — Global state management
- `/services/api/` — Backend server api endpoints

---

## Available Hooks

### `useAccount()`

Fetches the current connected account's assets and consumable notes.

```ts
const {
  assets,
  consumableNotes,
  loading,
  error,
  isAccountDeployed,
  accountId,
} = useAccount(accountId);
```

- `assets`: List of fungible assets for the account
- `consumableNotes`: List of consumable notes for the account
- `isAccountDeployed`: Boolean, true if the account is deployed
- `accountId`: The current wallet's public key

### `useClient()`

Provides a singleton Miden WebClient instance.

```ts
const { getClient } = useClient();
```

---

## Utilities

### `/services/utils/account.ts`

- `deployAccount(isPublic: boolean)` — Deploy a new account (public/private)
- _(Planned: `activateAccount` for account activation via faucet and minting)_

### `/services/utils/note.ts`

- `getConsumableNotes(accountId: string)` — Fetch all consumable notes for an account
- `consumeAllNotes(accountId: string, noteIds: string[])` — Consume all notes for an account
- `createP2IDNote(...)` — Build a P2ID note for transfers
- `createP2IDRNote(...)` - Build a P2IDR note for transfers

### `/services/utils/faucet.ts`

- `deployFaucet(symbol, decimals, maxSupply)` — Deploy a new faucet
- `mintToken(accountId, faucetId, amount)` — Mint tokens from a faucet to an account

---

## Limitations

> **Note:**
> Currently, there is an issue with consuming transactions directly from the wallet extension. As a workaround, deploying a new account is the recommended solution for activating accounts and managing assets. This may change as the Miden wallet ecosystem evolves.

---

## Contributing

Pull requests and issues are welcome! Please open an issue if you find a bug or have a feature request.

---

## License

MIT
