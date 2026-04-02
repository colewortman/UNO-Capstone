"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoWhite from "@/public/lv-logo-white-v2.svg";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuPositioner,
  NavigationMenuPopup,
  NavigationMenuArrow,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex h-5 w-6 flex-col justify-between">
      <span
        className={`block h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
          open ? "translate-y-[9px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-current transition-all duration-150 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
          open ? "-translate-y-[9px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/#roi-calculator", label: "ROI Calculator" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/faq", label: "Contact" },
];

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToHash = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") ?? "";
    const hash = href.includes("#") ? href.split("#")[1] : null;
    if (hash) {
      const isHomePage =
        window.location.pathname === "/" ||
        window.location.pathname === "/UNO-Capstone" ||
        window.location.pathname === "/UNO-Capstone/";
      if (isHomePage) {
        e.preventDefault();
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      } else {
        setTimeout(() => {
          const el = document.getElementById(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Logo / Brand */}
          <Link href="/" className="shrink-0">
            <Image
              src={logoWhite}
              alt="Liquor Vision logo"
              width={160}
              height={53}
              className="w-[120px] sm:w-[140px] md:w-[160px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  <NavigationMenuPositioner>
                    <NavigationMenuPopup>
                      <NavigationMenuArrow />
                      <NavigationMenuContent>
                        <ul className="grid w-100 gap-1 p-2 md:w-125 md:grid-cols-2">
                          <li>
                            <NavigationMenuLink href="/" render={<Link href="/" />}>
                              <span className="font-medium">All Services</span>
                              <span className="text-muted-foreground text-xs">
                                View our full range of offerings
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/#roi-calculator"
                              render={
                                <Link
                                  href="/#roi-calculator"
                                  onClick={scrollToHash}
                                />
                              }
                            >
                              <span className="font-medium">ROI Calculator</span>
                              <span className="text-muted-foreground text-xs">
                                See how much Bar IQ can save your business
                              </span>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuPopup>
                  </NavigationMenuPositioner>
                </NavigationMenuItem>

                {/* Pricing link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/pricing"
                    render={<Link href="/pricing" />}
                    className={navigationMenuTriggerStyle()}
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* FAQ link */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>FAQ</NavigationMenuTrigger>
                  <NavigationMenuPositioner>
                    <NavigationMenuPopup>
                      <NavigationMenuArrow />
                      <NavigationMenuContent>
                        <ul className="grid w-100 gap-1 p-2 md:w-125 md:grid-cols-2">
                          <li>
                            <NavigationMenuLink
                              href="/faq"
                              render={<Link href="/faq" />}
                            >
                              <span className="font-medium">
                                Frequently Asked Questions
                              </span>
                              <span className="text-muted-foreground text-xs">
                                View answers to our most frequently asked questions
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/faq"
                              render={<Link href="/faq" />}
                            >
                              <span className="font-medium">Contact</span>
                              <span className="text-muted-foreground text-xs">
                                View our contact information
                              </span>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuPopup>
                  </NavigationMenuPositioner>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Spacer to keep nav centered (desktop only) */}
          <div className="hidden w-[160px] shrink-0 lg:block" />

          {/* Mobile hamburger button */}
          <button
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <HamburgerIcon open={mobileMenuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — outside <header> so sticky/backdrop-blur don't trap it */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-[100] overflow-y-auto border-t border-white/10 bg-black lg:hidden">
          <nav className="flex flex-col px-6 py-6">
            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.includes("#")) {
                    scrollToHash(e);
                  }
                  setMobileMenuOpen(false);
                }}
                className="border-b border-white/10 py-4 text-lg font-medium text-white transition-colors hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
