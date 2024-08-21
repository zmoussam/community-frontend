import React from "react";
import Header from "@/components/navbar/Header"; // Assuming you have a Header component
import Footer from "@/components/footer/Footer"; // Assuming you have a Footer component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
