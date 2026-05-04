import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariner Design System - Web Storybook</title>
        <meta name="description" content="Mariner Design System Web Storybook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold mb-2">Mariner Design System</h1>
            <p className="text-xl text-gray-600">Web Storybook</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">📦 Available Packages</h2>
            <ul className="space-y-2">
              <li className="text-gray-700">• <strong>@mariner/theme</strong> - Design tokens, utilities &amp; Tailwind configs</li>
              <li className="text-gray-700">• <strong>@mariner/components</strong> - React components (Atomic Design)</li>
              <li className="text-gray-700">• <strong>@mariner/assets</strong> - Fonts, icons &amp; images</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">🎨 Storybook</h2>
            <p className="text-gray-700 mb-4">
              Run <code className="bg-gray-100 px-2 py-1 rounded">yarn storybook:web</code> to start the Storybook server.
            </p>
            <p className="text-gray-700">
              Configure Storybook in the <code className="bg-gray-100 px-2 py-1 rounded">.storybook/</code> directory
              and add your component stories.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
