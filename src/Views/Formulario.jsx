export default function Formulario({nomeLivro,
    isbn,
    autores,
    categorias,
    ano,
    setNomeLivro,
    setIsbn,
    setAutores,
    setCategorias,
    setAno}) {
    return (
        <>

            <input type="text" name="livro" id="livro" 
            value={nomeLivro} 
            onChange={(e) => setNomeLivro(e.target.value)} />

        </>
    )
}