import { useState, useEffect } from "react";

export default function homeViewModel() {
    const [livros, setLivros] = useState([{}])
    useEffect(() => {
        load()
    })

    const load = async () => {
        const response = await fetch('http://localhost:8080/livro')
        const data = await response.json()
        setLivros(data)
    }
    
    return {
        livros
    }
}