import { format } from 'date-fns'

export const formatDateAndTime = (dateFull: Date) => {
  const dataHoraFormatada = format(dateFull, 'dd/MM/yyyy HH:mm')

  return dataHoraFormatada
}

export const returnDateObject = (dateFull: string) => {
  console.log('Data', dateFull)

  const [date, time] = dateFull.split(' ')

  const dateIso = `${date}T${time}:00`

  return new Date(dateIso)
}
