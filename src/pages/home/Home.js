import React from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import AboutSection from '../../components/aboutsection/AboutSection'
import ClassesSection from '../../components/classes/ClassesSection'
import OurStudentsPage from '../../components/ourstudents/OurStudentsPage'
import OurFacultySection from '../../components/ourfaculty/OurFacultySection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ClassesSection/>
      <OurStudentsPage/>
      <OurFacultySection/>
    </>
  )
}

export default Home
