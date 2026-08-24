import Book from '../Assets/book.svg'

export default function Exemplares({ exemplar, status }) {
    return (
        <>
            <div className="w-screen h-fit px-10 my-5">
                <div className="bg-indigo-950 px-4 py-4 w-[40%] rounded flex-row flex text-mist-50">
                    <img className="size-6 icon-book fill-mist-50 stroke-mist-50" src={Book} />
                    <h4 className='font-bold ms-4'>{exemplar}</h4>
                    <div className='bg-mist-50 text-indigo-950 px-2 rounded ms-2 content-center'><p>Status - {status}</p></div>
                </div>
            </div>
        </>
    )
}