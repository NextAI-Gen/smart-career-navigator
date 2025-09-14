import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'
import Layout from '@/components/Layout'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ResourcesPage from '@/pages/ResourcesPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App