import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Large decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pop-pink rounded-full border-4 border-black opacity-80"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pop-yellow rounded-full border-4 border-black opacity-70"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pop-blue rounded-full border-4 border-black opacity-60"></div>
        
        {/* Comic book style rays */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 bg-black"
              style={{
                height: '200px',
                left: '50%',
                top: '50%',
                transformOrigin: 'bottom',
                transform: `rotate(${i * 45}deg) translateX(-50%)`,
                opacity: 0.1
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Speech Bubble */}
        <div className="speech-bubble mb-8 mx-auto inline-block wiggle">
          <span className="text-lg font-comic">Welcome to the Future!</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bangers text-pop mb-6">
          <span className="text-pop-pink">POP</span>{' '}
          <span className="text-pop-yellow">ART</span>{' '}
          <span className="text-pop-blue">FASHION</span>
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-comic text-black mb-8 max-w-2xl mx-auto">
          Express yourself with our <strong>BOLD</strong> and <strong>COLORFUL</strong> collection of vintage-inspired clothing and art!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-pop-primary text-xl px-8 py-4">
            SHOP NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button className="btn-pop-secondary text-xl px-8 py-4">
            <Zap className="mr-2 w-5 h-5" />
            VIEW COLLECTION
          </Button>
        </div>

        {/* Features */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { icon: '🎨', text: 'Unique Designs' },
            { icon: '🚚', text: 'Free Shipping' },
            { icon: '💯', text: 'Quality Guaranteed' },
            { icon: '⚡', text: 'Fast Delivery' }
          ].map((feature, index) => (
            <div key={index} className="card-pop p-4 bg-white">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="font-comic font-bold">{feature.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 text-6xl bounce-pop">💥</div>
      <div className="absolute bottom-10 left-10 text-6xl bounce-pop" style={{ animationDelay: '0.5s' }}>🌟</div>
      <div className="absolute top-1/3 left-10 text-4xl bounce-pop" style={{ animationDelay: '1s' }}>🎯</div>
    </section>
  );
};

export default HeroSection;