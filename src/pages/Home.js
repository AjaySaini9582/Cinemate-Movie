import {Card  } from "../components/index"
import { useFetch } from "../hooks/useFetch"

export const Home = ({apiPath}) => {
const{ data : movies  }=useFetch(apiPath);

  return (
    <section className="max-w-7xl">
    <div className="flex justify-start flex-wrap">
    {
      movies.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
      )) }
  
  
</div>
</section>
  )
}
