import Image from "next/image";
import Header from '../components/header/Header'
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";



export default function Home() {
  return (
    <>
      <Header >
        <div className='company-concept'>
          <h3>Feel Japan!</h3>
          <h3>Have Japan!</h3>
          <h3>Come Japan!</h3>
        </div>
      </ Header>
      <Hero />
      <Footer />
    </>
  );
}
