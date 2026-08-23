import { useState } from "react";

export default function formLivroViewModel() {
    const [nomeLivro, setNomeLivro] = useState('')
    const [isbn, setIsbn] = useState('')
    const [autores, setAutores] = useState([])
    const [categorias, setCategorias] = useState([])
    const [ano, setAno] = useState('')

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
        setAno
    }
}