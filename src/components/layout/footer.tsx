'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/agents", label: "Agents" },
    { href: "/investment-opportunity", label: "Investment Opportunity" },
    { href: "/technology", label: "Technology" },
    { href: "/team", label: "Team" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full rounded-t-2xl border-t-5 border-t-[#757372] flex justify-center bg-[#1E1E1E] text-white py-12 px-4"
    >
      <div className="w-full max-w-[1920px] flex flex-col items-center md:items-start">
        <div className="flex flex-col md:flex-row md:justify-between w-full mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start mb-12 md:mb-0">
            <Link href="/">
              <Image
                src="/images/neural-paths-footer.svg"
                alt="NeuralArc Logo"
                width={150} 
                height={60} 
                priority
                className="mb-2 object-contain"
              />
            </Link>
            <span className="text-base mt-2 text-white">Where data meets neural intelligence</span>
          </div>

          {/* Navigation Links and Contact */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 space-x-4 text-center md:text-left">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-nowrap">
                <span className="text-base font-medium text-white/80 hover:text-white transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="mailto:aniket.tapre@neuralarc.ai">
              <span className="text-base font-medium text-white/80 hover:text-white transition-colors">
                Contact
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-base text-[#AFAFAF] hover:text-white">
          <Link href="/responsible-ai">
            <span className="hover:text-white transition-colors">Responsible AI</span>
          </Link>
          <span>Copyright 2025. All rights reserved.</span>
        </div>
      </div>
    </motion.footer>
  );
}
