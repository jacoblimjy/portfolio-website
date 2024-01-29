import Image from 'next/image'
import Intro from '@/components/Intro'
import SectionDivider from '@/components/section-divider'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <Intro/>
      {/* <SectionDivider/> */}
      <About/>  
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>
      <Experience/>
      {/* <SectionDivider/> */}
      <Contact/>
    </main>
  )
}
