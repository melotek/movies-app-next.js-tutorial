import React, { useState, useEffect } from 'react'

import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'
import { getMovies } from "../actions/"
import { getCategories } from "../actions/"

const Home = (props) => {
  // const [movies, setMovies] = useState([])
  // const [errorMessage, setErrorMassage] = useState('')

// is called only on client
  // useEffect(()=> {
  //   getMovies().then((movies) => {
  //     setMovies(movies)
  //   }) 
  // }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resMovies = await getMovies()
  //       setMovies(resMovies)
  //     }
  //     catch (error) {
  //       setErrorMassage(error)
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       }
  //     }
  //   }
  //   fetchData();
  // }, [])

const { images, categories, movies } = props

  return (

    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu 
              categories={categories}
              appName={"Movei DB"}
              />
            </div>
            <div className="col-lg-9">
              <Carousel images={images}/>
              <div className="row">
                {/* {errorMessage &&
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                } */}
                <MovieList movies={props.movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
   
     
    </div>
  )
}
Home.getInitialProps = async () =>{
    
        const movies = await getMovies()
        const categories = await getCategories()
        const images = movies.map((movie) => {
          return {
            id: `image-${movie.id}`,
            image: movie.image,
            name: movie.name
          }
        })
        return {
          movies,
          images,
          categories,
        }
}
export default Home








