import { vuexfireMutations } from 'vuexfire'
import { INotification } from '~/models/notification'

export interface IState {
  locale: string
  notification?: INotification
  locales: Array<string>
  conversations?: Map<string, any>
  users?:Map<string, any>
}

export const state = ():IState => ({
  locales: ['en', 'fr'],
  locale: 'fr',
  notification: undefined,
})

export const getters = {
  getNotification (state: IState) {
    return state.notification
  },
}

export const mutations = {
  ...vuexfireMutations,
  SET_NOTIFICATION: (state: IState, payload?: INotification) => {
    state.notification = payload
  },
}

export const actions = {
  showNotification (store: any, payload: any) {
    store.commit('SET_NOTIFICATION', payload)
  },
  hideNotification (store: any) {
    store.commit('SET_NOTIFICATION', undefined)
  },
}
