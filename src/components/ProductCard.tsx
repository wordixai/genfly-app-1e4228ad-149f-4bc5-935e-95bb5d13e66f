import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew, 
  isSale 
}: ProductCardProps) => {
  return (
    <div className="comic-frame p-1 bg-white group">
      <div className="card-pop p-4 bg-white relative overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isNew && (
            <span className="bg-pop-green text-white px-3 py-1 text-xs font-bangers border-2 border-black transform -rotate-12">
              NEW!
            </span>
          )}
          {isSale && (
            <span className="bg-pop-red text-white px-3 py-1 text-xs font-bangers border-2 border-black transform rotate-12">
              SALE!
            </span>
          )}
        </div>

        {/* Product Image */}
        <div className="relative mb-4 overflow-hidden bg-pop-yellow rounded-none border-2 border-black">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button size="sm" className="bg-white text-black border-2 border-black hover:bg-pop-pink hover:text-white">
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-white text-black border-2 border-black hover:bg-pop-pink hover:text-white">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <div className="text-sm font-comic text-gray-600 uppercase tracking-wide">
            {category}
          </div>
          
          <h3 className="font-bangers text-xl text-black group-hover:text-pop-pink transition-colors">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bangers text-pop-pink">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-lg font-comic text-gray-500 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full btn-pop-primary mt-3">
            <ShoppingCart className="w-4 h-4 mr-2" />
            ADD TO CART
          </Button>
        </div>

        {/* Pop Art Dots */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pop-blue rounded-full border-2 border-black opacity-70"></div>
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-pop-yellow rounded-full border-2 border-black opacity-70"></div>
      </div>
    </div>
  );
};

export default ProductCard;