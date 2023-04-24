import { createContext, useState } from 'react'
import Form from './components/Form'

export const Context = createContext()

function App() {
	const [todo, setTodo] = useState('')

	return (
		<Context.Provider value={{ todo, setTodo }}>
			<Form />
		</Context.Provider>
	)
}

export default App
