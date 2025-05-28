
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MetricsGrid } from "@/components/statistics/MetricsGrid";
import { RevenueChart } from "@/components/statistics/RevenueChart";
import { UserGrowthChart } from "@/components/statistics/UserGrowthChart";
import { ConversionFunnelChart } from "@/components/statistics/ConversionFunnelChart";
import { TrafficSourcesChart } from "@/components/statistics/TrafficSourcesChart";
import { RecentActivityTable } from "@/components/statistics/RecentActivityTable";

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
                Statistics Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Comprehensive analytics and insights</p>
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
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <RevenueChart />
              <UserGrowthChart />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ConversionFunnelChart />
              <TrafficSourcesChart />
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <RevenueChart />
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                  <CardDescription>Monthly revenue analysis by product category</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Detailed revenue analytics coming soon...</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <UserGrowthChart />
              <RecentActivityTable />
            </div>
          </TabsContent>

          <TabsContent value="traffic" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TrafficSourcesChart />
              <Card>
                <CardHeader>
                  <CardTitle>Page Views</CardTitle>
                  <CardDescription>Most visited pages this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Page analytics coming soon...</p>
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
