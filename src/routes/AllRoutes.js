import { Routes,Route } from "react-router-dom";
import { MovieDetial, MovieList,Search,PageNoFound,Home,Image} from "../pages";



export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
          <Route path="/" element={<Home apiPath="movie/now_playing"/>}/>
            <Route path="movie/:id" element={<Image/> }/>
            <Route path="movies/popular" element={<MovieDetial apiPath="movie/popular"/>}/>
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>}/>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>
            <Route path="search" element={<Search apiPath="search/movie"/>}/>
            <Route path="*" element={<PageNoFound/>}/>
            
        </Routes>
    </div>
  )
}
