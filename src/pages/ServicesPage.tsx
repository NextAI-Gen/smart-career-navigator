import { 
  Compass, 
  FileText, 
  Users, 
  Briefcase, 
  Award, 
  TrendingUp,
  Presentation,
  BookOpen
} from 'lucide-react'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/ServiceCard'
import CallToAction from '@/components/CallToAction'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const services = [
  {
    id: 'assessment',
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: 'Career Assessment',
    description: 'Discover your ideal career path through comprehensive assessments of your skills, interests, and values.',
    features: [
      'Personality and work style analysis',
      'Skills and competencies evaluation',
      'Values and priorities assessment',
      'Career compatibility recommendations',
      'Detailed personalized report'
    ]
  },
  {
    id: 'resume',
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Resume Building',
    description: 'Create standout resumes and cover letters that highlight your unique value proposition to employers.',
    features: [
      'Professional resume review',
      'ATS-optimized formatting',
      'Achievement-focused content',
      'Industry-specific templates',
      'Cover letter customization'
    ]
  },
  {
    id: 'networking',
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Networking Strategies',
    description: 'Develop effective networking techniques to build professional relationships and uncover opportunities.',
    features: [
      'LinkedIn profile optimization',
      'Networking event preparation',
      'Informational interview guidance',
      'Digital networking strategies',
      'Relationship maintenance plans'
    ]
  },
  {
    id: 'job-search',
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Job Search Support',
    description: 'Access curated job listings and receive personalized recommendations based on your profile.',
    features: [
      'Targeted job search strategy',
      'Application tracking system',
      'Interview preparation',
      'Salary negotiation coaching',
      'Offer evaluation assistance'
    ]
  },
  {
    id: 'skill-development',
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Skill Development',
    description: 'Identify and develop key skills needed for your target roles through tailored learning paths.',
    features: [
      'Skills gap analysis',
      'Customized learning plans',
      'Industry certification guidance',
      'Progress tracking tools',
      'Practical skill application'
    ]
  },
  {
    id: 'career-advancement',
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Career Advancement',
    description: 'Strategic guidance for promotions, salary negotiations, and long-term career growth planning.',
    features: [
      'Career path mapping',
      'Leadership development',
      'Performance optimization',
      'Promotion preparation',
      'Long-term career planning'
    ]
  },
  {
    id: 'workshops',
    icon: <Presentation className="h-10 w-10 text-primary" />,
    title: 'Career Workshops',
    description: 'Interactive group sessions focused on specific career development topics and skills.',
    features: [
      'Interview mastery workshops',
      'Personal branding sessions',
      'Industry-specific panels',
      'Networking events',
      'Career transition workshops'
    ]
  },
  {
    id: 'resources',
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: 'Career Resources',
    description: 'Access our extensive library of career guides, industry reports, and development tools.',
    features: [
      'Industry trend reports',
      'Career development guides',
      'Salary benchmarking tools',
      'Company culture insights',
      'Job description templates'
    ]
  }
]

const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'assessment', label: 'Assessment' },
  { id: 'development', label: 'Development' },
  { id: 'job-search', label: 'Job Search' }
]

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Comprehensive career development solutions tailored to your unique professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-muted">
                {serviceCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="assessment" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(service => ['assessment', 'skill-development'].includes(service.id))
                  .map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ServiceCard {...service} />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="development" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(service => ['skill-development', 'career-advancement', 'workshops', 'resources'].includes(service.id))
                  .map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ServiceCard {...service} />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="job-search" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(service => ['resume', 'networking', 'job-search'].includes(service.id))
                  .map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ServiceCard {...service} />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Process
            </h2>
            <p className="text-lg text-foreground/80">
              We follow a structured approach to ensure you receive the most effective career guidance.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-primary/30 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We begin with a comprehensive discussion about your career history, goals, and challenges.'
                },
                {
                  step: '02',
                  title: 'Assessment & Analysis',
                  description: 'Using specialized tools, we evaluate your skills, interests, and values to identify optimal career paths.'
                },
                {
                  step: '03',
                  title: 'Strategy Development',
                  description: 'We create a personalized action plan with specific steps to achieve your career objectives.'
                },
                {
                  step: '04',
                  title: 'Implementation & Support',
                  description: 'We provide ongoing guidance and resources as you execute your career development plan.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="bg-card p-6 rounded-lg shadow-md h-full">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-primary/30 mr-3">{item.step}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}

export default ServicesPage