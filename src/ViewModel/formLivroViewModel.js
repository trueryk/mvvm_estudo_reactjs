import { useState } from "react";

export default function formLivroViewModel() {
    const [nomeLivro, setNomeLivro] = useState('')
    const [isbn, setIsbn] = useState('')
    const [autores, setAutores] = useState([])
    const [categorias, setCategorias] = useState([])
    const [ano, setAno] = useState('')

    async function post(){
        const dadosLivro = {
            titulo: nomeLivro,
            isbn: isbn,
            autor: autores,
            ano_publicacao: ano,
            categoria: categorias
        }

        const respondeEnd = await fetch('http://localhost:8080/livro',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosLivro)
        })
    }

    return {
        nomeLivro,
        isbn,
        autores,
        categorias,
        ano,
        setNomeLivro,
        setIsbn,
        setAutores,
        setCategorias,
        setAno,
        post
    }
}