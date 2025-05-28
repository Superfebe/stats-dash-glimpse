
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LanguagePopularityChart = () => {
  const data = [
    { language: 'English', chats: 12847, percentage: 45.2 },
    { language: 'Spanish', chats: 7891, percentage: 27.8 },
    { language: 'French', chats: 3456, percentage: 12.2 },
    { language: 'German', chats: 2134, percentage: 7.5 },
    { language: 'Italian', chats: 1234, percentage: 4.3 },
    { language: 'Portuguese', chats: 856, percentage: 3.0 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Language Popularity</CardTitle>
        <CardDescription>Most popular languages used in chatbot conversations</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="language" type="category" width={80} />
            <Tooltip 
              formatter={(value, name) => [
                name === 'chats' ? `${value} chats` : `${value}%`, 
                name === 'chats' ? 'Total Chats' : 'Percentage'
              ]}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="chats" fill="#3b82f6" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { LanguagePopularityChart };
