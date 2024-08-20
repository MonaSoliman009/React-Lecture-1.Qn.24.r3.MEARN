import React from "react";
import Link from "../Link/Link";

export default class Navbar extends React.Component {

    constructor() {

        super()
        console.log("From constructor"); //1
        this.state={
            name:"Mona",
            job:"web developer",
            products:[],
            address:{}
        }
        
    }

    componentDidMount(){
        console.log("From DidMount");//3

        // this.state.name="Ali"  xxxxxxxxxxx
        // console.log(this.state.name);

        
    }
    componentDidUpdate(){
       
        console.log("From DidUpdate");
        
    }
 
    componentWillUnmount(){ //cleanup method
        console.log("From UnMounting");
        
    }

    handleChange=(num1,str,num2)=>{
      console.log(num1,str,num2);
      
        this.setState({name:(this.state.name=="Mona")?"Ali":"Mona"})
    }

    render() {
      
        //

        console.log("From render");//2
        

        return <>

        

          <Link name="Home" href="https://github.com/"/>
          <Link name="About Us" href="https://facebook.com/"/>
          <Link name="Contact Us" href="https://x.com/"/>
          <Link name="Login" href="https://instagram.com/"/>
            {/* <h1 className="test">Hello {this.state.name} and your job is {this.state.job}</h1> */}
            {/* <button onClick={()=>{ this.handleChange(3,"nour",10) }}>Change Name</button> */}
            
            {/* <p>Hello World</p>

            <label htmlFor="inp">Name:</label>
            <input type="text" id="inp"/> */}

        </>
    }


}


