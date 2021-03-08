import React from 'react';
// import Header from '../components/header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Content from '../components/content';

const Index = ({allJobs}) => (
  <div className="bg-red-50">
    <Navbar/>
    <Content allJobs={allJobs}/>
    <Footer/>
  </div>
)
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/jobs');
  const data = await res.json()
  
  return {
    props:{ allJobs : data }
  };
}
export default Index
