import { format } from "date-fns";

export const formatarDataEHora = (date: Date) => {
  // Verifica se o parâmetro é uma instância de Date
  if (!(date instanceof Date)) {
    throw new Error("O argumento deve ser uma instância de Date.");
  }

  // Formata a data e a hora usando a função format do date-fns
  const dataHoraFormatada = format(date, "dd/MM/yyyy HH:mm");

  return dataHoraFormatada;
};

export const formataLinkGoogleAgenda = (
  titulo: string,
  dataInicioEvento: Date,
  dataFimEvento: Date,
  localEvento: string
) => {
  const dataInicio = format(dataInicioEvento, "yyyyMMdd'T'HHmmss");
  const dataFim = format(dataFimEvento, "yyyyMMdd'T'HHmmss");

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${dataInicio}/${dataFim}&details=Vou ir: ${titulo}&location=${localEvento}`;
};
