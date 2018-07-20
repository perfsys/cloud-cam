import {HTTP} from '../libs/http-common'

export default {

  /**
   * Get all contacts
   *
   * @returns {Promise<any>}
   */
  getAll () {
    return new Promise((resolve, reject) => {
      HTTP.get('/contacts')
        .then(response => resolve(response.data), reject)
    })
  },

  /**
   * Get all contacts in a group
   *
   * @param group group name
   * @returns {Promise<any>}
   */
  getAllInGroup (group) {
    return new Promise((resolve, reject) => {
      HTTP.get(`/contacts/${group}`)
        .then(response => resolve(response.data), reject)
    })
  },

  /**
   * Get one
   *
   * @param group group name
   * @param name name of the contact
   * @returns {Promise<any>}
   */
  getOne (group, name) {
    return new Promise((resolve, reject) => {
      HTTP.get(`/contacts/${group}/${name}`)
        .then(response => resolve(response.data), reject)
    })
  },

  /**
   * Delete One
   *
   * @param group group name
   * @param name name of the contact
   * @returns {AxiosPromise<any> | * | void}
   */
  deleteOne (group, name) {
    return HTTP.delete(`/contacts/${group}/${name}`)
  },

  /**
   * Create new Contact
   *
   * @param contact
   * @returns {AxiosPromise<any> | * | void}
   */
  saveOne (item) {
    return HTTP.post('/contacts', {
      group_id: item.group_id,
      name: item.name,
      source_id: item.source_id,
      first_name: item.first_name,
      last_name: item.last_name,
      type_id: item.type_id,
      status_id: item.status_id,
      company_name: item.company_name,
      company_www: item.company_www,
      position: item.position,
      facebook_link: item.facebook_link,
      twitter_link: item.twitter_link,
      linkedin_link: item.linkedin_link
    }
    )
  },

  /**
   * Update Contact
   *
   * @param contact
   * @returns {AxiosPromise<any> | * | void}
   */
  updateOne (item) {
    return HTTP.put(`/contacts/${item.group_id}/${item.name}`, {
        source_id: item.source_id,
        first_name: item.first_name,
        last_name: item.last_name,
        type_id: item.type_id,
        status_id: item.status_id,
        company_name: item.company_name,
        company_www: item.company_www,
        country_code: item.country_code,
        position: item.position,
        facebook_link: item.facebook_link,
        twitter_link: item.twitter_link,
        linkedin_link: item.linkedin_link
      }
    )
  }

}
