import { useState, useEffect } from "react"

export default function formExemplares() {
    const [exemplar, setExemplar] = useState([{}])
    const [codigoExemplar, setCodigo] = useState('')
    const [idLivro, setIDLivro] = useState('')
    const [livro, setLivro] = useState({})

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        const response = await fetch('http://localhost:8080/exemplar')
        const data = await response.json()
        setExemplar(data)
    }

    const post = async () => {
        const response = await fetch(`http://localhost:8080/livro/${idLivro}`)
        const data = await response.json() 
        
        const dadosExemplar = {
            status: "Disponível",
            codigo_exemplar: codigoExemplar,
            livro: data
        }

        const respondeEnd = await fetch('http://localhost:8080/exemplar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosExemplar)
        })

    }

    return {
        exemplar, post, setIDLivro, codigoExemplar, setCodigo
    }
}