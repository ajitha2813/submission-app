import React from "./Bank";
function Account (props) {
  return (
    <li>{props.id}{props.details}</li>
  )
}
function Bank(){
    const info=[
        {id:'Holder Name:',details:"Ajitha K"},
        {id:'Account no:',details:"123456789"},
        {id:'IFSC code:',details:"SBIN0000001"},
        {id:'Name:',details:"State Bank of India"},
        {id:'Branch:',details:"Delhi"},
        
    ];
    return (
      <>
      <h1> Bank details</h1>
      <ul>
        {info.map((pick) => <Account  id={pick.id} details={pick.details} />)}
      </ul>
      </>
    );
}
export default Bank;
