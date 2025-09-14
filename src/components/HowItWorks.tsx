import { motion } from 'framer-motion';
import { ClipboardCheck, UserCheck, Circle as LineChart, Lightbulb } from 'lucide-react';

const steps = [
{
  icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
  title: 'Complete Assessment',
  description: 'Take our comprehensive career assessment to identify your strengths, skills, and preferences.'
},
{
  icon: <UserCheck className="h-8 w-8 text-primary" />,
  title: 'Meet Your Advisor',
  description: 'Connect with a dedicated career advisor who specializes in your industry or career goals.'
},
{
  icon: <LineChart className="h-8 w-8 text-primary" />,
  title: 'Develop Your Plan',
  description: 'Work with your advisor to create a personalized career development strategy and action plan.'
},
{
  icon: <Lightbulb className="h-8 w-8 text-primary" />,
  title: 'Achieve Your Goals',
  description: 'Implement your plan with ongoing support and adjust strategies as you progress toward success.'
}];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            ✨ Simple Process
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-slate-900 via-primary to-blue-600 dark:from-white dark:via-primary dark:to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Our proven four-step process helps you navigate your career journey with confidence and clarity.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Animated connection line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 -translate-y-1/2 z-0 rounded-full"
          />
          
          {/* Animated dots on the line */}
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="hidden lg:block absolute top-1/2 w-4 h-4 bg-primary rounded-full -translate-y-1/2 z-10 shadow-lg"
              style={{ left: `${12.5 + index * 25}%`, transform: 'translateX(-50%) translateY(-50%)' }}
            />
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card background with gradient */}
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 group-hover:border-primary/30">
                  {/* Step number */}
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                  >
                    {index + 1}
                  </motion.div>

                  <div className="flex flex-col items-center text-center">
                    {/* Icon container with enhanced styling */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 flex items-center justify-center shadow-lg border border-primary/20 group-hover:shadow-xl group-hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </motion.div>

                    {/* Title with gradient */}
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-primary group-hover:to-blue-600 transition-all duration-300"
                    >
                      {step.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300"
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Get Started Today
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;