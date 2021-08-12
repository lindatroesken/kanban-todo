import Header from './components/Header'
import { useEffect, useState } from 'react'
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest, putUpdateRequest,
} from './services/RequestServices'

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SingleStatusPage from "./pages/SingleStatusPage";
import PageLayout from "./components/PageLayout";
import Footer from "./components/Footer";
import InputNewToDo from "./components/InputNewToDo";
import EditPage from "./pages/EditPage";

export default function App() {
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

  const updateToDo = todo => {
    return putUpdateRequest(todo).then(getAllToDos).catch(err => console.error(err))
  }

  return (
      <Router>
    <PageLayout>
      <Header title={title} />
      <Switch>
        <Route exact path="/">
          <InputNewToDo onCreate={createNewToDo} inputText={inputText} saveInput={saveInput}/>
            <HomePage toDos={toDos} onChange={setNextStatus} onDelete={deleteToDo} onCreate={createNewToDo} inputText={inputText} saveInput={saveInput}/>
        </Route>
        <Route path="/board/:slugStatus">
          <InputNewToDo onCreate={createNewToDo} inputText={inputText} saveInput={saveInput}/>
          <SingleStatusPage todos={toDos} onDelete = {deleteToDo} onChange={setNextStatus}/>
      </Route>
        <Route path="/details/:id">
          <InputNewToDo onCreate={createNewToDo} inputText={inputText} saveInput={saveInput}/>
          <DetailsPage/>
        </Route>
        <Route path="/edit/:id">
          <InputNewToDo onCreate={createNewToDo} inputText={inputText} saveInput={saveInput}/>
          <EditPage onUpdate={updateToDo}/>
        </Route>
        <Route path="/">
          <Redirect to="/"/>
        </Route>
      </Switch>
      <Footer/>
    </PageLayout>
    </Router>
  )
}



