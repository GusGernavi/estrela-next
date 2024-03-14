import { getShows } from '@/dao/show'
import { Carter_One as Carter } from 'next/font/google'
import { Show } from '../@types'
import { CardShow } from './card-show'

const carterOne = Carter({ subsets: ['latin'], weight: '400' })

export async function Shows() {
  const showsResponse = getShows()
  const shows: Show[] = await showsResponse.then((data) => data)

  return (
    <div className="bg-primary bg-opacity-50">
      <h3
        className={`py-4 text-center text-3xl font-semibold text-dark ${carterOne.className}`}
      >
        Shows
      </h3>
      <div className="grid grid-cols-1 space-y-5 p-5 md:grid-cols-5 md:space-x-5 md:space-y-0">
        {shows.map((show) => (
          <CardShow key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}
