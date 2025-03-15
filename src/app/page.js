import AuthPage from "@/components/Auth/AuthPage";
import Footer from "@/components/Footer/Footer";
import LandingPage from "@/components/Landing/LandingPage";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <LandingPage />
        <AuthPage />
      </main>
      <footer className="mt-14">
        <Footer />
      </footer>
    </div>
  );
}
