import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Award, 
  Heart 
} from 'lucide-react'
import TeamMember from '@/components/TeamMember'
import CallToAction from '@/components/CallToAction'

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Mission',
    description: 'To empower professionals with the guidance, tools, and insights needed to navigate their career paths with confidence and achieve their full potential.'
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: 'Vision',
    description: 'To be the leading career development platform that transforms how professionals approach their career journeys, making fulfilling work accessible to everyone.'
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality career guidance through continuous learning, research, and industry expertise.'
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Empathy',
    description: 'We understand that career transitions can be challenging, and we approach each client with compassion, understanding, and personalized support.'
  }
]

const teamMembers = [
  {
    name: 'Ankit Choudhary',
    position: 'Founder & CEO',
    bio: 'Former HR executive with 15+ years of experience in talent acquisition and career development across multiple industries.',
    image: '/team-1.jpg',
    initials: 'JW',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'ankit@smartcareer.com'
  },
  {
    name: 'David Chen',
    position: 'Career Strategy Director',
    bio: 'Certified career coach with expertise in helping professionals navigate career transitions and advancement opportunities.',
    image: '/team-2.jpg',
    initials: 'DC',
    linkedin: 'https://linkedin.com',
    email: 'david@smartcareer.com'
  },
  {
    name: 'Sophia Rodriguez',
    position: 'Head of Assessment',
    bio: 'Organizational psychologist specializing in career assessment tools and professional development frameworks.',
    image: '/team-3.jpg',
    initials: 'SR',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'sophia@smartcareer.com'
  },
  {
    name: 'Marcus Johnson',
    position: 'Industry Relations Lead',
    bio: 'Former corporate recruiter with extensive network across tech, finance, and healthcare industries.',
    image: '/team-4.jpg',
    initials: 'MJ',
    linkedin: 'https://linkedin.com',
    email: 'marcus@smartcareer.com'
  }
]

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              About Smart Career Navigator
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              We're dedicated to helping professionals discover meaningful career paths and achieve their professional goals through expert guidance and personalized strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Our Story
              </h2>
              <p className="text-foreground/80 mb-4">
                Smart Career Navigator was founded in 2025 by Ankit Choudhary, a visionary technology leader who recognized the need for more personalized and effective career guidance services in the modern digital landscape.
              </p>
              <p className="text-foreground/80 mb-4">
                After witnessing countless talented professionals struggle to navigate their career paths, Jennifer assembled a team of career development experts, HR professionals, and industry specialists to create a comprehensive platform that addresses the full spectrum of career development needs.
              </p>
              <p className="text-foreground/80">
                Today, Smart Career Navigator has helped over 15,000 professionals across various industries find fulfilling careers, advance in their chosen fields, and successfully navigate career transitions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/about-image.jpg" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg w-full"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop";
                }}
              />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Values
            </h2>
            <p className="text-lg text-foreground/80">
              The core principles that guide our approach to career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-foreground/80">
              Our team of career experts is dedicated to helping you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMember {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}

export default AboutPage