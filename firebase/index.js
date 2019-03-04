import { firebase } from '@firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  projectId: 'vue-fire-store',
  databaseURL: 'https://vue-fire-store.firebaseio.com',
}

export const db = firebase.initializeApp(config).firestore()