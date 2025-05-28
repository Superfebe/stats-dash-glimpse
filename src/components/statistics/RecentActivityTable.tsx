
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const RecentActivityTable = () => {
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "Signed up",
      timestamp: "2 minutes ago",
      status: "success",
      avatar: "JD"
    },
    {
      id: 2,
      user: "Sarah Wilson",
      action: "Made a purchase",
      timestamp: "5 minutes ago",
      status: "success",
      avatar: "SW"
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "Updated profile",
      timestamp: "10 minutes ago",
      status: "info",
      avatar: "MJ"
    },
    {
      id: 4,
      user: "Emily Davis",
      action: "Cancelled subscription",
      timestamp: "15 minutes ago",
      status: "warning",
      avatar: "ED"
    },
    {
      id: 5,
      user: "Alex Smith",
      action: "Logged in",
      timestamp: "20 minutes ago",
      status: "info",
      avatar: "AS"
    },
    {
      id: 6,
      user: "Lisa Brown",
      action: "Downloaded report",
      timestamp: "25 minutes ago",
      status: "success",
      avatar: "LB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest user actions and events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                    {activity.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
                <p className="text-xs text-gray-500">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { RecentActivityTable };
