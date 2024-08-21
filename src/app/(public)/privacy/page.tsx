import { NextPage } from "next";
import Head from "next/head";
import Footer from "@/components/footer/Footer";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - medium.community</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we handle your personal information at medium.community."
        />
      </Head>
      <div className="container mx-auto px-6 py-12 mt-20">
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Introduction
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            Welcome to medium.community! We are committed to protecting your
            privacy and ensuring a safe online experience. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your
            information when you visit our website. Please read this policy
            carefully to understand our practices regarding your personal data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Information We Collect
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            We may collect information about you in a variety of ways. The
            information we may collect includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-200">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, email address, and other contact
              information that you voluntarily give to us when you register with
              the site or when you choose to participate in various activities
              related to the site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the site, such as your IP
              address, your browser type, and your operating system.
            </li>
            <li>
              <strong>Financial Data:</strong> Financial information, such as
              data related to your payment method (e.g., valid credit card
              number, card brand, expiration date) that we may collect when you
              purchase, order, return, exchange, or request information about
              our services from the site.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            How We Use Your Information
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            We use the information we collect in the following ways:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-200">
            <li>
              <strong>To Provide Services:</strong> We use your information to
              deliver the services you request and to improve your experience on
              our website.
            </li>
            <li>
              <strong>To Communicate:</strong> We may use your information to
              send you updates, newsletters, or other information related to our
              services.
            </li>
            <li>
              <strong>To Process Transactions:</strong> We use financial
              information to process transactions and manage your orders.
            </li>
            <li>
              <strong>To Improve Our Website:</strong> We may use information
              about your visit to understand how our website is used and to
              improve its functionality.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Disclosure of Your Information
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            We may share information we have collected about you in certain
            situations. These include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-200">
            <li>
              <strong>By Law or to Protect Rights:</strong> We may disclose your
              information as required by law or to protect our legal rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your
              information for any other purpose with your consent.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Security of Your Information
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Your Data Protection Rights
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-200">
            <li>
              <strong>The Right to Access:</strong> You may request a copy of
              the personal information we hold about you.
            </li>
            <li>
              <strong>The Right to Rectification:</strong> You may request that
              we correct or update any inaccurate or incomplete personal
              information.
            </li>
            <li>
              <strong>The Right to Erasure:</strong> You may request that we
              delete your personal information under certain circumstances.
            </li>
            <li>
              <strong>The Right to Restrict Processing:</strong> You may request
              that we restrict the processing of your personal information under
              certain conditions.
            </li>
            <li>
              <strong>The Right to Data Portability:</strong> You may request a
              copy of your personal information in a structured, commonly used,
              and machine-readable format.
            </li>
            <li>
              <strong>The Right to Object:</strong> You may object to our
              processing of your personal information under certain conditions.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            <strong>Email:</strong> support@medium.community
          </p>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-200">
            By using our website, you consent to our Privacy Policy. We may
            update this policy from time to time, and any changes will be posted
            on this page.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
