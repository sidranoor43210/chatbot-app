import React, { ReactNode } from "react";
import Navbar from "../app/components/Navbar";
import ChatBox from "../app/components/ChatBox"; // Import ChatBox
import Footer from "../app/components/footer"; // Import Footer
import "./globals.css"; // Global styles for the layout

export const metadata = {
  title: "Your Page Title",
  description: "Description of your page",
};

// Define the type of the props, including children
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className="bg-white">
      {/* Navbar */}
      <Navbar />
      
      <main className="flex flex-col h-screen p-5">
        {/* ChatBox */}
        <ChatBox />
      </main>
      
      {/* Footer */}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
