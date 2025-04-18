import Head from "next/head";
import toolsRaw from "../data/tool.json";

type ToolItem = {
  name: string;
  category: string;
  icon: string;
};

const categories = Array.from(new Set(toolsRaw.map(t => t.category)));

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Defense Wall</title>
      </Head>

      <header className="sticky top-0 bg-white z-50 shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold">🐶 AI Defense Wall</div>
        <nav className="space-x-4 text-sm">
          {categories.map(cat => (
            <a key={cat} href={"#" + cat} className="hover:text-blue-600">{cat}</a>
          ))}
        </nav>
      </header>

      <main className="p-4 max-w-5xl mx-auto space-y-8">
        {categories.map(cat => (
          <section key={cat} id={cat}>
            <h2 className="text-xl font-semibold my-4">{cat}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {toolsRaw.filter(t => t.category === cat).map(tool => (
                <div key={tool.name} className="p-4 bg-gray-50 rounded-xl shadow text-center">
                  <div className="text-3xl">{tool.icon}</div>
                  <div className="mt-2 text-sm font-medium">{tool.name}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="text-center text-xs text-gray-400 mt-10 p-6">
        © 2025 AI Defense Wall. All rights reserved. <br />
        联系我们：微信：17805429133
      </footer>
    </div>
  );
}