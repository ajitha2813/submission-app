import React from './Menu';
function  Cusine (props) {

  return <li>{props.side}</li>
  
}
function Menu(){
  const food = ['idili','kaju','sabudana','dosa','parotta','samosa','chole','poha','kheer'];
  return(
    <>
    <h1>Here is our Menu</h1>
    <ul>
      {food.map((item) => <Cusine side={item} />)}
    </ul>
    </>
  );
}
export default Menu;
