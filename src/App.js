import { lazy, Suspense } from "react";
import Cookies from "universal-cookie";
import posthog from "posthog-js";
import ReactWhatsapp from "react-whatsapp";

import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";
import "./rapidcss/style.css";
import "./rapidcss/responsive.css";
import Sitemap from "./components/Sitemap";
import Fire from "./components/Fire";
import CookieBanner from "./components/CookieBanner";
import Installation from "./components/Installation";
import Maintenance from "./components/Maintenance";
import Testing from "./components/Testing";
import Training from "./components/Training";
import OurWork from "./components/OurWork";
import OurWorkApp from "./newComponent/ourWorkApp/ourWorkApp";
import OurWorkUI from "./newComponent/ourWorkUI/ourWorkUI";
import OurWorkSoftware from "./newComponent/ourWorkSoftware/ourWorkSoftware";
import OurWorkAI from "./newComponent/ourWorkAi/ourWorkAi";
import OurWorkBlockchain from "./newComponent/ourWorkBlockchain/ourWorkBlockchain";
import OurWorkAgile from "./newComponent/ourWorkAgile/ourWorkAgile";
import OurWorkDevOps from "./newComponent/ourWorkDevOps/ourWorkDevOps";
import OurWorkCloudService from "./newComponent/ourWorkCloudService/ourWorkCloudService";
import OurWorkItConsulting from "./newComponent/ourWorkItConsulting/ourWorkItConsulting";
import OurWorkCyber from "./newComponent/ourWorkCyber/ourWorkCyber";
import OurWorkDataAnalyst from "./newComponent/ourWorkDataAnalyst/ourWorkDataAnalyst";
import OurWorkIOT from "./newComponent/ourWorkIOT/ourWorkIOT";
import OurWorkEcommerce from "./newComponent/ourWorkEcommerce/ourWorkEcommerce";
import OurWorkItServices from "./newComponent/ourWorkItServices/ourWorkItServices";
import OurWorkIndustrySolution from "./newComponent/ourWorkIndustrySolution/ourWorkIndustrySolution";
import OurWorkDigitalTransformation from "./newComponent/ourWorkDigitalTransformation/ourWorkDigitalTransformation";

const Home = lazy(() => import("./components/Home"));

