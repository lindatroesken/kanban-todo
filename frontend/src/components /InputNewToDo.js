import './InputNewToDo.css'
export default function InputNewToDo(props) {
  return (
    <div className="input">
      <input className="input__field"
        type="text"
        placeholder="new ToDo"
        value={props.inputText}
        onChange={props.saveInput}
      />
      <button className="input__button" onClick={props.onCreate}>create new todo</button>
    </div>
  )
}
