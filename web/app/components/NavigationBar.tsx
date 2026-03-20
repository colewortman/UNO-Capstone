"use client";

import Link from "next/link";
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

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}

        {/* Navigation */}
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
                        <NavigationMenuLink href="/#roi-calculator" render={<Link href="/#roi-calculator" />}>
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
    </header>
  );
}
