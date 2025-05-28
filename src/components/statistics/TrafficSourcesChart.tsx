
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const TrafficSourcesChart = () => {
  const data = [
    { name: 'E-commerce Sites', value: 35, color: '#3b82f6' },
    { name: 'Corporate Websites', value: 28, color: '#10b981' },
    { name: 'SaaS Platforms', value: 20, color: '#8b5cf6' },
    { name: 'Educational Sites', value: 12, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#ef4444' }
  ];

  const COLORS = data.map(item => item.color);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Categories</CardTitle>
        <CardDescription>Types of websites using your chatbot</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { TrafficSourcesChart };
