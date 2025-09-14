import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Take the first step toward achieving your professional goals with personalized career guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="font-medium"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-medium"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction