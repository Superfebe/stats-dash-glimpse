
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Link,
  Calendar,
  Clock,
  Target,
  Globe
} from "lucide-react";

const MetricsGrid = () => {
  const metrics = [
    {
      title: "Total Chats Today",
      value: "1,247",
      change: "+12.5%",
      changeType: "positive",
      icon: MessageCircle,
      color: "blue"
    },
    {
      title: "User Interactions",
      value: "3,892",
      change: "+18.3%",
      changeType: "positive",
      icon: Users,
      color: "green"
    },
    {
      title: "Response Rate",
      value: "94.2%",
      change: "+2.1%",
      changeType: "positive",
      icon: Target,
      color: "purple"
    },
    {
      title: "Avg Response Time",
      value: "1.2s",
      change: "-0.3s",
      changeType: "positive",
      icon: Clock,
      color: "orange"
    },
    {
      title: "Weekly Chats",
      value: "8,734",
      change: "+15.3%",
      changeType: "positive",
      icon: Calendar,
      color: "indigo"
    },
    {
      title: "Monthly Chats",
      value: "34,521",
      change: "+23.7%",
      changeType: "positive",
      icon: TrendingUp,
      color: "pink"
    },
    {
      title: "Links Shared",
      value: "2,891",
      change: "+8.9%",
      changeType: "positive",
      icon: Link,
      color: "cyan"
    },
    {
      title: "Languages Detected",
      value: "12",
      change: "+2",
      changeType: "positive",
      icon: Globe,
      color: "red"
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
