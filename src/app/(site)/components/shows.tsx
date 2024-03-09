import { Carter_One as Carter } from 'next/font/google'
import { Show } from './@types'
import { CardShow } from './card-show'

const carterOne = Carter({ subsets: ['latin'], weight: '400' })

export async function Shows() {
  const showsResponse = await fetch('http://localhost:3000/api/shows')
  const shows: Show[] = await showsResponse.json()

  return (
    <div className="bg-primary bg-opacity-50">
      <h3
        className={`py-4 text-center text-3xl font-semibold text-dark ${carterOne.className}`}
      >
        Shows
      </h3>
      <div className="flex justify-around gap-5 px-5 py-5">
        {shows.map((show) => (
          <CardShow key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}
