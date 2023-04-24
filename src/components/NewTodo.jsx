import React, { useContext } from 'react'
import { Context } from '../App'
import { initialState } from './Form'

const NewTodo = () => {
	const state = useContext(Context)
	return (
		<>
			<ul className='bg-red-500 rounded-md mt-5 px-4 py-2'>
				{initialState.todos.map(todo => (
					<li className=' border-b-[1px] border-black border-dashed'>{todo}</li>
				))}
			</ul>
		</>
	)
}

export default NewTodo
