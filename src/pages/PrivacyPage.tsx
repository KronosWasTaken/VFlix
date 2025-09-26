import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Privacy Policy - VFlix</title>
        <meta name="description" content="Read the privacy policy for VFlix. Learn how your data is handled and protected." />
        <meta property="og:title" content="Privacy Policy - VFlix Streaming" />
        <meta property="og:description" content="Read the privacy policy for VFlix. Learn how your data is handled and protected." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vflix-mocha.vercel.app/privacy" />
        <meta property="og:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - VFlix Streaming" />
        <meta name="twitter:description" content="Read the privacy policy for VFlix. Learn how your data is handled and protected." />
        <meta name="twitter:image" content="/favicon.svg" />
      </Helmet>
      <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <Button variant="ghost" className="mb-8" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div
            className="prose prose-invert max-w-none space-y-8 prose-li:list-disc prose-li:ml-4"
          >
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Welcome to VFlix, an educational web development project. This Privacy Policy 
                explains how we collect, use, and safeguard your information when you use this 
                educational demonstration website. Please note that this is a learning project 
                and not a commercial service.
              </p>
              <p className="mt-4">
                <strong>Educational Purpose:</strong> This website is created solely for educational 
                purposes to demonstrate web development skills and is not intended for commercial use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h2>
              <p>
                As an educational project, we collect minimal information necessary to 
                demonstrate user authentication and data management concepts. This may include:
              </p>
              <ul>
                <li>Email address (for account creation and authentication)</li>
                <li>User preferences (for demonstration of state management)</li>
                <li>Usage analytics (for understanding educational project performance)</li>
              </ul>
              <p className="mt-4">
                <strong>Data Storage:</strong> We use{' '}
                <a
                  href="https://supabase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supabase
                </a>{' '}
                for authentication and database services. All data is stored securely 
                and in compliance with educational data handling practices. You can learn more about{' '}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supabase's privacy practices
                </a>{' '}
                on their website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <p>As an educational project, we use collected information to:</p>
              <ul>
                <li>Demonstrate user authentication and account management</li>
                <li>Showcase data persistence and state management techniques</li>
                <li>Provide educational examples of user experience design</li>
                <li>Analyze project performance for learning purposes</li>
              </ul>
              <p className="mt-4">
                <strong>No Commercial Use:</strong> Your information is not used for any 
                commercial purposes, marketing, or data monetization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Data Storage and Security
              </h2>
              <p>
                Your data is stored securely using Supabase's enterprise-grade infrastructure. 
                We implement appropriate security measures including:
              </p>
              <ul>
                <li>Encrypted data transmission and storage</li>
                <li>Secure authentication protocols</li>
                <li>Regular security updates and monitoring</li>
                <li>Access controls and data isolation</li>
              </ul>
              <p className="mt-4">
                Learn more about{' '}
                <a
                  href="https://supabase.com/docs/guides/platform/security"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supabase's security practices
                </a>{' '}
                and our commitment to data protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Data Rights</h2>
              <p>
                As an educational project, we respect your data rights and privacy. You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Update or correct your data</li>
                <li>Delete your account and associated data</li>
                <li>Request data portability</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at the email address provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy to reflect changes in our educational 
                project or legal requirements. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy 
                periodically.
              </p>
              <p className="mt-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                For questions about this Privacy Policy or the educational nature of this project, 
                please contact us at:
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

export default PrivacyPage;
