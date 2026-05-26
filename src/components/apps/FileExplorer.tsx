import { Folder, FileText, Image, Music, Download, Home, Star, Clock, Search } from 'lucide-react';

const FileExplorer = () => {
  const folders = [
    { name: '文档', icon: <FileText className="w-5 h-5" />, color: 'text-blue-500' },
    { name: '图片', icon: <Image className="w-5 h-5" />, color: 'text-purple-500' },
    { name: '音乐', icon: <Music className="w-5 h-5" />, color: 'text-green-500' },
    { name: '下载', icon: <Download className="w-5 h-5" />, color: 'text-orange-500' },
  ];

  const files = [
    { name: '项目报告.docx', size: '2.3 MB', date: '2024-01-15' },
    { name: '会议记录.txt', size: '45 KB', date: '2024-01-14' },
    { name: '数据.xlsx', size: '1.2 MB', date: '2024-01-13' },
    { name: '照片.zip', size: '15.6 MB', date: '2024-01-12' },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="h-10 bg-gray-50 border-b flex items-center px-3 space-x-2">
        <button className="p-1 hover:bg-gray-200 rounded">←</button>
        <button className="p-1 hover:bg-gray-200 rounded">→</button>
        <div className="flex-1 flex items-center bg-white border rounded px-3 py-1">
          <Home className="w-3 h-3 text-gray-400 mr-2" />
          <span className="text-xs">此电脑</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-48 bg-gray-50 border-r p-2 space-y-1">
          <button className="w-full flex items-center space-x-2 px-3 py-2 bg-blue-50 text-blue-600 rounded text-xs">
            <Home className="w-4 h-4" />
            <span>快速访问</span>
          </button>
          <button className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded text-xs">
            <Star className="w-4 h-4" />
            <span>收藏夹</span>
          </button>
          <button className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded text-xs">
            <Clock className="w-4 h-4" />
            <span>最近</span>
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <h3 className="text-sm font-medium text-gray-700 mb-3">文件夹</h3>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {folders.map((folder, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <Folder className={`w-10 h-10 ${folder.color} mb-1`} />
                <span className="text-xs">{folder.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-medium text-gray-700 mb-3">最近文件</h3>
          <div className="space-y-1">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm">{file.name}</div>
                    <div className="text-xs text-gray-500">{file.date}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{file.size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
