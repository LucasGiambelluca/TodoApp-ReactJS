/*En este componente, renderizamos la lista de todos, recibe como props dos funciones (onDeleted y onCompleted) y la lista con los todos.
Dentro de un ul mapeamos los items del array y mandamos a llamar al componente TodoItem al caul le pasamos como props las dos funciones. */

import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types'

export const TodoList = ({todos,onDeleted,onCompleted}) => {

  return (
    <ul className="list-group">
            {
                todos.map(todos=>(
                    <TodoItem key={todos.id}todo={todos} onDeleted={onDeleted} onCompleted={onCompleted} />
                ))
            }
        </ul>
    
    
    
  )
}


//prop-types del componente:

TodoList.propTypes={
  todos:PropTypes.array.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired,
}
