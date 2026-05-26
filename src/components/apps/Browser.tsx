import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Search, Plus } from 'lucide-react';

const Browser = () => {
  const [url, setUrl] = useState('https://www.bing.com');
  const [inputUrl, setInputUrl] = useState(url);

  const handleGo = (e: React.FormEvent) => {
    e.preventDefault();
    setUrl(inputUrl);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-12 bg-gray-100 border-b flex items-center px-3 space-x-2">
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <ArrowRight className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <RotateCw className="w-4 h-4 text-gray-600" />
        </button>

        <form onSubmit={handleGo} className="flex-1 flex items-center">
          <div className="flex-1 flex items-center bg-white border rounded-full px-4 py-1.5">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
              placeholder="搜索或输入网址"
            />
          </div>
        </form>

        <button className="p-2 hover:bg-gray-200 rounded-full">
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 bg-white">
        <div className="h-full flex flex-col items-center justify-center p-8">
          <div className="text-6xl font-bold text-gray-800 mb-8">
            <span className="text-blue-600">B</span>
            <span className="text-red-500">i</span>
            <span className="text-yellow-500">n</span>
            <span className="text-blue-600">g</span>
          </div>

          <div className="w-full max-w-2xl">
            <form onSubmit={handleGo} className="flex items-center bg-white border rounded-full px-6 py-3 shadow-lg">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                placeholder="搜索 Web"
              />
            </form>
          </div>

          <div className="mt-8 grid grid-cols-4 gap-4">
            {[
              { name: 'YouTube', color: 'bg-red-500' },
              { name: 'GitHub', color: 'bg-gray-800' },
              { name: 'Twitter', color: 'bg-blue-400' },
              { name: 'LinkedIn', color: 'bg-blue-700' },
            ].map((site, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <div className={`w-12 h-12 ${site.color} rounded-full flex items-center justify-center mb-2`}>
                  <span className="text-white text-lg font-bold">{site.name[0]}</span>
                </div>
                <span className="text-xs">{site.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
