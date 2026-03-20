"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

export default function NavigationBar() {
  const pathname = usePathname();
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
  ];

  useEffect(() => {
    const activeIndex = links.findIndex((link) => link.href === pathname);
    const activeEl = linksRef.current[activeIndex];
    if (activeEl) {
      const parent = activeEl.closest("ul");
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        setIndicator({
          left: elRect.left - parentRect.left,
          width: elRect.width,
        });
      }
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        <ul className="relative flex gap-8">
          {links.map(({ href, label }, i) => (
            <li key={href}>
              <Link
                ref={(el) => { linksRef.current[i] = el; }}
                href={href}
                className="hover:text-gray-300 transition-colors pb-2"
              >
                {label}
              </Link>
            </li>
          ))}
          <span
            className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </ul>
      </div>
    </nav>
  );
}
