import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "RETRO BOOM TEE",
      price: 29,
      originalPrice: 45,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "T-SHIRTS",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "POP ART JACKET",
      price: 89,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "JACKETS",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "COMIC STYLE DRESS",
      price: 65,
      originalPrice: 95,
      image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=400&h=400&fit=crop",
      category: "DRESSES",
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: "VINTAGE POSTER",
      price: 25,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      category: "ART PRINTS",
      isNew: true,
      isSale: false
    },
    {
      id: 5,
      name: "RAINBOW SNEAKERS",
      price: 79,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      category: "SHOES",
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "POP CULTURE BAG",
      price: 45,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      category: "BAGS",
      isNew: true,
      isSale: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="speech-bubble mb-6 mx-auto inline-block">
            <span className="text-lg font-comic">Check out our hottest items!</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bangers text-pop text-pop-pink mb-4">
            TRENDING NOW
          </h2>
          
          <p className="text-xl font-comic text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items that are flying off the shelves! 
            Each piece is designed to make you stand out from the crowd.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-1 bg-pop-pink"></div>
            <button className="btn-pop-secondary text-xl px-8 py-3">
              VIEW ALL PRODUCTS
            </button>
            <div className="w-16 h-1 bg-pop-pink"></div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute left-10 top-1/2 w-20 h-20 bg-pop-yellow rounded-full border-4 border-black opacity-20 bounce-pop"></div>
      <div className="absolute right-10 top-1/3 w-16 h-16 bg-pop-blue rounded-full border-4 border-black opacity-20 bounce-pop" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default ProductGrid;