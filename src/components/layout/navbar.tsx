import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center px-4 py-6">
      <div className="flex items-center justify-between w-full max-w-[1920px]">
        {/* Logo (left) */}
        <div className="flex items-center">
          <span className="font-extrabold text-3xl tracking-tight text-primary">LOGO</span>
        </div>
        {/* Navigation Links (right) */}
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" >
                <NavigationMenuLink className="px-6 py-3 text-lg font-semibold">Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/investment">
                <NavigationMenuLink className="px-6 py-3 text-lg font-semibold">Investment</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/products">
                <NavigationMenuLink className="px-6 py-3 text-lg font-semibold">Products</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/solutions">
                <NavigationMenuLink className="px-6 py-3 text-lg font-semibold">Solutions</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/technology">
                <NavigationMenuLink className="px-6 py-3 text-lg font-semibold">Technology</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about">
                <NavigationMenuLink className="px-6 py-3 text-lg font-semibold">About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <NavigationMenuLink className="px-6 py-3 text-lg font-semibold">Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
