import { ShoppingCart, Search, Menu, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="relative bg-white border-b-4 border-black">
      {/* Top announcement bar */}
      <div className="bg-pop-pink text-white text-center py-2 font-bangers text-lg bounce-pop">
        ⚡ MEGA SALE! 50% OFF EVERYTHING! ⚡
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-pop-yellow border-4 border-black rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-black fill-current" />
            </div>
            <h1 className="text-4xl font-bangers text-pop text-pop-pink">
              POP SHOP
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['HOME', 'CLOTHING', 'ART', 'ACCESSORIES', 'SALE'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-bangers text-xl text-black hover:text-pop-pink transition-colors relative group"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-pop-pink group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden lg:block">
              <Input 
                placeholder="Search for cool stuff..."
                className="w-64 pl-10 border-4 border-black rounded-none shadow-[3px_3px_0px_0px_#000] font-comic"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            </div>

            {/* Cart */}
            <Button className="btn-pop-accent relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-pop-red text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-black">
                3
              </span>
            </Button>

            {/* Mobile menu */}
            <Button className="btn-pop-secondary md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;