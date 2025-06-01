
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, Trash2, File, FileSpreadsheet, FileImage, FileVideo } from "lucide-react";

export const FileUploader = () => {
  const [files] = useState([
    {
      name: "Product Manual.pdf",
      size: "2.4 MB",
      type: "pdf",
      status: "processed",
      chars: 15420,
      uploadedAt: "2 days ago"
    },
    {
      name: "FAQ Document.docx", 
      size: "856 KB",
      type: "docx",
      status: "processed",
      chars: 8950,
      uploadedAt: "1 week ago"
    },
    {
      name: "Training Data.csv",
      size: "1.2 MB", 
      type: "csv",
      status: "processing",
      chars: 0,
      uploadedAt: "5 minutes ago"
    }
  ]);

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
      case 'docx':
        return FileText;
      case 'csv':
      case 'xlsx':
        return FileSpreadsheet;
      case 'jpg':
      case 'png':
        return FileImage;
      case 'mp4':
        return FileVideo;
      default:
        return File;
    }
  };

  const supportedFormats = [
    { type: "Documents", formats: ["PDF", "DOC", "DOCX", "TXT", "RTF"] },
    { type: "Spreadsheets", formats: ["CSV", "XLS", "XLSX"] },
    { type: "Presentations", formats: ["PPT", "PPTX"] },
    { type: "Images", formats: ["JPG", "PNG", "GIF"] },
    { type: "Other", formats: ["JSON", "XML", "MD"] }
  ];

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Files & Documents</CardTitle>
          <CardDescription>
            Upload documents, spreadsheets, and other files to expand your chatbot's knowledge
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">Drop files here or click to upload</h3>
            <p className="text-gray-500 mb-4">
              Maximum file size: 10MB per file
            </p>
            <Button>
              Choose Files
            </Button>
          </div>
          
          {/* Processing File Example */}
          <div className="mt-4 p-4 border rounded-lg bg-blue-50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Training Data.csv</span>
                <Badge variant="secondary">Processing</Badge>
              </div>
              <span className="text-sm text-gray-500">1.2 MB</span>
            </div>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">Extracting content... 65% complete</p>
          </div>
        </CardContent>
      </Card>

      {/* Supported Formats */}
      <Card>
        <CardHeader>
          <CardTitle>Supported File Formats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportedFormats.map((category) => (
              <div key={category.type} className="space-y-2">
                <h4 className="font-medium text-gray-700">{category.type}</h4>
                <div className="flex flex-wrap gap-1">
                  {category.formats.map((format) => (
                    <Badge key={format} variant="outline" className="text-xs">
                      {format}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      <Card>
        <CardHeader>
          <CardTitle>Uploaded Files</CardTitle>
          <CardDescription>
            Manage your uploaded documents and files
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {files.map((file, index) => {
              const FileIcon = getFileIcon(file.type);
              return (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileIcon className="h-8 w-8 text-gray-500" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        {file.size} • {file.chars > 0 ? `${file.chars.toLocaleString()} characters extracted` : 'Processing...'} • {file.uploadedAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={file.status === 'processed' ? 'default' : 'secondary'}>
                      {file.status === 'processed' ? 'Ready' : 'Processing'}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
