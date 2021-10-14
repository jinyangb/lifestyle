// import Client from './api'

import Client from './api'

export const UpdatePost = async (post_id, data) => {
  const res = await Client.put(`./discussions/${post_id}`, data)
  return res.data
}
