import { firebaseAction } from 'vuexfire'
import { todos } from '../firebase/collections'

const actions = {
  subscribeToAllTodos: firebaseAction(({ bindFirebaseRef }) => {
    return bindFirebaseRef('todos', todos)
  }),
}