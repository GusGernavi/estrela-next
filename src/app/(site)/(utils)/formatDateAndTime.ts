import { format } from 'date-fns'

export const formatDateAndTime = (dateFull: string) => {
  const dataHoraFormatada = format(
    returnDateObject(dateFull),
    'dd/MM/yyyy HH:mm',
  )

  return dataHoraFormatada
}

export const returnDateObject = (dateFull: string) => {
  const [date, time] = dateFull.split(' ')

  const dateIso = `${date}T${time}:00`

  return new Date(dateIso)
}
