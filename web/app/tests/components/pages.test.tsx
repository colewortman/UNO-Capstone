import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

// Mock next/link to render a plain anchor
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

import PricingPage from '@/app/pricing/page'
import FAQPage from '@/app/faq/page'

afterEach(() => cleanup())

describe('Pricing Page', () => {
  it('renders the heading', () => {
    render(<PricingPage />)
    expect(screen.getByRole('heading', { name: 'Pricing' })).toBeInTheDocument()
  })

  it('has a link back to home', () => {
    render(<PricingPage />)
    const link = screen.getByRole('link', { name: 'Back to Home' })
    expect(link).toHaveAttribute('href', '/')
  })
})

describe('FAQ Page', () => {
  it('renders the heading', () => {
    render(<FAQPage />)
    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
  })

  it('has a link back to home', () => {
    render(<FAQPage />)
    const link = screen.getByRole('link', { name: 'Back to Home' })
    expect(link).toHaveAttribute('href', '/')
  })
})
