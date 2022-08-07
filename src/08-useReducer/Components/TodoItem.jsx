/*Este Componente muestra un slot con la tarea a realizar y un boton para poder eliminarla
recibe como prop el todo y dos funciones:onDeleted(Borra la tarea) y onCompleted(marca como realizada la tarea) */


import PropTypes from 'prop-types'

export const TodoItem = ({ onDeleted,onCompleted,todo}) => {
  const {id,done,description} = todo

  return (
    <li  className="list-group-item d-flex justify-content-between">
    <span className={`align-self-center ${done && 'text-decoration-line-through'}`}  onClick={()=>onCompleted(id)}>{description}</span>
    <button className="btn btn-danger" onClick={()=>onDeleted(id)}>Borrar</button>
</li>
  )
}


//prop-types del componente:

TodoItem.propTypes = {
  onDeleted:PropTypes.func.isRequired,
  onCompleted:PropTypes.func.isRequired,
  todo: PropTypes.array.isRequire,

}