const Aboutus = lazy(() => import("./components/Aboutus"));
const Services = lazy(() => import("./components/Services"));
const Blog = lazy(() => import("./components/Blog"));
const Contactus = lazy(() => import("./components/Contactus"));
const Technology = lazy(() => import("./components/Technology"));
const Pricing = lazy(() => import("./components/Pricing"));
const Team = lazy(() => import("./components/Team"));
const Career = lazy(() => import("./components/Career"));
const Privacypolicy = lazy(() => import("./components/Privacypolicy"));
const Blogdetail = lazy(() => import("./components/Blogdetail"));
const Apply = lazy(() => import("./components/Apply"));
const Terms = lazy(() => import("./components/Terms"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const Profile = lazy(() => import("./components/Profile"));
const Forgotpassword = lazy(() => import("./components/Forgotpassword"));
const Verifie = lazy(() => import("./components/Verifie"));
const Faq = lazy(() => import("./components/Faq"));
const Applymean = lazy(() => import("./components/Applymean"));
const Applymern = lazy(() => import("./components/Applymern"));
const Pagefound = lazy(() => import("./components/Pagefound"));
const cookies = new Cookies();
const token = cookies.get("token");

function App() {
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TheRapidHire",
    image: "https://therapidhire.com/images/logo.png",
    "@id": "",
    url: "https://therapidhire.com",
    telephone: "+91 9176282406",
    priceRange: "$29 - $49",
    address: {
      "@type": "PostalAddress",
      streetAddress: "51,Electronic Complex Pardesipura",
      addressLocality: "Indore",
      postalCode: "452007",
      addressCountry: "IN",
    },
  };
  const schemaLocalBusiness_JSON = JSON.stringify(schemaLocalBusiness);

  const schemaOrganization = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "TheRapidHire",
    url: "https://therapidhire.com/",
    sameAs: [
      "https://www.linkedin.com/company/therapidhire",
      "https://twitter.com/therapidhire_",
      "https://www.facebook.com/therapidhire/",
      "https://www.instagram.com/therapidhire_/",
    ],
    logo: "https://therapidhire.com/images/logo.png",
    description:
      "TheRapidHire Pvt. Ltd. is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis. With a mission to deliver quality services at a reasonable cost, TRH takes an agile, collaborative approach to create customized solutions across the digital value chain. Our deep expertise in infrastructure and applications management turns your ideas into reality. Our services include Web design, Web development, IT and Database, AWS, APP Development, Cloud Services, Database management, Cyber Security, and Payroll Management.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "51, Electronic Complex, Pardesipura  ",
      addressLocality: " Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452007",
      addressCountry: "India",
    },
  };
  const schemaOrganization_JSON = JSON.stringify(schemaOrganization);

  const schemaWebSite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "TheRapidHire",
    url: "https://www.therapidhire.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.therapidhire.com/blog{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaWebSite_JSON = JSON.stringify(schemaWebSite);

  const schemaFaq = {
    "@context": "http://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Q. What does Therapidhire do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TRH is a software development and IT outsourcing company specializing in the design & development of customized mobile and web applications.",
        },
      },
      {
        "@type": "Question",
        name: "Q. Why Choose Therapidhire as a software development service provider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Therapidhire is a well-known software and mobile app development company when it comes to custom software development. Numerous businesses have benefited from our long-term experience and expertise in providing diverse custom software development services in accordance with the most recent technological standards .Our software developers are experts in agile team deployment, custom-centric engagement models, strict quality measures, in-depth technical and domain expertise, and an understanding of various software development frameworks, programming languages, and platforms to deliver the best web software solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Q. As a software development firm, what software development services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer full-service software development, including custom software development, web app development, mobile app development, software testing, and other related services. Our robust software development services are completed in a clean manner to provide high-quality services.",
        },
      },
    ],
  };
  const schemaFaq_JSON = JSON.stringify(schemaFaq);

  const Opengraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.therapidhire.com/#website",
        url: "https://www.therapidhire.com/",
        name: "The Rapid Hire",
        description: "Quality over Quantiy",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://www.therapidhire.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.therapidhire.com/#primaryimage",
        inLanguage: "en-US",
        url: "https://www.therapidhire.com/images/software.jpg",
        contentUrl: "https://www.therapidhire.com/images/software.jpg",
        width: 1200,
        height: 630,
      },
      {
        "@type": "WebPage",
        "@id": "https://www.therapidhire.com/#webpage",
        url: "https://www.therapidhire.com/",
        name: "TheRapidHire-Software Development | IT outsourcing Company",
        isPartOf: {
          "@id": "https://www.therapidhire.com/#website",
        },
        primaryImageOfPage: {
          "@id": "https://www.therapidhire.com/#primaryimage",
        },
        datePublished: "2023-03-23T05:00:16+00:00",
        dateModified: "2023-03-23T05:00:16+00:00",
        description:
          "TheRapidHire is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis.",
        breadcrumb: {
          "@id": "https://www.therapidhire.com/#breadcrumb",
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://www.therapidhire.com/"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.therapidhire.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
          },
        ],
      },
    ],
  };
  const schemaOpengraph_JSON = JSON.stringify(Opengraph);

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">{schemaOpengraph_JSON}</script>

        <script type="application/ld+json">{schemaLocalBusiness_JSON}</script>
        <script type="application/ld+json">{schemaOrganization_JSON}</script>
        <script type="application/ld+json">{schemaWebSite_JSON}</script>
        <script type="application/ld+json">{schemaFaq_JSON}</script>
      </Helmet>

      <ScrollToTop />

      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <Header />

          {(token && posthog.has_opted_out_capturing()) || // new
          posthog.has_opted_in_capturing() ? null : (
            <CookieBanner />
          )}

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/aboutus" element={<Aboutus />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/letsconnect" element={<Contactus />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/technology" element={<Technology />}></Route>
            {/* <Route exact path="/pricing" element={<Pricing />}></Route> */}
            <Route exact path="/team" element={<Team />}></Route>
            <Route exact path="/workwithus" element={<Career />}></Route>
            <Route exact path="/privacy" element={<Privacypolicy />}></Route>
            <Route exact path="/:type" element={<Blogdetail />}></Route>
            <Route exact path="/applyjava" element={<Apply />}></Route>
            <Route exact path="/termsofservices" element={<Terms />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/profile/:id/" element={<Profile />}></Route>
            <Route
              exact
              path="/forgotpassword/:id/"
              element={<Forgotpassword />}
            ></Route>
            <Route exact path="/verify/:id/" element={<Verifie />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route
              exact
              path="/forgotpassword"
              element={<Forgotpassword />}
            ></Route>
            <Route exact path="/faq" element={<Faq />}></Route>
            <Route exact path="/applymern" element={<Applymern />}></Route>
            <Route exact path="/applymean" element={<Applymean />}></Route>
            <Route exact path="*" element={<Pagefound />}></Route>
            <Route exact path="/sitemap" element={<Sitemap />}></Route>
            <Route exact path="/fire" element={<Fire />}></Route>
            <Route
              exact
              path="/installation"
              element={<Installation />}
            ></Route>
            <Route exact path="/maintenance" element={<Maintenance />}></Route>
            <Route exact path="/testing" element={<Testing />}></Route>
            <Route exact path="/training" element={<Training />}></Route>

            <Route exact path="/our-work" element={<OurWork />}></Route>
            <Route
              exact
              path="/our-work/mobile-app"
              element={<OurWorkApp />}
            ></Route>
            <Route exact path="/our-work/ui-ux" element={<OurWorkUI />}></Route>
            <Route
              exact
              path="/our-work/software-development"
              element={<OurWorkSoftware />}
            ></Route>
            <Route exact path="/our-work/ai-ml" element={<OurWorkAI />}></Route>
            <Route
              exact
              path="/our-work/blockchain"
              element={<OurWorkBlockchain />}
            ></Route>
            <Route
              exact
              path="/our-work/agile"
              element={<OurWorkAgile />}
            ></Route>
            <Route
              exact
              path="/our-work/devops"
              element={<OurWorkDevOps />}
            ></Route>
            <Route
              exact
              path="/our-work/cloud-service"
              element={<OurWorkCloudService />}
            ></Route>
            <Route
              exact
              path="/our-work/it-consulting"
              element={<OurWorkItConsulting />}
            ></Route>
            <Route
              exact
              path="/our-work/cyber-security"
              element={<OurWorkCyber />}
            ></Route>
            <Route
              exact
              path="/our-work/data-analyst"
              element={<OurWorkDataAnalyst />}
            ></Route>
            <Route
              exact
              path="/our-work/eCommerce"
              element={<OurWorkEcommerce />}
            ></Route>
            <Route
              exact
              path="/our-work/it-services"
              element={<OurWorkItServices />}
            ></Route>
            <Route exact path="/our-work/iot" element={<OurWorkIOT />}></Route>
            <Route
              exact
              path="/our-work/industry-solution"
              element={<OurWorkIndustrySolution />}
            ></Route>
            <Route
              exact
              path="/our-work/digital-transformation"
              element={<OurWorkDigitalTransformation />}
            ></Route>
          </Routes>
          <Footer />
          {/* <Sidebar /> */}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export default App;
