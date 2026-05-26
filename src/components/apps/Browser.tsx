import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Home, Plus, ExternalLink } from 'lucide-react';

const Browser = () => {
  const [url, setUrl] = useState('https://www.bing.com');
  const [inputUrl, setInputUrl] = useState('https://www.bing.com');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    
    let finalUrl = inputUrl;
    
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
      if (finalUrl.includes('.') && !finalUrl.includes(' ')) {
        finalUrl = 'https://' + finalUrl;
      } else {
        finalUrl = `https://www.bing.com/search?q=${encodeURIComponent(finalUrl)}`;
      }
    }
    
    setUrl(finalUrl);
    setInputUrl(finalUrl);
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleOpenInNewTab = () => {
    window.open(url, '_blank');
  };

  const handleHome = () => {
    setUrl('https://www.bing.com');
    setInputUrl('https://www.bing.com');
    setError(false);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="h-10 bg-gray-100 flex items-center px-2 space-x-1 border-b">
        <button 
          className="p-1.5 hover:bg-gray-200 rounded disabled:opacity-50"
          title="后退"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button 
          className="p-1.5 hover:bg-gray-200 rounded disabled:opacity-50"
          title="前进"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
        <button 
          onClick={() => window.location.reload()}
          className="p-1.5 hover:bg-gray-200 rounded"
          title="刷新"
        >
          <RotateCw className="w-4 h-4" />
        </button>
        <button 
          onClick={handleHome}
          className="p-1.5 hover:bg-gray-200 rounded"
          title="主页"
        >
          <Home className="w-4 h-4" />
        </button>

        <form onSubmit={handleSubmit} className="flex-1 flex">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="flex-1 bg-white border rounded px-3 py-1 text-xs outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="搜索或输入网址"
          />
        </form>

        <button 
          onClick={handleOpenInNewTab}
          className="p-1.5 hover:bg-gray-200 rounded"
          title="在新标签页打开"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 bg-gray-200 relative">
        {loading && (
          <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <div className="text-sm text-gray-500">加载中...</div>
            </div>
          </div>
        )}
        
        {error ? (
          <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-100">
            <div className="text-6xl mb-4">🌐</div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">无法加载此页面</h2>
            <p className="text-gray-600 text-center mb-4">
              此网站不允许被嵌入到iframe中
            </p>
            <button 
              onClick={handleOpenInNewTab}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>在新标签页打开</span>
            </button>
            <div className="mt-4 text-sm text-gray-500 text-center">
              <p>推荐尝试在新标签页打开以下网站：</p>
              <div className="mt-2 space-x-2">
                <button 
                  onClick={() => {
                    setInputUrl('https://www.bing.com');
                    setUrl('https://www.bing.com');
                    setError(false);
                  }}
                  className="px-3 py-1 bg-white rounded border hover:bg-gray-50 text-sm"
                >
                  Bing
                </button>
                <button 
                  onClick={() => {
                    setInputUrl('https://duckduckgo.com');
                    setUrl('https://duckduckgo.com');
                    setError(false);
                  }}
                  className="px-3 py-1 bg-white rounded border hover:bg-gray-50 text-sm"
                >
                  DuckDuckGo
                </button>
                <button 
                  onClick={() => {
                    setInputUrl('https://www.wikipedia.org');
                    setUrl('https://www.wikipedia.org');
                    setError(false);
                  }}
                  className="px-3 py-1 bg-white rounded border hover:bg-gray-50 text-sm"
                >
                  Wikipedia
                </button>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={url}
            className="w-full h-full border-0"
            title="Web Browser"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
            allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment"
            onError={() => setError(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Browser;
