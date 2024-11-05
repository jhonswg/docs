import React from 'react';
import { Linkedin, Github, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-500 mb-4">Jhonswg</h3>
          <p className="text-gray-400 mb-4">
            Operating nodes for blockchain projects, always up to date with industry developments, and eager to contribute to the advancement of blockchain technology through efficient node operations.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Send size={20} />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Services</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Staking</li>
            <li>IBC Relayer</li>
            <li>Monitoring</li>
            <li>Rpc Endpoint</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Support</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Feedback & Bug Report</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 mb-2">Feel free to reach out</p>
          <a href="mailto:me@jhonswg.com" className="text-emerald-500 hover:underline">
            me@jhonswg.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
