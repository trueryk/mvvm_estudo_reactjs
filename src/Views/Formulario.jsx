export default function Formulario({ nomeLivro,
    isbn,
    autores,
    categorias,
    ano,
    setNomeLivro,
    setIsbn,
    setAutores,
    setCategorias,
    setAno,
    post }) {
    return (
        <>
            <form onSubmit={post}>
                <div className="container ms-10 w-fit">
                    <div className="grid grid-row-2 w-[20vw]">
                        <label htmlFor="livro">Nome do livro:</label>
                        <input className="ps-3 border-indigo-900 border-1 rounded-xl" type="text" name="livro" id="livro"
                            value={nomeLivro}
                            onChange={(e) => setNomeLivro(e.target.value)} />
                    </div>

                    <div className="grid grid-row-2 w-[20vw]">
                        <label htmlFor="isbn">ISBN:</label>
                        <input className="ps-3 border-indigo-900 border-1 rounded-xl" type="text" name="isbn" id="isbn"
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)} />
                    </div>

                    <div className="grid grid-row-2 w-[20vw]">
                        <label htmlFor="autor">Autor:</label>
                        <input className="ps-3 border-indigo-900 border-1 rounded-xl" type="text" name="autor" id="autor"
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)} />
                    </div>

                    <div className="grid grid-row-2 w-[20vw]">
                        <label htmlFor="ano">Ano de publicação:</label>
                        <input className="ps-3 border-indigo-900 border-1 rounded-xl" type="number" name="ano" id="ano"
                            value={ano}
                            onChange={(e) => setAno(e.target.value)} />
                    </div>

                    <div className="grid grid-row-2 w-[20vw]">
                        <label htmlFor="categoria">Categoria:</label>
                        <input className="ps-3 border-indigo-900 border-1 rounded-xl" type="text" name="categoria" id="categoria"
                            value={categorias}
                            onChange={(e) => setCategorias(e.target.value)} />
                    </div>

                    <button type="submit" className="bg-indigo-900 text-mist-50 px-2 py-1 rounded mt-2"> Cadastrar </button>
                </div>
            </form>
        </>
    )
}