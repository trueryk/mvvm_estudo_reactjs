import { useParams } from "react-router-dom"
import Exemplares from "../Components/Exemplares"

export default function FormularioExemplares({ exemplar, setIDLivro, codigoExemplar, setCodigo, post }) {
    const { id } = useParams()
    setIDLivro(id)
    return (
        <>
            <div className="grid grid-cols-2">
                {exemplar.length != 0 ?
                    <div className="container">
                        {exemplar.filter(ex => ex.livro?.id == id).map((ex, index) =>
                            <><Exemplares
                                key={index}
                                exemplar={ex.codigo_exemplar}
                                status={ex.status}
                            /></>
                        )}
                    </div> : <div className="text-center mt-5">Não há exemplares cadastrados!</div>
                }
                
                <div className="container">
                    <form onSubmit={post}>
                        <div className="container ms-10 w-fit">
                            <div className="grid grid-row-2 w-[20vw]">
                                <label htmlFor="livro">Código do exemplar:</label>
                                <input className="ps-3 border-indigo-900 border-1 rounded-xl" type="text" name="livro" id="livro"
                                    value={codigoExemplar}
                                    onChange={(e) => setCodigo(e.target.value)} />
                            </div>
                            <button className="bg-indigo-900 text-mist-50 px-2 py-1 rounded mt-2"> Cadastrar </button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}