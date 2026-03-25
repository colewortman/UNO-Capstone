/**
 * @file FooterSection.tsx
 * @description Clean minimal footer with subtle orbit animation and structured layout.
 */

"use client";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 pb-12 pt-20 text-white md:px-10 lg:px-16">
      {/* Subtle orbit animation */}
      <div className="relative mx-auto mb-16 flex h-24 w-24 items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border border-white/10" />
        <div className="orbit absolute h-24 w-24">
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white/80" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold">Bar-IQ</h3>
          <p className="mt-4 text-sm text-white/50">
            Faster inventory. Better visibility. Less loss.
          </p>
        </div>

        {/* Product */}
        <div>
          <p className="text-xs uppercase text-white/40">Product</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="#" className="hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                ROI Calculator
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="text-xs uppercase text-white/40">Resources</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase text-white/40">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="#" className="hover:text-white">
                Book a Demo
              </a>
            </li>
            <li>
              <a href="mailto:hello@bar-iq.io" className="hover:text-white">
                hello@bar-iq.io
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
        <p>© 2026 Bar-IQ</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .orbit {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </footer>
  );
}
