import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} TUP-Taguig | School Year 2024-2025
      </p>
    </footer>
  );
}

export default Footer;
