import Image from "next/image";
import Header from "../components/header/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import LoginForm from "@/components/loginForm/LoginForm";

export default function Home() {
  return (
    <>
      <Header>
        <div className="company-concept">
          <h3>Having Japan</h3>
          <h3>Everywhere</h3>
        </div>
      </Header>
      <Hero />
      <Footer />
      <LoginForm />
    </>
  );
}
