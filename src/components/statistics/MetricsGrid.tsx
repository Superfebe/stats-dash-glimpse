
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Eye, 
  MousePointer,
  ShoppingCart,
  Target
} from "lucide-react";

const MetricsGrid = () => {
  const metrics = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      changeType: "positive",
      icon: Users,
      color: "blue"
    },
    {
      title: "Revenue",
      value: "$89,432",
      change: "+23.1%",
      changeType: "positive",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.4%",
      changeType: "positive",
      icon: Target,
      color: "purple"
    },
    {
      title: "Page Views",
      value: "234,567",
      change: "+8.2%",
      changeType: "positive",
      icon: Eye,
      color: "orange"
    },
    {
      title: "Click Rate",
      value: "12.8%",
      change: "-2.1%",
      changeType: "negative",
      icon: MousePointer,
      color: "red"
    },
    {
      title: "Orders",
      value: "1,247",
      change: "+15.3%",
      changeType: "positive",
      icon: ShoppingCart,
      color: "indigo"
    },
    {
      title: "Growth Rate",
      value: "23.5%",
      change: "+5.2%",
      changeType: "positive",
      icon: TrendingUp,
      color: "pink"
    },
    {
      title: "Active Sessions",
      value: "3,421",
      change: "+7.8%",
      changeType: "positive",
      icon: BarChart3,
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      green: "text-green-600 bg-green-50 border-green-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      red: "text-red-600 bg-red-50 border-red-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
      pink: "text-pink-600 bg-pink-50 border-pink-200",
      cyan: "text-cyan-600 bg-cyan-50 border-cyan-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${getColorClasses(metric.color)}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className={`text-sm font-medium ${
                  metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export { MetricsGrid };
