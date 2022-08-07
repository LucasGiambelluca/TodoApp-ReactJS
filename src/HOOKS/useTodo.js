/*En este custom hook almacenamos toda la logica que vamos a ejecutar en nuestro componente padre
  Aqui desarrollamos las funciones que agregan,borran o alteran las tareas de la todoApp,
  recibe como argumento el dispach de nuestro useReducer y efectua todos los cambios en el mismo
*/
import { useReducer,useEffect } from "react"
import { TodoReducer } from "../HELPERS/TodoReducer"

 


export const useTodo = () => {

    //iniciamos el estado como un array vacio
    const initialState = []


    //funcion que trae los valores de los todos del localStorage
    const init =()=>{
        return JSON.parse(localStorage.getItem('todos') )        }


    //seteo del useReduce
    const [todos, dispatch] = useReducer(TodoReducer,initialState ,init)

    //useEffect que al mometo de cambiar el estado de los todos los graba en el localStorage
    useEffect(() => {
                        localStorage.setItem('todos',JSON.stringify(todos))

                    }, [todos])

    //funcion que agrega todos
    const onAdd = (value)=>{
        const Action ={
            type:'[Todo] Add todo',
            payload:value,
        }
        
        dispatch(Action)

    }

    //funcion que borra todos de la lista
    const onDeleted = (id)=>{

        const Action = {
            type: '[Todo] Deleted',
            payload: id
        }

        dispatch(Action);
    }
    //funcion que cambia el done del todo y lo retorna
    const onCompleted = (id)=>{

        const action = {
            type:'[Todo] Completed',
            payload:id,
        }
        dispatch(action)
    }



return (
    { 
        todos,
        onAdd,
        onCompleted,
        onDeleted,
        TodosCount:todos.length,
        TodosPending:todos.filter(todos=> todos.done === false).length,
    }
)
}
