import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - medium.community</title>
        <meta
          name="description"
          content="Learn more about medium.community and our mission to connect writers and readers."
        />
      </Head>
      <div className="container mx-auto px-6 py-12 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-12 relative">
          About <span className="text-indigo-600">medium.community</span>
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 transform -translate-y-3 scale-x-0 origin-left transition-transform duration-500 dark:bg-indigo-500"></div>
        </h1>

        <section className="flex flex-col md:flex-row items-center mb-12 relative">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/about-image.jpg"
              alt="About medium.community"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-semibold mb-6 relative">
              Welcome to{" "}
              <span className="text-indigo-600">medium.community</span>
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 transform -translate-y-3 scale-x-0 origin-left transition-transform duration-500 dark:bg-indigo-500"></div>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              At <span className="text-indigo-600">medium.community</span>, we
              believe that everyone has a story worth sharing. Our platform is a
              space where voices from all walks of life come together to share
              ideas, experiences, and insights on topics that matter most.
              Whether you’re a seasoned writer or someone just starting to put
              your thoughts into words, medium.community is your space to
              express, inspire, and connect with others.
            </p>
            <a href="#join" className="text-indigo-600 hover:underline text-lg">
              Learn more about our mission
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 relative">
            Our Mission
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 transform -translate-y-3 scale-x-0 origin-left transition-transform duration-500 dark:bg-indigo-500"></div>
          </h2>
          <p className="text-lg leading-relaxed">
            Our mission is simple: to empower individuals to share their stories
            and perspectives in a supportive and inclusive environment. We
            strive to create a vibrant community where diversity of thought
            thrives, and where every story contributes to the collective wisdom
            of our readers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 relative">
            What We Offer
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 transform -translate-y-3 scale-x-0 origin-left transition-transform duration-500 dark:bg-indigo-500"></div>
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>
              <strong className="text-indigo-600">
                A Platform for Everyone:
              </strong>{" "}
              Whether you want to share your latest thoughts on current events,
              write a personal reflection, or publish an in-depth analysis,
              medium.community provides the tools you need to reach an engaged
              audience.
            </li>
            <li>
              <strong className="text-indigo-600">Diverse Content:</strong> From
              lifestyle and personal growth to technology and social issues, our
              blog categories cover a wide range of topics. Our readers come
              from diverse backgrounds, bringing with them unique perspectives
              that enrich our community.
            </li>
            <li>
              <strong className="text-indigo-600">
                Engagement & Interaction:
              </strong>{" "}
              Readers can engage with content by commenting, sharing, and
              connecting with authors. We encourage thoughtful discussions and
              meaningful interactions that go beyond just the written word.
            </li>
            <li>
              <strong className="text-indigo-600">Support for Writers:</strong>{" "}
              We provide resources, tips, and guidance for new and experienced
              writers alike. Our goal is to help you find your voice and grow
              your audience in a way that feels authentic and rewarding.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 relative">
            Why <span className="text-indigo-600">medium.community</span>?
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 transform -translate-y-3 scale-x-0 origin-left transition-transform duration-500 dark:bg-indigo-500"></div>
          </h2>
          <p className="text-lg leading-relaxed">
            In a world filled with fleeting social media posts and short-lived
            trends, <span className="text-indigo-600">medium.community</span>{" "}
            offers a space for thoughtful, well-crafted content that resonates.
            We value quality over quantity and believe in the power of words to
            shape understanding, spark curiosity, and build connections.
          </p>
        </section>

        <section id="join" className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-6 relative">
            Join Our Community
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 transform -translate-y-3 scale-x-0 origin-left transition-transform duration-500 dark:bg-indigo-500"></div>
          </h2>
          <p className="text-lg leading-relaxed">
            Are you ready to share your story? Join{" "}
            <span className="text-indigo-600">medium.community</span> today and
            become part of a growing network of writers and readers who are
            passionate about sharing knowledge, ideas, and experiences. Your
            story could inspire someone else, spark a conversation, or even
            change a life.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
