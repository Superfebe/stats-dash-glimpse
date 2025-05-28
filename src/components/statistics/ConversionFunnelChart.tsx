
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ConversionFunnelChart = () => {
  const data = [
    { stage: 'Visitors', count: 50000, percentage: 100 },
    { stage: 'Sign Ups', count: 15000, percentage: 30 },
    { stage: 'Active Users', count: 8500, percentage: 17 },
    { stage: 'Paid Users', count: 2125, percentage: 4.25 },
    { stage: 'Repeat Customers', count: 850, percentage: 1.7 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Funnel</CardTitle>
        <CardDescription>User journey from visitor to repeat customer</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              type="number"
              className="text-sm"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <YAxis 
              type="category"
              dataKey="stage"
              className="text-sm"
              tick={{ fontSize: 12 }}
              width={100}
            />
            <Tooltip 
              formatter={(value, name) => [
                `${value.toLocaleString()} users`, 
                'Count'
              ]}
              labelFormatter={(label) => `Stage: ${label}`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar 
              dataKey="count" 
              fill="#f59e0b"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { ConversionFunnelChart };
