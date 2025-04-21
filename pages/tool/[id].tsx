
import { tools } from '../../data/tools';
import { useRouter } from 'next/router';

export default function ToolDetail() {
  const router = useRouter();
  const { id } = router.query;
  const tool = tools.find(t => t.id === id);

  if (!tool) return <p>加载中...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{tool.name}</h1>
      <img src={tool.image} alt={tool.name} className="w-32 h-32 mt-2" />
      <p className="mt-4 text-gray-700">{tool.description}</p>
      <a href={tool.link} target="_blank" className="mt-4 inline-block text-blue-500 underline">前往官网</a>
    </div>
  );
}
