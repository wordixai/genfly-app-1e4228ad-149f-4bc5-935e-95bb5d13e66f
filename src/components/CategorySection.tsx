import { Button } from '@/components/ui/button';

const CategorySection = () => {
  const categories = [
    {
      name: "CLOTHING",
      description: "Express yourself!",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      color: "bg-pop-pink",
      emoji: "👕"
    },
    {
      name: "ART PRINTS",
      description: "Decorate your space!",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      color: "bg-pop-blue",
      emoji: "🎨"
    },
    {
      name: "ACCESSORIES",
      description: "Complete the look!",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
      color: "bg-pop-yellow",
      emoji: "✨"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bangers text-pop text-black mb-4">
            SHOP BY CATEGORY
          </h2>
          <p className="text-xl font-comic text-black max-w-2xl mx-auto">
            Find exactly what you're looking for in our carefully curated collections!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="comic-frame p-2 bg-white group">
              <div className="card-pop bg-white overflow-hidden relative">
                {/* Category Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${category.color} opacity-70 mix-blend-multiply`}></div>
                  
                  {/* Emoji Badge */}
                  <div className="absolute top-4 right-4 text-4xl bounce-pop">
                    {category.emoji}
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-3xl font-bangers text-pop-small mb-2">
                      {category.name}
                    </h3>
                    <p className="font-comic text-lg mb-4">
                      {category.description}
                    </p>
                    <Button className="btn-pop-primary w-fit">
                      EXPLORE NOW
                    </Button>
                  </div>
                </div>

                {/* Halftone effect */}
                <div className="absolute inset-0 halftone opacity-10 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="speech-bubble mx-auto inline-block">
            <span className="font-comic">Can't decide? Browse everything!</span>
          </div>
          <div className="mt-6">
            <Button className="btn-pop-accent text-xl px-8 py-4">
              VIEW ALL CATEGORIES
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-5 text-6xl opacity-20 bounce-pop">💫</div>
      <div className="absolute bottom-20 right-5 text-6xl opacity-20 bounce-pop" style={{ animationDelay: '1s' }}>🎪</div>
    </section>
  );
};

export default CategorySection;