import { motion } from 'framer-motion'
import { 
  Compass, 
  FileText, 
  Users, 
  Briefcase, 
  Award, 
  TrendingUp 
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: 'Career Assessment',
    description: 'Discover your strengths, interests, and ideal career paths through our comprehensive assessment tools.'
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Resume Building',
    description: 'Create standout resumes and cover letters with expert guidance and industry-specific templates.'
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Networking Strategies',
    description: 'Learn effective networking techniques to build professional relationships and uncover opportunities.'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Job Search Support',
    description: 'Access curated job listings and receive personalized recommendations based on your profile.'
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Skill Development',
    description: 'Identify and develop key skills needed for your target roles through tailored learning paths.'
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Career Advancement',
    description: 'Strategic guidance for promotions, salary negotiations, and long-term career growth planning.'
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Comprehensive Career Services
          </h2>
          <p className="text-lg text-foreground/80">
            We offer a complete suite of services designed to help you navigate every stage of your professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features