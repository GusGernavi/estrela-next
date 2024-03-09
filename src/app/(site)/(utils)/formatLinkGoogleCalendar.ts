import { format } from 'date-fns'

export const formatLinkGoogleCalendar = (
  titulo: string,
  dataInicioEvento: Date,
  dataFimEvento: Date,
  localEvento: string,
) => {
  const dataInicio = format(dataInicioEvento, "yyyyMMdd'T'HHmmss")
  const dataFim = format(dataFimEvento, "yyyyMMdd'T'HHmmss")

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${dataInicio}/${dataFim}&details=Vou ir: ${titulo}&location=${localEvento}`
}
