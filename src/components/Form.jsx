import React, { useContext, useReducer } from 'react'
import { Context } from '../App'
import NewTodo from './NewTodo'

export const initialState = {
	todos: [],
}

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state.todos,
				todos: [...state.todos, { title: action.payload, id: Date.now() }],
			}
		default:
			return state
	}
}

const Form = () => {
	const state = useContext(Context)
	const [newState, dispatch] = useReducer(Reducer, initialState)
	console.log(newState)

	function addTodo(e) {
		e.preventDefault()

		dispatch({
			type: 'ADD_TODO',
			payload: state.todo,
		})
	}

	return (
		<form
			className='bg-white w-[500px] p-10 rounded-md shadow-md'
			onSubmit={addTodo}
		>
			<div className='border-[1px] border-black rounded-md px-4 py-2'>
				<input type='text' />
				<button className='border-[0] bg-blue-300 px-2 py-1 rounded-md cursor-pointer'>
					Submit
				</button>
			</div>
			{/* <NewTodo value={{ ...newState, dispatch, addTodo, state }} /> */}
		</form>
	)
}

export default Form
