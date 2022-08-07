/* Este TodoReducer maneja todos los eventos que se van a ajectuar en el componente padre de nuestra app
Recibe como argumento un estado inicial que por defecto seteamos como un array vacio y una accion la cual se encarga
de decirle al switch que accion vamos a ejecutar, la accion cuenta con dos atributos, un Type que identifica la accion a ejecutar
y en payload el cual es el valor de la accion.
en todos los case se retorna un arreglo con un state.
*/

export const TodoReducer = (initialState = [], action)=>{

    switch (action.type) {
        case '[Todo] Add todo':
            
            return [...initialState, action.payload]
        case '[Todo] Deleted':
            return(initialState.filter(todo => todo.id != action.payload))

        case '[Todo] Completed':
            return (initialState.map(todo =>{

                if(todo.id ===action.payload){

                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            }))
        default:
            return initialState
    }



}