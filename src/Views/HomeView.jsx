import CardLivro from "../Components/CardLivro"
export default function HomeView() {
    return (
        <>
            <div className="">
                <div className="w-screen justify-center flex pt-13">
                    <div className="w-[80vw] grid gap-5 grid-cols-4">
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                    </div>
                </div>

            </div>
        </>
    )
}