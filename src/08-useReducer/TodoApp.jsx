
import { AddTodo,TodoList } from "./Components"
import { useTodo } from "../HOOKS/useTodo"


export const TodoApp = () => {


    // destructuring de las funciones que expusimos en el custom hook
        const {onAdd,onCompleted,onDeleted,todos,TodosCount,TodosPending} = useTodo()

return (

    <>

    <h1>Todo App </h1>
    <h3>Tareas: {TodosCount}, <small>Pendientes {TodosPending}</small>
 </h3>   <hr />
    <div className="col-7">


        <TodoList todos={todos} onDeleted ={onDeleted} onCompleted={onCompleted}/>
    </div>
    <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr />
        <AddTodo onAdd={onAdd}/>
    </div>

    </>
    
    
  )
}
