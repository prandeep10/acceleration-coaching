import React from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import AboutSection from '../../components/aboutsection/AboutSection'
import ClassesSection from '../../components/classes/ClassesSection'
import OurStudentsPage from '../../components/ourstudents/OurStudentsPage'
import OurFacultySection from '../../components/ourfaculty/OurFacultySection'
import Location from '../../components/location/Location'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ClassesSection/>
      <OurStudentsPage/>
      <Location/>
      <OurFacultySection/>
    </>
  )
}

export default Home
