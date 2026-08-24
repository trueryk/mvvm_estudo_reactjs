import Exemplar from "../Components/Exemplar"

export default function AdicionarExemplares({ livros }) {
    return (
        <>
            <div className="grid grid-cols-2">
                {livros.map((livro, index) =>
                    <Exemplar
                        key={index}
                        titulo={livro.titulo}
                        isbn={livro.isbn}
                        id={livro.id}
                    />
                )}
            </div>
        </>
    )
}