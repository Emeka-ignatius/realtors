'use client'

import { useState, useEffect } from 'react'
import { DollarSign, Percent, Calendar } from 'lucide-react'

interface MortgageCalculatorProps {
  propertyPrice: number
}

export default function MortgageCalculator({ propertyPrice }: MortgageCalculatorProps) {
  const [price, setPrice] = useState(propertyPrice)
  const [downPayment, setDownPayment] = useState(propertyPrice * 0.2)
  const [interestRate, setInterestRate] = useState(3.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  useEffect(() => {
    const principal = price - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    setMonthlyPayment(payment)
  }, [price, downPayment, interestRate, loanTerm])

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Mortgage Calculator</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Property Price
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">
            Down Payment
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="downPayment"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
            Interest Rate
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Percent className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step="0.1"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
            Loan Term (years)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Estimated Monthly Payment</h3>
        <p className="text-3xl font-bold text-blue-600">
          ${monthlyPayment.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

