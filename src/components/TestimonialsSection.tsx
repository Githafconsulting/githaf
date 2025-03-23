
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    content: 'Working with TechTransform has been a game-changer for our business. Their strategic guidance helped us implement new technologies that increased our operational efficiency by 40% and opened new revenue streams.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, Innovate Solutions',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    content: 'Their team's technical expertise is unmatched. They didn't just recommend solutions—they worked alongside us to implement them, ensuring our team was fully trained and confident with the new systems.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Marketing Director, Global Retail',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    content: 'The digital marketing strategy TechTransform developed for us transformed our online presence. We've seen a 200% increase in qualified leads and a significant boost in conversion rates.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Operations Manager, LogiTech Services',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    content: 'TechTransform's process optimization recommendations helped us eliminate bottlenecks we didn't even know existed. Our processing times have been reduced by 60%, and customer satisfaction scores are at an all-time high.',
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
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real results from businesses that have partnered with us
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
                      className="h-full bg-background border rounded-xl shadow-sm p-6"
                      intensity={5}
                      animate={false}
                    >
                      {/* Stars */}
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <p className="mb-6 text-foreground italic">"{testimonial.content}"</p>
                      
                      {/* Author */}
                      <div className="flex items-center mt-auto pt-4 border-t border-border">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover lazy-image"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
                  index === currentIndex ? 'w-6 bg-primary' : 'bg-muted-foreground/30'
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
