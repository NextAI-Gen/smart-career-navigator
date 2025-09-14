import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ResourceCard from '@/components/ResourceCard'
import CallToAction from '@/components/CallToAction'

const resources = [
  {
    id: 1,
    title: 'The Ultimate Guide to Resume Writing',
    description: 'Learn how to craft a compelling resume that highlights your strengths and catches employers\' attention.',
    image: '/resource-1.jpg',
    category: 'Guide',
    type: 'article',
    link: '#'
  },
  {
    id: 2,
    title: 'Mastering the Job Interview',
    description: 'Prepare for your next interview with proven techniques and strategies to make a lasting impression.',
    image: '/resource-2.jpg',
    category: 'Guide',
    type: 'video',
    link: '#'
  },
  {
    id: 3,
    title: 'Networking in the Digital Age',
    description: 'Discover effective ways to build and leverage your professional network in today\'s digital landscape.',
    image: '/resource-3.jpg',
    category: 'Strategy',
    type: 'article',
    link: '#'
  },
  {
    id: 4,
    title: 'Career Change at 40+',
    description: 'It\'s never too late to pivot your career. Learn how to leverage your experience for a successful transition.',
    image: '/resource-4.jpg',
    category: 'Guide',
    type: 'podcast',
    link: '#'
  },
  {
    id: 5,
    title: 'Salary Negotiation Tactics',
    description: 'Maximize your compensation package with these proven negotiation strategies and scripts.',
    image: '/resource-5.jpg',
    category: 'Strategy',
    type: 'article',
    link: '#'
  },
  {
    id: 6,
    title: 'Remote Work Success Strategies',
    description: 'Thrive in a remote work environment with tips for productivity, communication, and work-life balance.',
    image: '/resource-6.jpg',
    category: 'Guide',
    type: 'video',
    link: '#'
  },
  {
    id: 7,
    title: 'LinkedIn Profile Optimization',
    description: 'Transform your LinkedIn presence to attract recruiters and showcase your professional brand.',
    image: '/resource-7.jpg',
    category: 'Tutorial',
    type: 'article',
    link: '#'
  },
  {
    id: 8,
    title: 'Industry Trends Report 2023',
    description: 'Stay ahead of the curve with our analysis of emerging trends across major industries.',
    image: '/resource-8.jpg',
    category: 'Report',
    type: 'report',
    link: '#'
  },
  {
    id: 9,
    title: 'Personal Branding Workshop',
    description: 'Learn how to define and communicate your unique professional value proposition.',
    image: '/resource-9.jpg',
    category: 'Workshop',
    type: 'video',
    link: '#'
  }
]

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality would be implemented here
  }

  const filteredResources = (type: string) => {
    return resources
      .filter(resource => 
        (type === 'all' || resource.type === type) && 
        (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Career Resources
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Explore our collection of guides, videos, and tools to help you navigate your career journey.
            </p>
            
            <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/50" />
                <Input 
                  type="search"
                  placeholder="Search resources..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button type="submit" className="ml-2">Search</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="article">Articles</TabsTrigger>
                <TabsTrigger value="video">Videos</TabsTrigger>
                <TabsTrigger value="podcast">Podcasts</TabsTrigger>
                <TabsTrigger value="report">Reports</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources('all').map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="article" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources('article').map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources('video').map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="podcast" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources('podcast').map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="report" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources('report').map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Show message if no results */}
          {filteredResources('all').length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">No resources found matching your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Subscribe to our newsletter for the latest career insights, resources, and industry trends.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}

export default ResourcesPage