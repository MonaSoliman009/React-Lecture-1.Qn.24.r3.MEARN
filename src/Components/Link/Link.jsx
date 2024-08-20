import './Link.css'


export default function Link(props){
console.log(props);
//  const linkStyle={margin:"5px",textDecoration:"none",color:"#09c"}
//     return  <a href={props.href} style={linkStyle}>{props.name}</a>
return  <a href={props.href} className="link" >{props.name}</a>

}






// const Link=()=>{


// }



// const Link=function(){

// }