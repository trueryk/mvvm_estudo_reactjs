import CardLivro from "../Components/CardLivro"
export default function HomeView({ livros }) {
    return (
        <>
            <div className="">
                <div className="w-screen justify-center flex pt-13">
                    {livros.length != 0 ?
                        <div className="w-[80vw] grid gap-5 grid-cols-4">
                            {livros.map((livro, index) =>
                                <CardLivro
                                    key={index}
                                    titulo={livro.titulo}
                                    isbn={livro.isbn}
                                    autor={livro.autor}
                                    ano={livro.ano_publicacao}
                                    categoria={livro.categoria} />
                            )}
                        </div> : <div className="text-center mt-5">Não há livros cadastrados!</div>
                    }
                </div>

            </div>
        </>
    )
}