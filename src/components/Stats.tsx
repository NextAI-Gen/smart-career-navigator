import { motion } from 'framer-motion'
import { Users, Briefcase, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: '15,000+',
    label: 'Clients Served',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: '93%',
    label: 'Success Rate',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: '200+',
    label: 'Industry Experts',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: '10+ Years',
    label: 'Experience',
  },
]

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-background rounded-full shadow-md">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats