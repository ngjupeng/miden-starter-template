# Miden Dev Toolkit Starter

A modern starter template for building dApps on the [Miden](https://miden.org/) blockchain. This project provides wallet integration, asset management, and a suite of ready-to-use React hooks and utilities to accelerate your development.

---

## 🚀 Features

- **Wallet integration** (Trident Wallet, Miden Wallet Adapter)
- **Account and asset management**
- **Token minting, batch transfer, faucet deployment**
- **Consumable notes utilities**
- **Production-ready Next.js + Tailwind CSS setup**

---

## 📦 Project Structure

- `app/hooks/` — React hooks for account, assets, minting, batch transfer, etc.
- `app/utils/` — Utility functions for account, note, faucet, and constants.
- `app/components/` — UI components (wallet connect, layout, etc.)
- `lib/` — (Legacy, can be removed if not used)

---

## 🧩 Available Hooks

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
} = useAccount();
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

## 🛠️ Utilities

### `app/utils/account.ts`

- `deployAccount(isPublic: boolean)` — Deploy a new account (public/private)
- _(Planned: `activateAccount` for account activation via faucet and minting)_

### `app/utils/note.ts`

- `getConsumableNotes(accountId: string)` — Fetch all consumable notes for an account
- `consumeAllNotes(accountId: string, noteIds: string[])` — Consume all notes for an account
- `buildP2IDNote(...)` — Build a P2ID note for transfers

### `app/utils/faucet.ts`

- `deployFaucet(symbol, decimals, maxSupply)` — Deploy a new faucet
- `mintToken(accountId, faucetId, amount)` — Mint tokens from a faucet to an account

---

## 🏁 Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```
2. **Run the dev server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
3. **Connect your wallet** using the button in the top right.
4. **Explore the hooks and utilities** to build your dApp!

---

## 📝 Notes & Limitations

> **Note:**
> Currently, there is an issue with consuming transactions directly from the wallet extension. As a workaround, deploying a new account is the recommended solution for activating accounts and managing assets. This may change as the Miden wallet ecosystem evolves.

---

## 🤝 Contributing

Pull requests and issues are welcome! Please open an issue if you find a bug or have a feature request.

---

## 📚 Resources

- [Miden Docs](https://miden.org/docs/)
- [Miden Wallet Adapter](https://github.com/demox-labs/miden-wallet-adapter)
- [Trident Wallet](https://trident.miden.org/)

---

## License

MIT
