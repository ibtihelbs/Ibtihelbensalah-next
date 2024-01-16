import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="mailto:your.email@example.com">Email</a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm">
          © 2024 ibtihel ben salah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
