
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MetricsGrid } from "@/components/statistics/MetricsGrid";
import { ChatVolumeChart } from "@/components/statistics/ChatVolumeChart";
import { LanguagePopularityChart } from "@/components/statistics/LanguagePopularityChart";
import { MostLinkedPagesTable } from "@/components/statistics/MostLinkedPagesTable";

const Statistics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Chatbot Analytics
              </h1>
              <p className="text-gray-600 mt-1">Monitor your chatbot performance and user interactions</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <MetricsGrid />

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="volume">Chat Volume</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="pages">Linked Pages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <ChatVolumeChart />
              <LanguagePopularityChart />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <MostLinkedPagesTable />
            </div>
          </TabsContent>

          <TabsContent value="volume" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <ChatVolumeChart />
              <Card>
                <CardHeader>
                  <CardTitle>Volume Insights</CardTitle>
                  <CardDescription>Detailed analysis of chat patterns and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">2.3x</p>
                      <p className="text-sm text-gray-600">Peak hour multiplier</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">14:00</p>
                      <p className="text-sm text-gray-600">Peak chat time</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">Monday</p>
                      <p className="text-sm text-gray-600">Busiest day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="languages" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <LanguagePopularityChart />
            </div>
          </TabsContent>

          <TabsContent value="pages" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <MostLinkedPagesTable />
              <Card>
                <CardHeader>
                  <CardTitle>Link Performance</CardTitle>
                  <CardDescription>How users interact with shared links</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">73.2%</p>
                      <p className="text-sm text-gray-600">Click-through rate</p>
                    </div>
                    <div className="text-center p-4 bg-indigo-50 rounded-lg">
                      <p className="text-2xl font-bold text-indigo-600">4.7</p>
                      <p className="text-sm text-gray-600">Avg links per chat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Statistics;
