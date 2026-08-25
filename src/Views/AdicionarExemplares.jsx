import Exemplar from "../Components/Exemplar"

export default function AdicionarExemplares({ livros }) {
    return (
        <>  {livros.length != 0 ?
            < div className="grid grid-cols-2 gap-4">
                {livros.map((livro, index) =>
                    <Exemplar
                        key={index}
                        titulo={livro.titulo}
                        isbn={livro.isbn}
                        id={livro.id}
                    />
                )}
            </div > : <div className="text-center mt-5">Não há livros cadastrados!</div>
        }
        </>
    )
}