"use client";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 ">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to the Miden Starter Template
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-center">
          This template helps you quickly build dApps on <b>Miden</b> with hooks
          and utilities
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-800">
          <li>
            <b>Customize your app:</b> Explore <code>app/components/</code>,{" "}
            <code>app/utils/</code> and <code>app/hooks/</code> to add new
            features or UI.
          </li>
        </ol>
      </div>
    </main>
  );
}
