import Client from './api'

export const GetPosts = async () => {
  const res = await Client.get('/discussions')
  return res.data
}

export const CreatePost = async data => {
  const res = await Client.post('/discussions', data)
  return res.data
}

export const RemovePost = async discussionId => {
  const res = await Client.delete(`/discussions/${discussionId}`)
  return res.data
}
//
