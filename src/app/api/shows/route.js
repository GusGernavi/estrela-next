import { db } from '@/app/config/configFirebase'
import { Timestamp, addDoc, collection } from 'firebase/firestore'

export function POST() {
  const objects = [
    {
      titulo: 'Audição 5 pontas',
      dataInicio: Timestamp.fromDate(new Date('2023-7-22T21:00:00')),
      dataFim: Timestamp.fromDate(new Date('2023-07-23T04:00:00')),
      image: {
        src: 'https://scontent.fcgh16-1.fna.fbcdn.net/v/t39.30808-6/356930333_1662882857567701_1930681474542122852_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeFJ6hqB4Ym2nHD-qFJWEpuoO6YuW2_8fyM7pi5bb_x_I-GF6cbh4qmAaoqjgkYemQsj01Y6shgH1Yl9J82DtUIc&_nc_ohc=DlW5AreATt4AX-LM6Y9&_nc_ht=scontent.fcgh16-1.fna&oh=00_AfBM_mmuQuLofAhE1Du6atDt6VOe7f-2Kgg6fJWMRtZ-1A&oe=65E9D849',
        title: 'Audição Estrela',
      },
      local:
        'Avenida Jerimanduba, 175, Jaraguá, São Paulo - SP, 05181-000, Brasil',
      linkCompra:
        'https://www.sympla.com.br/evento/audicao-ep-5pontas/2012778?fbclid=IwAR0xtrrrTfR-pxz0Dl_toUto_pXkpPvrSRXqcctWUcS2YD4tbJd1CTUAkcs&referrer=l.facebook.com',
      linkLocal:
        'https://www.google.com/maps/place/Av.+Jerimanduba,+175+-+Jaraguá,+São+Paulo+-+SP,+05181-000/@-23.4548418,-46.7425255,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefbf3854156cd:0x528826bd7f4803be!8m2!3d-23.4548418!4d-46.7425255!16s%2Fg%2F11c1bvsg66?entry=ttu',
    },
  ]

  objects.forEach((obj) => {
    addDoc(collection(db, 'show'), obj)
  })

  return Response.json({
    sucess: true,
  })
}
