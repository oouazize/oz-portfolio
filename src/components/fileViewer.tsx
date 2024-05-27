
const FileViewer = ({ fileUrl, onClose }: any) => {
  const extension = fileUrl?.split(".").pop()?.toLowerCase();

  const content = (() => {
    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return (
          <img
            src={fileUrl}
            alt="Preview content"
          />
        );
      case "pdf":
      case "txt":
      case "doc":
      case "docx":
      case "xls":
      case "xlsx":
      case "ppt":
      case "pptx":
        return (
            <embed src={fileUrl} type="application/pdf" className="w-full h-full" />
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center space-y-4 bg-white h-[50%] md:w-[50%] w-[90%]">
            <p className="text-lg text-center text-gray-900">File type not supported for preview.</p>
            <button
              onClick={() => window.location.href = fileUrl}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Download File
            </button>
          </div>
        );
    }
  })();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg w-full max-w-5xl h-4/5 p-4">
        <div className="flex items-center justify-center relative w-full h-full overflow-auto">
          {content}
        </div>
        <button
          className="absolute bottom-2 right-2 bg-yellowColor hover:bg-amber-500 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
          aria-label="Close"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FileViewer;

