/*Este componete es el encargado de agregar los todos a la lista
recibe como prop una funcion a la cual le enviamos el nuevo todo ,utilizamos useRef para sacar el valor del input..*/

import { useState,useRef } from "react"

import PropTypes from 'prop-types'

export const AddTodo = ({onAdd}) => {
  const [Value, setValue] = useState('')
  const inputValue = useRef(null)

  const onChange = ()=>{

    setValue(inputValue.current.value)
  }


  const onClick = (event)=>{
    event.preventDefault();
    if(Value.length < 2) return;

    let newTodo= {
      id: new Date().getTime() *100,
      description: Value,
      done:false,
  }

    onAdd(newTodo)
    setValue('')
  }


  return (
      <form onSubmit={onClick}>

      <input type="text" placeholder="¿Que Hay que Hacer?" value={Value} ref={inputValue} className="form-control" onChange={onChange} />

      <button type="submit" className="btn btn-primary">Submit</button>

      </form>
  )
}


//propTypes del componente:

AddTodo.propTypes ={
  onAdd: PropTypes.func.isRequired,
}
