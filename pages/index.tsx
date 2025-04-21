
import { tools } from '../data/tools';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">AI 工具导航</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map(tool => (
          <div key={tool.id} className="border rounded-xl p-4 shadow hover:shadow-md transition">
            <img src={tool.image} alt={tool.name} className="w-20 h-20 object-contain" />
            <h2 className="text-xl font-semibold mt-2">{tool.name}</h2>
            <p className="text-gray-600">{tool.description}</p>
            <Link href={`/tool/${tool.id}`} className="text-blue-600 mt-2 inline-block">查看详情</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
