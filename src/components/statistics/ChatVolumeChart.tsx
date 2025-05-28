
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ChatVolumeChart = () => {
  const data = [
    { period: 'Jan', daily: 45, weekly: 315, monthly: 1350, yearly: 16200 },
    { period: 'Feb', daily: 52, weekly: 364, monthly: 1560, yearly: 18720 },
    { period: 'Mar', daily: 48, weekly: 336, monthly: 1440, yearly: 17280 },
    { period: 'Apr', daily: 61, weekly: 427, monthly: 1830, yearly: 21960 },
    { period: 'May', daily: 55, weekly: 385, monthly: 1650, yearly: 19800 },
    { period: 'Jun', daily: 67, weekly: 469, monthly: 2010, yearly: 24120 },
    { period: 'Jul', daily: 58, weekly: 406, monthly: 1740, yearly: 20880 },
    { period: 'Aug', daily: 72, weekly: 504, monthly: 2160, yearly: 25920 },
    { period: 'Sep', daily: 65, weekly: 455, monthly: 1950, yearly: 23400 },
    { period: 'Oct', daily: 78, weekly: 546, monthly: 2340, yearly: 28080 },
    { period: 'Nov', daily: 83, weekly: 581, monthly: 2490, yearly: 29880 },
    { period: 'Dec', daily: 89, weekly: 623, monthly: 2670, yearly: 32040 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat Volume Trends</CardTitle>
        <CardDescription>Daily, weekly, monthly, and yearly chat volumes</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="daily" 
              stroke="#3b82f6" 
              strokeWidth={2}
              name="Daily Average"
            />
            <Line 
              type="monotone" 
              dataKey="weekly" 
              stroke="#10b981" 
              strokeWidth={2}
              name="Weekly Total"
            />
            <Line 
              type="monotone" 
              dataKey="monthly" 
              stroke="#8b5cf6" 
              strokeWidth={2}
              name="Monthly Total"
            />
            <Line 
              type="monotone" 
              dataKey="yearly" 
              stroke="#f59e0b" 
              strokeWidth={2}
              name="Yearly Projection"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { ChatVolumeChart };
