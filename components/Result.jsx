import Thumbnail from "./Thumbnail"

function Result({results}) {
    
    return (
        <div>
            {results.results.map((result,key)=>(
                <Thumbnail key={key} result={result}/>
            ))}
        </div>
    )
}

export default Result
