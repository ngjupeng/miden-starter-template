"use client";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to the Miden Starter Template
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-center">
          This template helps you quickly build dApps on <b>Miden</b> with
          wallet integration, asset management, and ready-to-use hooks.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-800">
          <li>
            <b>Connect your wallet:</b> Use the wallet button in the top right
            to connect your Miden-compatible wallet (e.g., Trident Wallet).
          </li>
          <li>
            <b>Access account data:</b> Use the provided React hooks in{" "}
            <code>app/hooks/</code> to fetch assets, transfer tokens, mint, and
            more. Example:
            <pre className="bg-gray-100 rounded p-2 mt-2 text-sm overflow-x-auto">
              {`import { useAccountAssets } from "@/app/hooks/useAccountAssets";
const { data, loading, error, accountId } = useAccountAssets();`}
            </pre>
          </li>
          <li>
            <b>Customize your app:</b> Explore <code>app/components/</code> and{" "}
            <code>app/hooks/</code> to add new features or UI. The template is
            fully extensible.
          </li>
          <li>
            <b>Ready for production:</b> Environment variables (like the node
            endpoint) can be set in <code>.env</code> or{" "}
            <code>app/utils/constant.ts</code>.
          </li>
        </ol>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Need help? Check the README or reach out to the Miden community.
          </p>
        </div>
      </div>
    </main>
  );
}
