import styles from "./style";
import { Billing, Business, CTA, Footer, Navbar, Stats,TrustedBy, Testimonials, Hero, WaitlistSection } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import { Analytics } from "@vercel/analytics/react";

const HomePage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Analytics/>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <TrustedBy />
        <Business />
        <Billing />
        //<Testimonials />
        <WaitlistSection />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      } />
    </Routes>
  </Router>
);

export default App;

