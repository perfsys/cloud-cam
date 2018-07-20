import api from '../../api/contacts'

// initial state
const state = {
  all: []
}

// getters
const getters = {

  contactsAll: state => state.all

}

// actions
const actions = {

  contactsGetAll ({commit}) {
    api.getAll()
      .then(contacts => commit('setContacts', contacts))
  },

  contactsGetAllInGroup ({state, commit, dispatch}, item) {
    api.getAllInGroup(item)
      .then(contacts => commit('setContacts', contacts))
  },

  contactsDeleteOne ({state, commit, dispatch}, item) {
    let group = item.group_id
    let name = item.name

    if (group && name) {
      api.deleteOne(group, name)
        .then(() => dispatch('contactsGetAll'))
    }
  },

  contactsSaveOne ({state, commit, dispatch}, item) {
    return new Promise((resolve, reject) => {
      api.saveOne(item)
        .then(() => {
          // refresh contacts list
          dispatch('contactsGetAll')
          // callback
          resolve()
        }, reject)
    })
  },

  contactsUpdateOne ({state, commit, dispatch}, item) {
    return new Promise((resolve, reject) => {
      api.updateOne(item)
        .then(() => {
          // refresh contacts list
          dispatch('contactsGetAll')
          // callback
          resolve()
        }, reject)
    })
  }

}

// mutations
const mutations = {

  setContacts (state, contacts) {
    state.all = contacts
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
