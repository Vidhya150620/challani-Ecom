

import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import paymentMethod from "../assets/footerAssests/payments.png";

export const Footer = () => {
  return (
    <footer className="bg-[#B46B6F] text-white py-8 mt-9">
      <section className="max-w-[1400px] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col sm:flex-row flex-wrap justify-around gap-6">
          
          {/* Shop By Category */}
          <div>
            <h3 className="text-sm">SHOP BY CATEGORY</h3>
            <ul className="mt-2 space-y-3 text-[11px] font-light">
              <li>Aishwarya Collection</li>
              <li>Pendants</li>
              <li>Necklaces</li>
              <li>Earrings</li>
              <li>Bangles</li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="text-sm">CUSTOMER SERVICES</h3>
            <ul className="mt-2 space-y-3 text-[11px] font-light">
              <li>Create Account</li>
              <li>Login</li>
              <li>Ring Size Guide</li>
              <li>Return Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-sm">OUR COMPANY</h3>
            <ul className="mt-2 space-y-3 text-[11px] font-light">
              <li>About Us</li>
              <li>Customer Reviews</li>
            </ul>
          </div>

          {/* Find Us On */}
          <div>
            <h3 className="text-sm">FIND US ON</h3>
            <div className="flex space-x-3 mt-2 text-xl items-center cursor-pointer">
              <FaFacebookF />
              <FaInstagram />
              <FaPinterestP />
            </div>
            <div className="mt-3">
              <h4 className="text-[11px] font-light">PAYMENT METHOD</h4>
              <img
                src={paymentMethod}
                alt="Payment Methods"
                className="mt-2 w-48"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-[11px] font-light mt-6">
          © 2025 ARCKZ. All rights reserved.
        </div>
      </section>
    </footer>
  );
};
