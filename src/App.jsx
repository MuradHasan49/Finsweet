import "./App.css";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Dbanner from "./components/DownBanner/Dbanner";
import FeaturesBox from "./components/Features/FeaturesBox";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import FooterCopy from "./components/Footer/FooterCopy";
import HowWork from "./components/How_we_work/HowWork";
import Nav from "./components/Navbar/Navbar";
import AboutUs from "./components/Pages/AboutUs";
import BlogPage from "./components/Pages/BlogPage";
import ContactUs from "./components/Pages/ContactUs";
import Features from "./components/Pages/Features";
import Pricing from "./components/Pages/Pricing";
import PrivacyAndPolicy from "./components/Pages/PrivacyAndPolicy";
import ReadBlog from "./components/Pages/ReadBlog";
import Work from "./components/Pages/Work";
import Questions from "./components/questions/Questions";
import Viewprojects from "./components/Viewourprojects/Viewprojects";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Banner />
          <HowWork />
          <Viewprojects />
          <FeaturesBox />
          <Feedback />
          <Questions />
          <Dbanner />
          <Blog />
          <Footer />
          <FooterCopy />
        </>
      ),
    },
    {
      path: "/AboutUs",
      element: (
        <>

          <Nav />
          <AboutUs />
          <Footer />
          <FooterCopy />
        </>
      ),
    },
    {
      path: "/Pricing",
      element: (
        <>
          <Nav />
          <Pricing />
          <Footer />
          <FooterCopy />
        </>
      ),
    },
    {
      path: "/Blog",
      element: (
        <>
          <Nav />
           <BlogPage />
          <Footer />
          <FooterCopy />
        </>
      ),
    },
    {
      path: "/ReadMore",
      element: (
        <>
          <Nav />
           <ReadBlog />
          <Footer />
          <FooterCopy />
        </>
      ),
    },
    {
      path: "/FAQ",
      element: (
        <>
          <Nav />
           <PrivacyAndPolicy />
          <Footer />
          <FooterCopy />
        </>
      ),
    },
    {
      path: "/ContactUS",
      element: (
        <>
          <Nav />
        <ContactUs />
          <Footer />
          <FooterCopy />
        </>
      ),
    },
    {
      path: "/Features",
      element: (
        <>
          <Nav />
        <Features/>
          <Footer />
          <FooterCopy />
        </>
      ),
    },
    {
      path: "/Work",
      element: (
        <>
          <Nav />
        <Work/>
          <Footer />
          <FooterCopy />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
