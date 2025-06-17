
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const testimonials = [
  {
    id: 1,
    name: 'HSBC',
    role: 'Global Banking',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    content: "The team successfully led the transformation of our corporate payments system globally, implementing innovative solutions that significantly increased our processing efficiency and improved compliance reporting.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Monitise',
    role: 'Financial Technology',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    content: "Their team's expertise in mobile development was crucial for our banking apps. They helped us design and implement a suite of mobile banking applications that provided a seamless experience across multiple platforms.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Paypoint',
    role: 'Payment Services',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    content: "The new payments platform the team developed for us revolutionized our transaction processing capabilities. We've seen substantial improvements in processing speed and notable enhancements in reliability and security.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Developer Village',
    role: 'Multiple Industries',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    content: "The team's AI automation and integration services have transformed our business operations. Their AI agents have considerably reduced manual processing, allowing our team to focus on strategic initiatives rather than repetitive tasks.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const getVisibleTestimonials = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const result = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }

    return result;
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 relative overflow-hidden">
      {/* Blended background - seamless continuation */}
      <div className="absolute inset-0 -z-10">
        {/* Base black background */}
        <div className="w-full h-full bg-black"></div>
        
        {/* White dotted pattern overlay - matching other sections */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Subtle gradient overlay for visual variation */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 reveal">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg">
            Real results from industry leaders that have partnered with us
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonials */}
          <div className="overflow-hidden px-4">
            <div 
              className={`flex transition-transform duration-300 ease-out ${
                isAnimating 
                  ? direction === 'left' 
                    ? 'translate-x-[10px]' 
                    : '-translate-x-[10px]' 
                  : 'translate-x-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getVisibleTestimonials().map((testimonial) => (
                  <div key={testimonial.id} className="reveal">
                    <AnimatedCard 
                      className="h-full glass rounded-xl shadow-sm p-6"
                      intensity={5}
                      animate={false}
                    >
                      {/* Stars */}
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <p className="mb-6 text-gray-300 italic">"{testimonial.content}"</p>
                      
                      {/* Author */}
                      <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover lazy-image"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </AnimatedCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-purple-500' : 'bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
