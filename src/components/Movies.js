

function Movies(props) {

    // const Movies = [
    //     {
    //         name:"Jurassic Park",
    //         id:1001,
    //         image:"https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg","slug":"jurassic-park"
    //     },
    //     {
    //         name:"Eternals",
    //         id:1002,
    //         image:"https://raw.githubusercontent.com/mrspecht/media/main/img/eternals.jpg","slug":"eternals"
    //     },
    //     {
    //         name:"The Matrix",
    //         id:1003,
    //         image:"https://raw.githubusercontent.com/mrspecht/media/main/img/the-matrix.jpg","slug":"the-matrix"
    //     },
    //     {
    //         name:"Ocean's Eleven",
    //         id:1004,
    //         image:"https://raw.githubusercontent.com/mrspecht/media/main/img/oceans-eleven.jpg","slug":"oceans-eleven"
    //     },
    //     {
    //         name:"F9: The Fast Saga",
    //         id:1005,
    //         image:"https://raw.githubusercontent.com/mrspecht/media/main/img/f9-the-fast-saga.jpg","slug":"f9-the-fast-saga"
    //     }
    // ];
        return (
            <div className= "grid lg-5">
                {props.movies.map(movie => (
                    <figure key={movie.id}>
                    <img alt={movie.name} src= {movie.image} />
                    </ figure>
                ))}
                </div>
        )
        
    }
    
    
    
    export default Movies