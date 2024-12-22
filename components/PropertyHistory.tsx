import { Clock, DollarSign, PenToolIcon as Tool } from 'lucide-react'

interface HistoryEvent {
  date: string
  type: 'sale' | 'renovation' | 'other'
  description: string
  price?: string
}

interface PropertyHistoryProps {
  events: HistoryEvent[]
}

export default function PropertyHistory({ events }: PropertyHistoryProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'sale':
        return <DollarSign className="h-5 w-5 text-green-500" />
      case 'renovation':
        return <Tool className="h-5 w-5 text-orange-500" />
      default:
        return <Clock className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Property History</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
            <div className="flex-shrink-0 mt-1">{getEventIcon(event.type)}</div>
            <div>
              <p className="font-semibold">{event.date}</p>
              <p>{event.description}</p>
              {event.price && (
                <p className="text-green-600 font-semibold mt-1">Sale Price: {event.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

