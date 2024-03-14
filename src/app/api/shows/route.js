import { db } from '@/app/config/configFirebase'
import { addDoc, collection } from 'firebase/firestore'

export function POST() {
  const objects = [
    {
      url: 'https://www.instagram.com/p/CvfM6UPAWVQ/',
    },
    {
      url: 'https://www.instagram.com/p/C38c84FxC07/',
    },
    {
      url: 'https://www.instagram.com/p/C3GRvOtPqQo/?img_index=1',
    },
    {
      url: 'https://www.instagram.com/p/C2-maK1PsrI/',
    },
  ]

  objects.forEach((obj) => {
    addDoc(collection(db, 'post-instagram'), obj)
  })

  return Response.json({
    sucess: true,
  })
}
