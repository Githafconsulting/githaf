
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import AnimatedCard from './AnimatedCard';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-[10%] translate-x-[30%] w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-[20%] -translate-x-[10%] w-[30rem] h-[30rem] rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div 
              className={`opacity-0 transform translate-y-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                Digital Transformation Consultancy
              </span>
            </div>
            
            <h1 
              className={`mb-6 opacity-0 transform translate-y-8 transition-all duration-700 delay-100 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              Transform Your Business 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"> Into the Digital Age</span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-xl opacity-0 transform translate-y-8 transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              We help businesses navigate the complexities of digital transformation with strategic consulting, innovative technologies, and data-driven marketing solutions.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 opacity-0 transform translate-y-8 transition-all duration-700 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Explore Our Services
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Visual element */}
          <div 
            className={`opacity-0 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : ''
            }`}
          >
            <AnimatedCard 
              className="glass p-6 aspect-[4/3] w-full max-w-[600px] mx-auto"
              shine
              border
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-6 flex flex-col">
                  {/* Abstract digital transformation visual */}
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <div className="absolute w-48 h-48 bg-primary/20 rounded-full filter blur-xl animate-float"></div>
                    <div className="absolute w-32 h-32 bg-accent/30 rounded-full -translate-x-16 translate-y-10 filter blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute w-40 h-40 bg-secondary/40 rounded-full translate-x-20 -translate-y-12 filter blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="relative z-10 font-display text-5xl font-bold text-foreground">TechTransform</div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
