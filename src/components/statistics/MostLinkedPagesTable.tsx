
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, TrendingUp, TrendingDown } from "lucide-react";

const MostLinkedPagesTable = () => {
  const pages = [
    {
      url: "/products/premium-plan",
      title: "Premium Plan Features",
      clicks: 1247,
      change: 15.3,
      changeType: "positive"
    },
    {
      url: "/support/getting-started",
      title: "Getting Started Guide",
      clicks: 892,
      change: 8.7,
      changeType: "positive"
    },
    {
      url: "/pricing",
      title: "Pricing Plans",
      clicks: 756,
      change: -2.1,
      changeType: "negative"
    },
    {
      url: "/contact",
      title: "Contact Support",
      clicks: 634,
      change: 12.4,
      changeType: "positive"
    },
    {
      url: "/features/integration",
      title: "Integration Guide",
      clicks: 523,
      change: 23.8,
      changeType: "positive"
    },
    {
      url: "/blog/best-practices",
      title: "Chatbot Best Practices",
      clicks: 456,
      change: 5.6,
      changeType: "positive"
    },
    {
      url: "/demo",
      title: "Live Demo",
      clicks: 389,
      change: -5.2,
      changeType: "negative"
    },
    {
      url: "/api/documentation",
      title: "API Documentation",
      clicks: 312,
      change: 18.9,
      changeType: "positive"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Linked Pages</CardTitle>
        <CardDescription>Pages your chatbot links to most frequently</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="text-right">Clicks</TableHead>
              <TableHead className="text-right">Change</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="max-w-[200px] truncate" title={page.title}>
                    {page.title}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-gray-600">
                  <div className="flex items-center gap-1 max-w-[250px]">
                    <span className="truncate" title={page.url}>{page.url}</span>
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {page.clicks.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className={`flex items-center justify-end gap-1 ${
                    page.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {page.changeType === 'positive' ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span className="text-sm font-medium">
                      {page.changeType === 'positive' ? '+' : ''}{page.change}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-300"
                      style={{ width: `${(page.clicks / 1247) * 100}%` }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { MostLinkedPagesTable };
