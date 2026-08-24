export default function FormularioExemplares({ exemplar }) {
    // const { id } = useParams()
    return (
        <>
            {exemplar.map((ex) =>   
                <>{ex.status}</>
            )}
        </>
    )
}