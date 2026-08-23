import Book from '../Assets/book.svg'
export default function CardLivro() {
    return (
        <>
            <div className="h-[18rem] w-[15.5rem] bg-indigo-900 shadow-xl/20 rounded-xl text-mist-50 ">
                <div className="card-header ps-7 pt-7 flex-row flex gap-5">
                    <img className="size-6 icon-book fill-mist-50 stroke-mist-50" src={Book} />
                    <h4 className='font-bold'>Título Livro</h4>
                </div>
                <div className="sub-header ps-15 pt-2">
                    <p className="font-thin font-5 text-xs">ISBN - 123412342123</p>
                </div>
                <div className="description ps-7 pt-2">
                    <p className='font-bold text-s'>Autores:</p>
                    <p className='font-normal text-s ms-5'>Autor</p>
                    <p className='font-normal text-s mt-5'>Publicação: YYYY</p>
                </div>
                <div className="categorias  flex flex-row ps-5 mt-5 gap-4">
                    <div className="text-[0.8rem] h-fit px-2 py-1 bg-purple-400 text-indigo-900 rounded inset-shadow-sm">
                        <p>Categoria</p>
                    </div>
                    <div className="text-[0.8rem] h-fit px-2 py-1 bg-purple-400 text-indigo-900 rounded inset-shadow-sm">
                        <p>Categoria</p>
                    </div>
                </div>
                <button className='ms-5 mt-4 bg-mist-50 hover:bg-indigo-900 text-taupe-950 hover:text-mist-50 hover:ring px-2 py-1 rounded duration-150'>
                    Ver exemplares
                </button>
            </div>
        </>
    )
}