'use client'
import Image from 'next/image'
import Link from 'next/link'
import { formatDateAndTime } from '../(utils)/formatDateAndTime'
import { formatLinkGoogleCalendar } from '../(utils)/formatLinkGoogleCalendar'
import { Show } from '../@types'

export function CardShow({
  show: { dataFim, dataInicio, image, linkCompra, linkLocal, local, titulo },
}: {
  show: Show
}) {
  const imageLoader = () => {
    return image.src
  }
  return (
    <div className="overflow-hidden rounded-lg">
      <div>
        <Image
          className="w-full overflow-hidden"
          loader={imageLoader}
          src={'capa.jpg'}
          alt={image.alt}
          width={400}
          height={300}
          quality={10}
        />
      </div>
      <div className="flex flex-col items-center bg-white py-3">
        <h4 className="text-lg font-semibold">{titulo}</h4>
        <Link
          target="_blank"
          href={formatLinkGoogleCalendar(titulo, dataInicio, dataFim, local)}
          className="py-3 uppercase text-secondary hover:text-primary"
        >
          Marcar na Agenda
        </Link>
        <div className="flex w-full flex-col gap-3 px-3 text-left">
          <div>
            <p className="font-semibold">Início:</p>
            <p>{formatDateAndTime(dataInicio)}</p>
          </div>
          <div>
            <p className="font-semibold">Fim:</p>
            <p>{formatDateAndTime(dataFim)}</p>
          </div>
          <div>
            <p className="font-semibold">Local:</p>
            <Link
              target="_blank"
              href={linkLocal}
              className="text-secondary hover:text-primary"
            >
              {local}
            </Link>
          </div>
        </div>
        <Link
          target="_blank"
          href={linkCompra}
          className="mt-5 rounded-md border-2 border-secondary bg-white px-4 py-2 text-sm uppercase text-secondary transition-all hover:border-primary hover:text-primary"
        >
          Comprar Ingresso
        </Link>
      </div>
    </div>
  )
}
