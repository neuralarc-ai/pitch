'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { User } from '@supabase/supabase-js';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

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

  const lineVariants = {
    closed: (i: number) => ({
      rotate: 0,
      y: i === 0 ? -4 : 4,
      opacity: 1,
    }),
    open: (i: number) => ({
      rotate: i === 0 ? 45 : -45,
      y: 0,
      opacity: 1,
    }),
  };

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

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
        {/* Desktop Navigation Links (right) */}
        <div className="hidden xl:flex items-center gap-4">
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
          {user && (
            <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout">
              <LogOut className="w-6 h-6" />
            </Button>
          )}
        </div>

        {/* Mobile Navigation (Hamburger Icon + Dropdown) */}
        <div className="xl:hidden flex items-center">
          <DropdownMenu onOpenChange={setIsMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <button className="py-5 px-4 focus:outline-none relative flex flex-col justify-center items-center rounded-md bg-[#2F2C28] shadow-[0_4px_0px_0px_#C6AEA3]">
                {[0, 1].map((i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={lineVariants}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="block w-6 h-[2px] bg-white rounded-full"
                  />
                ))}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="sm:max-w-md min-w-0 w-full mt-2 p-4 bg-background shadow-lg rounded-md">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>
                      <span className={`text-lg font-semibold ${pathname === link.href ? 'text-primary border-b-2 border-primary' : 'text-gray-800'} hover:text-primary transition-colors block w-full text-center`}>
                        {link.label}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                {user && (
                  <DropdownMenuItem asChild>
                    <Button variant="outline" className="w-full mt-2" onClick={handleLogout}>
                      <LogOut className="w-5 h-5 mr-2" /> Logout
                    </Button>
                  </DropdownMenuItem>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
}
