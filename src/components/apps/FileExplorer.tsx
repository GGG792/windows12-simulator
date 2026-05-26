import { Folder, File, Home, ChevronRight, Search, Star, Clock, Image, Music, FileText } from 'lucide-react';

const FileExplorer = () => {
  const folders = [
    { name: '文档', icon: <FileText className="w-4 h-4" /> },
    { name: '图片', icon: <Image className="w-4 h-4" /> },
    { name: '音乐', icon: <Music className="w-4 h-4" /> },
    { name: '下载', icon: <File className="w-4 h-4" /> },
    { name: '桌面', icon: <Home className="w-4 h-4" /> },
  ];

  const recentFiles = [
    { name: '工作报告.docx', icon: <FileText className="w-4 h-4" /> },
    { name: '照片集.zip', icon: <Image className="w-4 h-4" /> },
    { name: '项目计划.xlsx', icon: <File className="w-4 h-4" /> },
    { name: '会议记录.txt', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="h-10 bg-gray-50 border-b flex items-center px-4 space-x-2">
        <button className="p-1 hover:bg-gray-200 rounded">←</button>
        <button className="p-1 hover:bg-gray-200 rounded">→</button>
        <div className="flex-1 flex items-center bg-white border rounded px-3 py-1">
          <Home className="w-3 h-3 text-gray-500 mr-2" />
          <span className="text-sm text-gray-700">此电脑</span>
        </div>
        <div className="flex items-center bg-white border rounded px-3 py-1">
          <Search className="w-3 h-3 text-gray-500" />
        </div>
      </div>

      <div className="flex-1 flex">
        <div className="w-48 bg-gray-50 border-r p-2">
          <div className="space-y-1">
            <button className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-blue-50 text-blue-600 rounded text-sm">
              <Home className="w-4 h-4" />
              <span>快速访问</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded text-sm">
              <Star className="w-4 h-4" />
              <span>收藏夹</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded text-sm">
              <Clock className="w-4 h-4" />
              <span>最近使用</span>
            </button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-4">文件夹</h3>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {folders.map((folder, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg cursor-pointer"
              >
                <Folder className="w-12 h-12 text-yellow-500 mb-2" />
                <span className="text-xs text-center">{folder.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-medium text-gray-700 mb-4">最近的文件</h3>
          <div className="grid grid-cols-4 gap-4">
            {recentFiles.map((file, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-2 text-blue-500">
                  {file.icon}
                </div>
                <span className="text-xs text-center">{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
