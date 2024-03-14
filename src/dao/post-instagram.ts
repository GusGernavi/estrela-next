import { PostInstagram } from '@/app/(site)/@types'
import { db } from '@/app/config/configFirebase'
import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
    collection,
    getDocs,
} from 'firebase/firestore'

export async function getPostInstagram() {
  const colecao = collection(db, 'post-instagram')
  const querySnapshot = await getDocs(
    colecao.withConverter(postInstagramConverter),
  )
  const result = querySnapshot.docs.map((doc) => doc.data() as PostInstagram)
  return result
}

const postInstagramConverter = {
  toFirestore: (post: PostInstagram) => {
    return {
      ...post,
    }
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
    options: SnapshotOptions,
  ) => {
    const data = snapshot.data(options)
    return {
      ...data,
    } as PostInstagram
  },
}
