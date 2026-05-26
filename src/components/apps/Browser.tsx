import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Home, ExternalLink } from 'lucide-react';

const Browser = () => {
  const [url, setUrl] = useState('https://www.bing.com');
  const [inputUrl, setInputUrl] = useState('https://www.bing.com');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    
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
  };

  const handleOpenInNewTab = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="h-10 bg-gray-100 flex items-center px-2 space-x-1 border-b">
        <button className="p-1 hover:bg-gray-200 rounded">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <ArrowRight className="w-4 h-4" />
        </button>
        <button 
          onClick={() => window.location.reload()}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <RotateCw className="w-4 h-4" />
        </button>
        <button 
          onClick={() => {
            setUrl('https://www.bing.com');
            setInputUrl('https://www.bing.com');
          }}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <Home className="w-4 h-4" />
        </button>

        <form onSubmit={handleSubmit} className="flex-1 flex">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="flex-1 bg-white border rounded px-2 py-1 text-xs outline-none"
          />
        </form>

        <button 
          onClick={handleOpenInNewTab}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 bg-gray-200">
        {error ? (
          <div className="h-full flex flex-col items-center justify-center p-4 bg-gray-100">
            <div className="text-4xl mb-2">🌐</div>
            <h2 className="text-base font-bold mb-2">无法加载此页面</h2>
            <button 
              onClick={handleOpenInNewTab}
              className="px-4 py-2 bg-blue-500 text-white rounded text-sm"
            >
              在新标签页打开
            </button>
            <div className="mt-3 text-xs text-gray-500">
              <p className="mb-2">推荐网站：</p>
              <div className="space-x-2">
                <button 
                  onClick={() => {
                    setInputUrl('https://www.bing.com');
                    setUrl('https://www.bing.com');
                    setError(false);
                  }}
                  className="px-2 py-1 bg-white rounded border text-xs"
                >
                  Bing
                </button>
                <button 
                  onClick={() => {
                    setInputUrl('https://duckduckgo.com');
                    setUrl('https://duckduckgo.com');
                    setError(false);
                  }}
                  className="px-2 py-1 bg-white rounded border text-xs"
                >
                  DuckDuckGo
                </button>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={url}
            className="w-full h-full border-0"
            title="Browser"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onError={() => setError(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Browser;
