'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/investment-opportunity", label: "Investment Opportunity" },
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/agents", label: "Agents" },
    { href: "/technology", label: "Technology" },
    { href: "/responsible-ai", label: "Responsible AI" },
    { href: "/team", label: "Team" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full flex justify-center px-4 py-6"
    >
      <div className="flex items-center justify-between w-full max-w-[1920px]">
        {/* Logo (left) */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/neural-arc-logo.svg"
              alt="NeuralArc Logo"
              width={150} 
              height={40} 
              priority
            />
          </Link>
        </div>
        {/* Navigation Links (right) */}
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} passHref>
                  <NavigationMenuLink 
                    className={`px-6 py-3 rounded-none text-lg font-semibold ${pathname === link.href ? 'border-b-2 border-primary' : ''}`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.nav>
  );
}
