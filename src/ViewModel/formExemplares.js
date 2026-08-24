import { useState, useEffect } from "react"

export default function formExemplares() {
    const [exemplar, setExemplar] = useState([{}])

    useEffect(() => {
        load()
    })

    const load = async () => {
        const response = await fetch('http://localhost:8080/exemplar')
        const data = await response.json()
        setExemplar(data)
    }

    return {
        exemplar
    }
}