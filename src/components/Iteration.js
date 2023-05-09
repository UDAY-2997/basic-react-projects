
import Circle from "./Circle";
function Iteration() {

    //prop -> array
    //Create an array
    //Iterate 5 times


    //new Array(5) returns 5 empty elements, which is useless for map()

    //[...new Array(5)] return 5 undefined elements
  return (
    <div className='iteration'>
        {/* <Circle number = {1}/>
        <Circle number = {2}/>
  <Circle number = {3}/> */}
        
       {[...new Array(5)].map((v, i ) => (
            <Circle key= {i} number={i + 1} />
        ))}
    </div>
  )
}

export default Iteration