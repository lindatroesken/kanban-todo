import './App.css'
import Header from './components /Header'
import InputNewToDo from './components /InputNewToDo'
import Kanban from './components /Kanban'
import { useEffect, useState } from 'react'
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from './services/RequestServices'

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {
  const title = 'Kanban Board'

  const [toDos, setToDos] = useState([])
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    getAllToDos()
  }, [])

  const getAllToDos = () => {
    getRequest()
        .then(response => setToDos(response.data))
        .catch(err => console.log(err))
  }

  const saveInput = event => {
    // on every change of input text: set it to inputText
    setInputText(event.target.value)
  }

  const createNewToDo = () => {
    // send a post request to create a new todoelement, followed by a get request to get the updated data
    postRequest(inputText).then(getAllToDos)
        .then(() => setInputText(""))
        .catch(err => console.error(err))
  }

  const deleteToDo = id => {
    // send a delete request followed by a get request to get the updated data
    deleteRequest(id)
        .then(getAllToDos)
        .catch(err => console.error(err))
  }

  const setNextStatus = event => {
    // Send a put request to update followed by a get request to get the updated data
    putRequest(event.target.value)
        .then(getAllToDos)
        .catch(err => console.error(err))
  }

  return (
      <Router>
    <div className="app">

      <header className="app__header">
        <Header title={title} />
      </header>
      <Switch>
        <Route exact path="/">
              <main className="app__main">
                  <InputNewToDo
                    onCreate={createNewToDo}
                    inputText={inputText}
                    saveInput={saveInput}
                  />
                  <Kanban
                    toDos={toDos}
                    onChange={setNextStatus}
                    onDelete={deleteToDo}
                  />
              </main>
        </Route>
        <Route path="/details">
          <h1>Details</h1>
        </Route>
        <Route path="/">
          <Redirect path="/"></Redirect>
        </Route>
      </Switch>
      <footer className="app__footer">
        <p>Freitagsaufgabe Gruppe 3 (Alexander, Guillermo, Linda, Robert), Stand: August, 8th 2021</p>
      </footer>

    </div>
      </Router>
  )
}

export default App
