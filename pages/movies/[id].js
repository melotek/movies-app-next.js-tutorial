import {useRouter} from 'next/router'
import {getMovieById} from "../../actions/index"
const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">This is simple hero unit, a simple jumbotron-style compnent</p>
                <hr className="my-4"/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam officiis deserunt debitis facilis quae et tempore nostrum quam aperiam libero.</p>
                <a href=" #" className="btn btn-primary btn-lg" role="button">Read more</a>
            </div>
                <p>Some description about the movie</p>
        </div>
    )
}
Movie.getInitialProps = async (ctx) => {
    const { id } = ctx.query
    const movie = await getMovieById(id)
    return {movie}
}


export default Movie;