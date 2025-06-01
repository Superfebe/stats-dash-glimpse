
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Globe, Plus, Trash2, Download, CheckCircle } from "lucide-react";

export const WebsiteExtractor = () => {
  const [url, setUrl] = useState("");
  const [extractedPages, setExtractedPages] = useState([
    {
      url: "https://example.com",
      status: "extracted",
      chars: 6567,
      lastUpdated: "2 hours ago"
    },
    {
      url: "https://example.com/about",
      status: "extracted", 
      chars: 4321,
      lastUpdated: "2 hours ago"
    },
    {
      url: "https://example.com/contact",
      status: "extracting",
      chars: 0,
      lastUpdated: "Extracting..."
    }
  ]);

  const totalChars = extractedPages.reduce((sum, page) => sum + page.chars, 0);

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pages Extracted</p>
                <p className="text-2xl font-bold text-blue-600">{extractedPages.filter(p => p.status === 'extracted').length}</p>
              </div>
              <Globe className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Characters</p>
                <p className="text-2xl font-bold text-green-600">{totalChars.toLocaleString()}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Remaining Capacity</p>
                <p className="text-2xl font-bold text-purple-600">28,818</p>
              </div>
              <Download className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Website Section */}
      <Card>
        <CardHeader>
          <CardTitle>Extract Website Content</CardTitle>
          <CardDescription>
            Add website URLs to extract content for your chatbot's knowledge base
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="website-url">Website URL</Label>
              <Input
                id="website-url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Extract Content
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="search-full-page" />
            <Label htmlFor="search-full-page" className="text-sm">
              Search full page (extract all content including navigation and footer)
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Extracted Pages List */}
      <Card>
        <CardHeader>
          <CardTitle>Extracted Pages</CardTitle>
          <CardDescription>
            Manage your extracted website content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {extractedPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Checkbox />
                  <div>
                    <p className="font-medium">{page.url}</p>
                    <p className="text-sm text-gray-500">
                      {page.chars > 0 ? `${page.chars.toLocaleString()} characters` : ''} • {page.lastUpdated}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={page.status === 'extracted' ? 'default' : 'secondary'}>
                    {page.status === 'extracted' ? 'Ready' : 'Processing'}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <Button variant="outline">
              <Checkbox className="mr-2" />
              Select All
            </Button>
            <div className="flex gap-2">
              <Button variant="outline">Auto-Select</Button>
              <Button>Save Selected</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
