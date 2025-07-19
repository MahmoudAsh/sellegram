import { Button } from '@/components/button'
import { Fieldset, Label, Legend } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { Checkbox } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { 
  ArrowLeftIcon,
  PhotoIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function NewProductPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/events" 
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Products
        </Link>
      </div>

      <div className="mb-8">
        <Heading>Create New Product</Heading>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Add a new product to your catalog with all the necessary details.
        </p>
      </div>

      <form className="space-y-8">
        {/* Basic Information */}
        <Fieldset>
          <Legend>Basic Information</Legend>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Enter product name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="sku">SKU</Label>
              <Input 
                id="sku" 
                name="sku" 
                type="text" 
                placeholder="e.g. PROD-001"
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select id="category" name="category" required>
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Garden</option>
                <option value="sports">Sports & Outdoors</option>
                <option value="health">Health & Beauty</option>
                <option value="toys">Toys & Games</option>
                <option value="other">Other</option>
              </Select>
            </div>
            
            <div className="sm:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                rows={4}
                placeholder="Describe your product..."
              />
            </div>
          </div>
        </Fieldset>

        <Divider />

        {/* Pricing */}
        <Fieldset>
          <Legend>Pricing</Legend>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <Label htmlFor="price">Price *</Label>
              <Input 
                id="price" 
                name="price" 
                type="number" 
                step="0.01"
                placeholder="0.00"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="comparePrice">Compare at Price</Label>
              <Input 
                id="comparePrice" 
                name="comparePrice" 
                type="number" 
                step="0.01"
                placeholder="0.00"
              />
              <p className="mt-1 text-xs text-gray-500">Original price for discount display</p>
            </div>
            
            <div>
              <Label htmlFor="costPrice">Cost per Item</Label>
              <Input 
                id="costPrice" 
                name="costPrice" 
                type="number" 
                step="0.01"
                placeholder="0.00"
              />
              <p className="mt-1 text-xs text-gray-500">Your cost for profit tracking</p>
            </div>
          </div>
        </Fieldset>

        <Divider />

        {/* Inventory */}
        <Fieldset>
          <Legend>Inventory</Legend>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="quantity">Quantity *</Label>
              <Input 
                id="quantity" 
                name="quantity" 
                type="number" 
                min="0"
                placeholder="0"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="lowStockThreshold">Low Stock Threshold</Label>
              <Input 
                id="lowStockThreshold" 
                name="lowStockThreshold" 
                type="number" 
                min="0"
                placeholder="5"
              />
              <p className="mt-1 text-xs text-gray-500">Get notified when stock is low</p>
            </div>
            
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2">
                <Checkbox id="trackQuantity" name="trackQuantity" defaultChecked />
                <Label htmlFor="trackQuantity">Track quantity</Label>
              </div>
              <p className="mt-1 text-xs text-gray-500">Automatically reduce inventory when orders are placed</p>
            </div>
          </div>
        </Fieldset>

        <Divider />

        {/* Images */}
        <Fieldset>
          <Legend>Product Images</Legend>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
              <PhotoIcon className="mx-auto size-12 text-gray-400" />
              <div className="mt-4">
                <Label htmlFor="images" className="cursor-pointer">
                  <span className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    Upload images
                  </span>
                  <Input 
                    id="images" 
                    name="images" 
                    type="file" 
                    multiple 
                    accept="image/*"
                    className="sr-only"
                  />
                </Label>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
              </div>
            </div>
          </div>
        </Fieldset>

        <Divider />

        {/* SEO */}
        <Fieldset>
          <Legend>Search Engine Optimization</Legend>
          <div className="space-y-6">
            <div>
              <Label htmlFor="metaTitle">Meta Title</Label>
              <Input 
                id="metaTitle" 
                name="metaTitle" 
                type="text" 
                placeholder="Product meta title for search engines"
              />
              <p className="mt-1 text-xs text-gray-500">Recommended: 50-60 characters</p>
            </div>
            
            <div>
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea 
                id="metaDescription" 
                name="metaDescription" 
                rows={3}
                placeholder="Brief description for search engine results"
              />
              <p className="mt-1 text-xs text-gray-500">Recommended: 150-160 characters</p>
            </div>
          </div>
        </Fieldset>

        <Divider />

        {/* Visibility */}
        <Fieldset>
          <Legend>Visibility</Legend>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="published" name="published" defaultChecked />
              <Label htmlFor="published">Publish product</Label>
            </div>
            <p className="text-xs text-gray-500">Product will be visible in your store</p>
            
            <div className="flex items-center gap-2">
              <Checkbox id="featured" name="featured" />
              <Label htmlFor="featured">Featured product</Label>
            </div>
            <p className="text-xs text-gray-500">Show product in featured sections</p>
          </div>
        </Fieldset>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button variant="outline" href="/events">
            Cancel
          </Button>
          <Button type="submit">
            Create Product
          </Button>
        </div>
      </form>
    </div>
  )
} 