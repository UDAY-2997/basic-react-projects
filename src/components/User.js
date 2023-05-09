/*
 Props (properties) are read-only immutable component. It is an object which store
 the value of the attributes and serves as a medium to pass
 data from one component to another. It passes values to the component in the same 
 way as a argument is passed to a function
*/

function User(props){


  /* 
    You can use a fragment '<>......</> ' when you dont want to use another 
    HTML element as a container for you content.  The fragment will works as a 
    good wrapper element 
   */
  return (
      <div className="user-comp">
        <p>Name : {props.name}</p>
        <p>profession: {props.profession}</p>
        <p>Age: {props.age}</p>
      </div>
  //      <>
  //      <p>Name : {name}</p>
  //      <p>profession: {profession}</p>
  //    </>
  );
}
export default User