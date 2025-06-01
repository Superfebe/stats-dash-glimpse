
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ShoppingCart, Plus, Edit, Trash2, Upload, Download } from "lucide-react";

export const ProductCatalog = () => {
  const [products] = useState([
    {
      id: "1",
      name: "Running Shoes Pro",
      category: "Footwear",
      price: "$129.99",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Black", "White", "Navy"],
      stock: 45,
      description: "High-performance running shoes with advanced cushioning"
    },
    {
      id: "2", 
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$89.99",
      sizes: ["One Size"],
      colors: ["Black", "Silver", "Rose Gold"],
      stock: 23,
      description: "Premium wireless headphones with noise cancellation"
    },
    {
      id: "3",
      name: "Cotton T-Shirt",
      category: "Clothing",
      price: "$24.99", 
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Gray", "Navy"],
      stock: 67,
      description: "100% organic cotton t-shirt, comfortable and breathable"
    }
  ]);

  const categories = ["Footwear", "Electronics", "Clothing", "Accessories", "Sports"];

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-blue-600">{products.length}</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-sm text-gray-600">Categories</p>
              <p className="text-2xl font-bold text-green-600">{categories.length}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-sm text-gray-600">Total Stock</p>
              <p className="text-2xl font-bold text-purple-600">{products.reduce((sum, p) => sum + p.stock, 0)}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-sm text-gray-600">Avg. Price</p>
              <p className="text-2xl font-bold text-orange-600">$81.66</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Import/Export Section */}
      <Card>
        <CardHeader>
          <CardTitle>Product Catalog Management</CardTitle>
          <CardDescription>
            Import your product catalog or add products manually for customer inquiries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="flex-1">
              <Upload className="h-4 w-4 mr-2" />
              Import from CSV/Excel
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Export Template
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex-1">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product Manually
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                  <DialogDescription>
                    Enter product details to add to your catalog
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product-name">Product Name</Label>
                    <Input id="product-name" placeholder="Enter product name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-price">Price</Label>
                    <Input id="product-price" placeholder="$0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-stock">Stock Quantity</Label>
                    <Input id="product-stock" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-sizes">Available Sizes</Label>
                    <Input id="product-sizes" placeholder="S, M, L, XL" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-colors">Available Colors</Label>
                    <Input id="product-colors" placeholder="Red, Blue, Green" />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="product-description">Description</Label>
                    <Textarea id="product-description" placeholder="Enter product description" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Add Product</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Product List */}
      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
          <CardDescription>
            Your chatbot can answer questions about these products including availability, sizes, colors, and specifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Sizes</TableHead>
                <TableHead>Colors</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{product.price}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.slice(0, 3).map((size) => (
                        <Badge key={size} variant="secondary" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                      {product.sizes.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.sizes.length - 3}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {product.colors.slice(0, 2).map((color) => (
                        <Badge key={color} variant="secondary" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                      {product.colors.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.colors.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={product.stock > 20 ? "default" : product.stock > 0 ? "secondary" : "destructive"}>
                      {product.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* AI Training Tips */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">💡 AI Training Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Include detailed product descriptions for better AI responses</li>
            <li>• Add size charts and measurement guides for clothing and footwear</li>
            <li>• Include care instructions, materials, and specifications</li>
            <li>• Regular catalog updates improve chatbot accuracy</li>
            <li>• Use consistent naming conventions across products</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
