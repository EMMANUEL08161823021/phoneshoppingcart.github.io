import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
        <p>
          <a href="#" className="text-white text-decoration-none mx-2">Privacy Policy</a>
          <a href="#" className="text-white text-decoration-none mx-2">Terms of Service</a>
          <a href="#" className="text-white text-decoration-none mx-2">Contact Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
