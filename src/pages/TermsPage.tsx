import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Terms of Service - VFlix Streaming</title>
        <meta name="description" content="Read the terms of service for VFlix. Understand the rules and guidelines for using this site." />
        <meta property="og:title" content="Terms of Service - VFlix Streaming" />
        <meta property="og:description" content="Read the terms of service for VFlix. Understand the rules and guidelines for using this site." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vflix-mocha.vercel.app/terms" />
        <meta property="og:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - VFlix Streaming" />
        <meta name="twitter:description" content="Read the terms of service for VFlix. Understand the rules and guidelines for using this site." />
        <meta name="twitter:image" content="/favicon.svg" />
      </Helmet>
      <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <Button variant="ghost" className="mb-8" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Educational Purpose Disclaimer
              </h2>
              <p>
                <strong>IMPORTANT:</strong> This website is created and maintained solely for educational 
                purposes. It is designed to demonstrate web development skills, user interface design, 
                and API integration techniques. This is a learning project and portfolio piece, 
                not a commercial streaming service.
              </p>
              <p className="mt-4">
                <strong>No Copyrighted Content:</strong> This website does not host, stream, or provide 
                access to any copyrighted content. All media information displayed is sourced from 
                publicly available APIs (The Movie Database) for demonstration purposes only.
              </p>
              <p className="mt-4">
                <strong>Educational Use Only:</strong> This project is not intended for commercial use, 
                distribution of copyrighted materials, or any form of piracy. Users must comply with 
                all applicable copyright laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this educational demonstration website, you acknowledge 
                and agree to be bound by these Terms of Service and all applicable laws and 
                regulations. If you do not agree with any of these terms, you are prohibited 
                from using or accessing this site.
              </p>
              <p className="mt-4">
                <strong>Educational Acknowledgment:</strong> You understand that this is an educational 
                project and not a commercial service. Your use of this site constitutes acceptance 
                of its educational nature and limitations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Educational Use Only
              </h2>
              <p>
                This website is provided as an educational demonstration project for learning 
                web development concepts. All materials and content are for educational and 
                demonstration purposes only. Under this educational license, you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use the materials for any commercial purpose or profit</li>
                <li>Attempt to decompile, reverse engineer, or extract source code</li>
                <li>Remove any copyright, educational, or proprietary notices</li>
                <li>Redistribute, mirror, or host the materials elsewhere</li>
                <li>Use the site for any illegal or unauthorized purposes</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
              <p className="mt-4">
                <strong>Permitted Use:</strong> You may use this site for educational purposes, 
                learning web development concepts, and as a reference for your own projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Content Disclaimer
              </h2>
              <p>
                <strong>No Copyrighted Content:</strong> This educational website does not host, 
                stream, or provide access to any copyrighted content. All media information 
                displayed is sourced from publicly available APIs (The Movie Database) for 
                demonstration purposes only.
              </p>
              <p className="mt-4">
                <strong>Anti-Piracy Stance:</strong> We do not condone, support, or facilitate 
                any form of copyright infringement, piracy, or unauthorized distribution of 
                copyrighted materials. This project is designed to demonstrate web development 
                skills, not to provide access to copyrighted content.
              </p>
              <p className="mt-4">
                <strong>User Responsibility:</strong> Users are responsible for ensuring they 
                comply with all applicable copyright laws and regulations when accessing 
                any third-party content or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Third-Party Content and Services
              </h2>
              <p>
                <strong>API Integration:</strong> This educational project integrates with 
                third-party APIs (specifically The Movie Database) to demonstrate API 
                usage and data handling techniques. All third-party content is used 
                strictly for educational purposes.
              </p>
              <p className="mt-4">
                <strong>No Endorsement:</strong> We do not endorse, claim ownership of, or 
                take responsibility for any third-party content, services, or external links. 
                All third-party content is subject to their respective terms of service 
                and privacy policies.
              </p>
              <p className="mt-4">
                <strong>User Compliance:</strong> Users are solely responsible for ensuring 
                they comply with all applicable laws, regulations, and third-party terms 
                when accessing or using any third-party content or services.
              </p>
            </section>

            {/* <section>
              <h2 className="text-2xl font-semibold mb-4">5. Modifications</h2>
              <p>
                We may revise these terms of service at any time without notice.
                By using this website, you are agreeing to be bound by the then
                current version of these terms of service.
              </p>
            </section> */}

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
              <p>
                For questions about these terms or the educational nature of this project, 
                please contact:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p><strong>Email:</strong> aaditya12raj@gmail.com</p>
                <p><strong>Project Type:</strong> Educational Web Development Demonstration</p>
                <p><strong>Purpose:</strong> Learning and Portfolio Showcase</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
