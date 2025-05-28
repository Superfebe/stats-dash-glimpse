
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const UserGrowthChart = () => {
  const data = [
    { month: 'Jan', users: 8500, newUsers: 1200 },
    { month: 'Feb', users: 9100, newUsers: 1350 },
    { month: 'Mar', users: 9800, newUsers: 1100 },
    { month: 'Apr', users: 10500, newUsers: 1400 },
    { month: 'May', users: 11200, newUsers: 1250 },
    { month: 'Jun', users: 11900, newUsers: 1500 },
    { month: 'Jul', users: 12400, newUsers: 1300 },
    { month: 'Aug', users: 12800, newUsers: 1200 },
    { month: 'Sep', users: 13500, newUsers: 1600 },
    { month: 'Oct', users: 14100, newUsers: 1400 },
    { month: 'Nov', users: 14800, newUsers: 1550 },
    { month: 'Dec', users: 15400, newUsers: 1700 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>Total users and new user acquisition over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorNewUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              className="text-sm"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              className="text-sm"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip 
              formatter={(value, name) => [
                value.toLocaleString(), 
                name === 'users' ? 'Total Users' : 'New Users'
              ]}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="users"
              stackId="1"
              stroke="#8b5cf6"
              fillOpacity={1}
              fill="url(#colorUsers)"
            />
            <Area
              type="monotone"
              dataKey="newUsers"
              stackId="2"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorNewUsers)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { UserGrowthChart };
