'use client'

import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Real Estate Market Trends',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const initialData = {
  labels,
  datasets: [
    {
      label: 'Average Price',
      data: [65, 59, 80, 81, 56, 55, 70],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Number of Listings',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export default function MarketTrends() {
  const [data] = useState(initialData)

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Market Trends</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <Line options={options} data={data} />
      </div>
    </section>
  )
}

