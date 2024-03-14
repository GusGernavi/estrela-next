import { Show } from '@/app/(site)/@types'
import { db } from '@/app/config/configFirebase'
import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  getDocs,
} from 'firebase/firestore'

export async function getShows() {
  const colecao = collection(db, 'show')
  const querySnapshot = await getDocs(colecao.withConverter(showConverter))
  const result = querySnapshot.docs.map((doc) => doc.data() as Show)
  return result
}

const showConverter = {
  toFirestore: (show: Show) => {
    return {
      ...show,
    }
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
    options: SnapshotOptions,
  ) => {
    const data = snapshot.data(options)
    return {
      ...data,
      id: snapshot.id,
      dataInicio: data.dataInicio.toDate(),
      dataFim: data.dataFim.toDate(),
    } as Show
    // return new City(data.name, data.state, data.country)
  },
}
