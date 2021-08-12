import axios from 'axios'

const PATH = '/api/todo/'

export const getRequest = () => axios.get(PATH)

export const getToDoById = (id) => axios.get(`${PATH}${id}`).then(response => response.data)

export const putRequest = id =>
  axios({
    method: 'put',
    url: `${PATH}${id}`,
    data: {},
  })

export const putUpdateRequest = (todo) => axios.put(`${PATH}${todo.id}/edit`, todo)

export const postRequest = inputText =>
  axios
    .post(PATH, {
      description: inputText,
    })

export const deleteRequest = id =>
  axios.delete(`${PATH}${id}`)
