import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FaEnvelope} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>About VFlix - Streaming Platform</title>
        <meta
          name="description"
          content="Learn more about VFlix, our mission, data sources, and commitment to providing a modern streaming experience."
        />
        <meta property="og:title" content="About VFlix - Streaming Platform" />
        <meta
          property="og:description"
          content="Learn more about VFlix, our mission, data sources, and commitment to providing a modern streaming experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vflix.vercel.app/about" />
        <meta property="og:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About VFlix - Streaming Platform" />
        <meta
          name="twitter:description"
          content="Learn more about VFlix, our mission, data sources, and commitment to providing a modern streaming experience."
        />
        <meta name="twitter:image" content="/favicon.svg" />
      </Helmet>
      <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <Button variant="ghost" className="mb-8" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About Us</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Aaditya made this</h2>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Educational Purpose</h2>
              <p>
                VFlix is an educational project created to demonstrate modern web development skills, 
                including React, TypeScript, API integration, and responsive design. This platform 
                serves as a learning exercise and portfolio piece, showcasing various frontend 
                technologies and best practices.
              </p>
              <p className="mt-4">
                <strong>Important:</strong> This website is for educational purposes only and does not 
                host, stream, or provide access to any copyrighted content. All media information 
                is sourced from publicly available APIs for demonstration purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Content</h2>
              <p>
                This website displays information sourced from The Movie Database (TMDb) API. 
                Any advertisements or third-party content that may appear are not controlled 
                by this educational project. We recommend using appropriate ad-blocking software 
                if you prefer an ad-free experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What VFlix Demonstrates</h2>
              <p>VFlix showcases various web development concepts including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modern React with TypeScript implementation</li>
                <li>Responsive design and mobile-first approach</li>
                <li>API integration with external services (TMDb)</li>
                <li>User authentication and data management</li>
                <li>State management and context providers</li>
                <li>Component architecture and reusability</li>
                <li>Search functionality and filtering</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Source</h2>
              <p>
                This educational project utilizes The Movie Database (TMDb) API to demonstrate 
                API integration and data handling. TMDb provides comprehensive movie and TV show 
                information including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Cast and crew information</li>
                <li>Release dates and ratings</li>
                <li>Plot summaries and reviews</li>
                <li>High-quality images and posters</li>
              </ul>
              <p className="mt-4">
                All data is used strictly for educational demonstration purposes and in 
                compliance with TMDb's terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Educational Commitment</h2>
              <p>This project is committed to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Demonstrating best practices in modern web development</li>
                <li>Providing a learning resource for aspiring developers</li>
                <li>Respecting intellectual property and copyright laws</li>
                <li>Maintaining transparency about the educational nature of this project</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Socials</h2>
              <p></p>
              {/* <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/ryangoslingoffical__/"
                    className="text-primary hover:underline"
                  >
                    @ryangoslingoffical__
                  </a>
                  <sup> *jk i'm pbviously not Ryan Gosling</sup>
                </li>
              </ul> */}
                            <div className="space-y-4">
                              <div className="flex items-center space-x-3">
                                <FaEnvelope className="h-5 w-5 text-primary" />
                                <a
                                  href="mailto:aaditya12raj@gmail.com"
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                  aaditya12raj@gmail.com
                                </a>
                              </div>
                            </div>
            </section>

            {/* <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>Have questions, suggestions, or feedback?</p>
            </section> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
