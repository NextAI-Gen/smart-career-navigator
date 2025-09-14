import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    content: "Smart Career Navigator transformed my job search. Their personalized approach and industry insights helped me land a role that perfectly matches my skills and aspirations.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechGrowth Inc.",
    avatar: "/testimonial-1.jpg",
    initials: "SJ"
  },
  {
    id: 2,
    content: "After feeling stuck in my career for years, the team at Smart Career Navigator helped me identify my transferable skills and pivot to a new industry. I'm now more fulfilled professionally than ever before.",
    author: "Michael Chen",
    position: "Software Engineer",
    company: "InnovateTech",
    avatar: "/testimonial-2.jpg",
    initials: "MC"
  },
  {
    id: 3,
    content: "The career assessment was eye-opening. It revealed strengths I hadn't recognized and helped me align my career path with my values. Six months later, I've received a promotion and feel much more confident in my career direction.",
    author: "Priya Patel",
    position: "HR Manager",
    company: "Global Solutions",
    avatar: "/testimonial-3.jpg",
    initials: "PP"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-foreground/80">
            Hear from professionals who have transformed their careers with our guidance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Avatar className="h-24 w-24 border-4 border-primary/20">
                      <AvatarImage 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].author}
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].initials}&background=4F8EF7&color=fff`;
                        }}
                      />
                      <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <Quote className="h-8 w-8 text-primary/60 mb-4" />
                    <p className="text-lg mb-6 italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                      <p className="text-foreground/70">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-2 h-2 rounded-full p-0 min-w-0 ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials