import { Folder, FileText, Image, Music, Download } from 'lucide-react';

const FileExplorer = () => {
  const folders = [
    { name: '文档', icon: <FileText className="w-5 h-5" /> },
    { name: '图片', icon: <Image className="w-5 h-5" /> },
    { name: '音乐', icon: <Music className="w-5 h-5" /> },
    { name: '下载', icon: <Download className="w-5 h-5" /> },
  ];

  const files = [
    { name: '项目报告.docx', size: '2.3 MB' },
    { name: '会议记录.txt', size: '45 KB' },
    { name: '数据.xlsx', size: '1.2 MB' },
    { name: '照片.zip', size: '15.6 MB' },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="h-10 bg-gray-50 border-b px-3 flex items-center">
        <span className="text-sm">📁 此电脑</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-xs font-medium text-gray-500 mb-2">文件夹</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {folders.map((folder, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <Folder className="w-8 h-8 text-yellow-500 mb-1" />
              <span className="text-xs">{folder.name}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-medium text-gray-500 mb-2">最近文件</h3>
        <div className="space-y-1">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <span className="text-xs">{file.name}</span>
              </div>
              <span className="text-xs text-gray-400">{file.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
