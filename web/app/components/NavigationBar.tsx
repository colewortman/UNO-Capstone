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
  { href: "/#hero", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/premium", label: "Premium" },
  { href: "/integration", label: "Integration" },
  { href: "/faq", label: "FAQ" },
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
      <div
        className={`w-full bg-linear-to-r from-blue-500 to-blue-400 px-4 py-2 text-center text-xs font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] sm:text-sm ${
          mobileMenuOpen ? "hidden lg:block" : ""
        }`}
      >
        Try a 1-month Free Trial
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-normal lg:px-10">
          {/* Logo / Brand */}
          <Link href="/" className="shrink-0 justify-self-start">
            <Image
              src={logoWhite}
              alt="Liquor Vision logo"
              width={160}
              height={53}
              className="w-[120px] sm:w-[140px] md:w-[160px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:justify-center">
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
                            <NavigationMenuLink
                              href="/#hero"
                              render={
                                <Link href="/#hero" onClick={scrollToHash} />
                              }
                            >
                              <span className="font-medium">Home</span>
                              <span className="text-muted-foreground text-xs">
                                Back to the top
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/#social-proof"
                              render={
                                <Link
                                  href="/#social-proof"
                                  onClick={scrollToHash}
                                />
                              }
                            >
                              <span className="font-medium">Social Proof</span>
                              <span className="text-muted-foreground text-xs">
                                Trusted by top establishments
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/#problem-solution"
                              render={
                                <Link
                                  href="/#problem-solution"
                                  onClick={scrollToHash}
                                />
                              }
                            >
                              <span className="font-medium">
                                Problem & Solution
                              </span>
                              <span className="text-muted-foreground text-xs">
                                The challenges we solve
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/#product-demo"
                              render={
                                <Link
                                  href="/#product-demo"
                                  onClick={scrollToHash}
                                />
                              }
                            >
                              <span className="font-medium">Product Demo</span>
                              <span className="text-muted-foreground text-xs">
                                See Bar IQ in action
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/#testimonials"
                              render={
                                <Link
                                  href="/#testimonials"
                                  onClick={scrollToHash}
                                />
                              }
                            >
                              <span className="font-medium">Testimonials</span>
                              <span className="text-muted-foreground text-xs">
                                What our customers say
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/#feature-highlights"
                              render={
                                <Link
                                  href="/#feature-highlights"
                                  onClick={scrollToHash}
                                />
                              }
                            >
                              <span className="font-medium">
                                Feature Highlights
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Key capabilities at a glance
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/#comparisons"
                              render={
                                <Link
                                  href="/#comparisons"
                                  onClick={scrollToHash}
                                />
                              }
                            >
                              <span className="font-medium">
                                Competitor Comparisons
                              </span>
                              <span className="text-muted-foreground text-xs">
                                See how we stack up
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
                              <span className="font-medium">
                                ROI Calculator
                              </span>
                              <span className="text-muted-foreground text-xs">
                                See how much Bar IQ can save your business
                              </span>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/#final-cta"
                              render={
                                <Link
                                  href="/#final-cta"
                                  onClick={scrollToHash}
                                />
                              }
                            >
                              <span className="font-medium">Get Started</span>
                              <span className="text-muted-foreground text-xs">
                                Ready to transform your bar?
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

                {/* Premium link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/premium"
                    render={<Link href="/premium" />}
                    className={navigationMenuTriggerStyle()}
                  >
                    Premium
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Integration link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/integration"
                    render={<Link href="/integration" />}
                    className={navigationMenuTriggerStyle()}
                  >
                    Integration
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* FAQ link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/faq"
                    render={<Link href="/faq" />}
                    className={navigationMenuTriggerStyle()}
                  >
                    FAQ
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA — right side */}
          <div className="hidden items-center gap-3 justify-self-end lg:flex">
            <Link
              href="/signup"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
            <Link
              href="/signin"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Sign In
            </Link>
          </div>

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
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Started
              </Link>
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md border border-white/20 px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
