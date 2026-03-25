import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'
import ROICalculator from '@/app/components/ROICalculator'

vi.useFakeTimers()
afterEach(() => cleanup())

function flushTimers() {
  act(() => {
    vi.advanceTimersByTime(200)
  })
}

describe('ROICalculator', () => {
  it('renders all input labels', () => {
    render(<ROICalculator />)

    expect(screen.getByText('Annual Liquor Sales')).toBeInTheDocument()
    expect(screen.getByText('Monthly Hours Counting Bottles')).toBeInTheDocument()
    expect(screen.getByText('Average Hourly Wage')).toBeInTheDocument()
  })

  it('renders four sliders', () => {
    render(<ROICalculator />)
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(4)
  })

  it('renders all pricing tier buttons', () => {
    render(<ROICalculator />)

    expect(screen.getByRole('button', { name: /Starter/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Essential/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Professional/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Advanced/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Top Shelf/ })).toBeInTheDocument()
  })

  it('renders result section headings', () => {
    render(<ROICalculator />)

    expect(screen.getByText('Annual Revenue Boost')).toBeInTheDocument()
    expect(screen.getByText('Annual Cost')).toBeInTheDocument()
    expect(screen.getByText('Annual Net Savings')).toBeInTheDocument()
    expect(screen.getByText('Return on Investment')).toBeInTheDocument()
    expect(screen.getByText(/Total Annual Savings/)).toBeInTheDocument()
  })

  it('displays default slider values', () => {
    render(<ROICalculator />)

    // Default pour cost: 24%
    expect(screen.getByText('24.0%')).toBeInTheDocument()
    // Default hours: 8
    expect(screen.getByText('8 hrs/mo')).toBeInTheDocument()
    // Default wage: $20/hr
    expect(screen.getByText('$20/hr')).toBeInTheDocument()
  })

  it('updates displayed value when annual sales slider changes', () => {
    render(<ROICalculator />)

    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[0], { target: { value: '500000' } })

    expect(screen.getByText('$500,000')).toBeInTheDocument()
  })

  it('updates displayed value when pour cost slider changes', () => {
    render(<ROICalculator />)

    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[1], { target: { value: '15' } })

    expect(screen.getByText('15.0%')).toBeInTheDocument()
  })

  it('updates hours slider display', () => {
    render(<ROICalculator />)

    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[2], { target: { value: '40' } })

    expect(screen.getByText('40 hrs/mo')).toBeInTheDocument()
  })

  it('updates wage slider display', () => {
    render(<ROICalculator />)

    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[3], { target: { value: '50' } })

    expect(screen.getByText('$50/hr')).toBeInTheDocument()
  })

  it('calculates correct metrics for known inputs', () => {
    render(<ROICalculator />)

    const sliders = screen.getAllByRole('slider')

    // Set: sales=$200,000, pourCost=20%, hours=10, wage=$25
    fireEvent.change(sliders[0], { target: { value: '200000' } })
    fireEvent.change(sliders[1], { target: { value: '20' } })
    fireEvent.change(sliders[2], { target: { value: '10' } })
    fireEvent.change(sliders[3], { target: { value: '25' } })

    flushTimers()

    // currentPourCostDollars = 200000 * 0.20 = $40,000
    // annualRevenueBoosted = 40000 * 0.25 = $10,000
    // $200k sales → Starter ($79/mo) → annualCost = $948
    // laborSavings = 10 * 25 * 12 = $3,000
    // annualSavings = 10000 - 948 + 3000 = $12,052
    const allText = document.body.textContent ?? ''
    expect(allText).toContain('$40,000')  // pour cost
    expect(allText).toContain('$10,000')  // revenue boost
    expect(allText).toContain('$948')     // annual cost
    expect(allText).toContain('$12,052')  // net savings
  })

  it('clicking a tier button updates the annual cost', () => {
    render(<ROICalculator />)

    const essentialBtn = screen.getByRole('button', { name: /Essential/ })
    fireEvent.click(essentialBtn)

    flushTimers()

    // Essential tier is $149/mo = $1,788/yr
    expect(document.body.textContent).toContain('$1,788')
  })

  it('shows the summary card with selected tier name', () => {
    render(<ROICalculator />)

    expect(screen.getByText(/Total Annual Savings/)).toBeInTheDocument()
    expect(screen.getByText(/Using the Starter plan/)).toBeInTheDocument()
  })
})

describe('ROICalculator tier auto-selection', () => {
  it('selects Starter for sales under $250k', () => {
    render(<ROICalculator />)
    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[0], { target: { value: '240000' } })
    flushTimers()

    // Starter = $79/mo = $948/yr
    expect(document.body.textContent).toContain('$948')
    expect(document.body.textContent).toContain('Starter')
  })

  it('selects Essential for sales $250k-$749k', () => {
    render(<ROICalculator />)
    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[0], { target: { value: '500000' } })
    flushTimers()

    // Essential = $149/mo = $1,788/yr
    expect(document.body.textContent).toContain('$1,788')
  })

  it('selects Professional for sales $750k-$1.99M', () => {
    render(<ROICalculator />)
    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[0], { target: { value: '1000000' } })
    flushTimers()

    expect(document.body.textContent).toContain('$3,588')
  })

  it('selects Advanced for sales $2M-$4.99M', () => {
    render(<ROICalculator />)
    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[0], { target: { value: '3000000' } })
    flushTimers()

    expect(document.body.textContent).toContain('$7,188')
  })

  it('selects Top Shelf for sales $5M+', () => {
    render(<ROICalculator />)
    const sliders = screen.getAllByRole('slider')
    fireEvent.change(sliders[0], { target: { value: '7000000' } })
    flushTimers()

    expect(document.body.textContent).toContain('$14,388')
  })
})
