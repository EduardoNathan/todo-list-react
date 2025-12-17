import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!title || !category) return
        addTodo(title, category)
        setTitle("")
        setCategory("")
    }

    return <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder='Digite o título'
                value={title}
                onChange={(event) => setTitle(event.target.value)} />
            <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Saude">Saúde</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
}

export default TodoForm
