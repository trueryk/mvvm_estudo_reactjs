import Book from '../Assets/book.svg'
export default function Exemplar({ titulo, isbn, id }) {
    return (
        <>
            <div className="w-screen h-fit px-10">
                <div className="bg-indigo-950 px-4 py-4 w-[40%] rounded flex-row flex text-mist-50">
                    <img className="size-6 icon-book fill-mist-50 stroke-mist-50" src={Book} />
                    <h4 className='font-bold ms-4'>{titulo}</h4>
                    <div className='bg-mist-50 text-indigo-950 px-2 rounded ms-2 content-center'><p>ISBN - {isbn}</p></div>
                    <a href={`/formulario_exemplar/${id}`} className='bg-mist-50 text-indigo-950 hover:bg-indigo-950 hover:text-mist-50 hover:ring-mist-50 hover:ring-2 rounded ms-5 px-2 py-1'>+ Exemplares</a>
                </div>
            </div>
        </>
    )
}