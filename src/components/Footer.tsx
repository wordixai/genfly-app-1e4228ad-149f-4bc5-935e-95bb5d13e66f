import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Top wavy border */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-4 bg-pop-pink transform skew-y-1"></div>
        <div className="absolute inset-x-0 top-2 h-4 bg-pop-yellow transform -skew-y-1"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-bangers text-pop-pink mb-4">
              POP SHOP
            </h3>
            <p className="font-comic text-lg mb-6 text-gray-300">
              Bringing you the most <strong>AMAZING</strong> pop art fashion and accessories 
              since 2024! Express yourself with our bold and colorful designs.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-bangers text-xl text-pop-yellow">
                JOIN OUR NEWSLETTER!
              </h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email address"
                  className="border-2 border-white bg-transparent text-white placeholder-gray-400"
                />
                <Button className="btn-pop-primary">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bangers text-xl text-pop-blue mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 font-comic">
              {['Home', 'Shop', 'About', 'Contact', 'Size Guide', 'Returns'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-pop-pink transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bangers text-xl text-pop-green mb-4">
              HELP & SUPPORT
            </h4>
            <ul className="space-y-2 font-comic">
              {['FAQ', 'Shipping Info', 'Track Order', 'Support Center', 'Live Chat'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-pop-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-gray-300 font-comic">
              <p>📞 1-800-POP-SHOP</p>
              <p>📧 hello@popshop.com</p>
              <p>⏰ Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
        </div>

        {/* Social Media & Payment */}
        <div className="border-t-2 border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="font-bangers text-lg text-pop-pink">FOLLOW US:</span>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, color: 'hover:text-pop-pink' },
                  { icon: Twitter, color: 'hover:text-pop-blue' },
                  { icon: Facebook, color: 'hover:text-pop-yellow' }
                ].map(({ icon: Icon, color }, index) => (
                  <Button 
                    key={index}
                    size="sm" 
                    className={`bg-white text-black border-2 border-white ${color} transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="font-comic text-gray-300">We Accept:</span>
              <div className="flex gap-2">
                {['💳', '💰', '🏦', '📱'].map((emoji, index) => (
                  <div key={index} className="w-8 h-8 bg-white rounded border-2 border-gray-300 flex items-center justify-center text-lg">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <p className="font-comic text-gray-400 flex items-center justify-center gap-2">
            © 2024 Pop Shop. Made with <Heart className="w-4 h-4 text-pop-red fill-current" /> for pop art lovers everywhere!
          </p>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-pop-pink rounded-full opacity-10 bounce-pop"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-pop-yellow rounded-full opacity-10 bounce-pop" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-pop-blue rounded-full opacity-10 bounce-pop" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};

export default Footer;