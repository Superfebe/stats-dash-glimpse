
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WebsiteExtractor } from "@/components/data/WebsiteExtractor";
import { FileUploader } from "@/components/data/FileUploader";
import { ProductCatalog } from "@/components/data/ProductCatalog";

const DataManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Data Management
            </h1>
            <p className="text-lg text-gray-600">
              Manage your chatbot's knowledge base and training data
            </p>
          </div>
        </div>

        {/* Main Content */}
        <Card className="max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6" />
              Knowledge Pool Management
            </CardTitle>
            <CardDescription>
              Add and manage different types of content to train your chatbot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="websites" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="websites">Website Content</TabsTrigger>
                <TabsTrigger value="files">Files & Documents</TabsTrigger>
                <TabsTrigger value="products">Product Catalog</TabsTrigger>
              </TabsList>
              
              <TabsContent value="websites" className="mt-6">
                <WebsiteExtractor />
              </TabsContent>
              
              <TabsContent value="files" className="mt-6">
                <FileUploader />
              </TabsContent>
              
              <TabsContent value="products" className="mt-6">
                <ProductCatalog />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataManagement;
