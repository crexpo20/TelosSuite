import React, {Component} from 'react';
import axios from "axios";
import {Link, Outlet } from 'react-router-dom';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
        inmuebles:[],

    }
    this.getInmuebles = this.getInmuebles.bind(this);
    
}
   
componentDidMount(){
  this.getInmuebles();
 
}

  getInmuebles=async()=>{
    await axios.get('http://127.0.0.1:8000/api/getinmuebles')
    .then(res=>{
        this.setState({inmuebles: res.data});
        console.log(res.data)
    }).catch((error)=>{
        console.log(error);
    });
}
    render(){
     
      
      return(
        <>
          
        <body>
              <div>
                  { this.state.inmuebles?.map (inmuebles =>(
                      <div class='verinm' key = {inmuebles.id}>
                          <div class='InmueblesHost'>
                          <img class='inmueble_fot' src="https://picsum.photos/280/280"></img>
                          
                          <h3 class='inmueble_name'>{inmuebles.nombre}</h3>
                          <div class='inmueble_info'>
                              <p class='inmDet'>{inmuebles.desc}</p>
                              <p class='inmCamas'>{inmuebles.camas}</p>
                              <p class='inmPrecio'>{inmuebles.precio}</p>
                          </div>
                          
                      </div>
                      </div>
                  )
                  )

                  }
                     
              </div>
                  
        </body>
        
        <Outlet />
        </>
      );
    }
  }
  export default HomePage;