import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Home, Plus } from 'lucide-react';

const Browser = () => {
  const [url, setUrl] = useState('https://www.google.com');
  const [inputUrl, setInputUrl] = useState('https://www.google.com');
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanForward] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let finalUrl = inputUrl;
    
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
      if (finalUrl.includes('.') && !finalUrl.includes(' ')) {
        finalUrl = 'https://' + finalUrl;
      } else {
        finalUrl = `https://www.google.com/search?q=${encodeURIComponent(finalUrl)}`;
      }
    }
    
    setUrl(finalUrl);
    setCanGoBack(true);
  };

  const handleBack = () => {
    if (canGoBack) {
      window.history.back();
    }
  };

  const handleForward = () => {
    if (canGoForward) {
      window.history.forward();
    }
  };

  const handleRefresh = () => {
    setUrl('about:blank');
    setTimeout(() => setUrl('https://www.google.com'), 100);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="h-10 bg-gray-100 flex items-center px-2 space-x-1 border-b">
        <button 
          onClick={handleBack}
          className="p-1.5 hover:bg-gray-200 rounded disabled:opacity-50"
          disabled={!canGoBack}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button 
          onClick={handleForward}
          className="p-1.5 hover:bg-gray-200 rounded disabled:opacity-50"
          disabled={!canGoForward}
        >
          <ArrowRight className="w-4 h-4" />
        </button>
        <button onClick={handleRefresh} className="p-1.5 hover:bg-gray-200 rounded">
          <RotateCw className="w-4 h-4" />
        </button>
        <button 
          onClick={() => setUrl('https://www.google.com')}
          className="p-1.5 hover:bg-gray-200 rounded"
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
      </div>

      <div className="flex-1 bg-gray-200">
        <iframe
          src={url}
          className="w-full h-full border-0"
          title="Web Browser"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment"
        />
      </div>
    </div>
  );
};

export default Browser;
