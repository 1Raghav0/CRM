import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGlobe,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Resources */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3 text-sm uppercase">
            Resources
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">About nomo</li>
            <li className="hover:text-blue-600 cursor-pointer">Education hub</li>
            <li className="hover:text-blue-600 cursor-pointer">nomo Academy</li>
            <li className="hover:text-blue-600 cursor-pointer">
              How to copy-trade?
            </li>
          </ul>
        </div>

        {/* Legal Info */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3 text-sm uppercase">
            Legal info
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Risk disclosure</li>
            <li className="hover:text-blue-600 cursor-pointer">Documentation</li>
            <li className="hover:text-blue-600 cursor-pointer">Fees</li>
            <li className="hover:text-blue-600 cursor-pointer">Market hours</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3 text-sm uppercase">
            Help & support
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-600">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer text-lg" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer text-lg" />
            <FaGlobe className="hover:text-blue-500 cursor-pointer text-lg" />
            <FaTiktok className="hover:text-black cursor-pointer text-lg" />
            <FaTelegramPlane className="hover:text-blue-400 cursor-pointer text-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">
        <p className="max-w-5xl">
          © 2025 nomotrade.com Incorporated, registered address: Ground Floor,
          The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, LC01
          401, Saint Lucia. Business reg. no. 2023-00509
        </p>

        <p className="mt-2">
          <a
            href="mailto:support@nomotrade.com"
            className="text-blue-600 hover:underline"
          >
            support@nomotrade.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
