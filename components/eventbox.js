import React from "react";
import {Link}  from "react-router-dom";


export class EventBoxComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            data : [],
            curr : ''
        }
        this.GetIt();
      }

    componentDidMount(){
        
    }

    GetIt(){
        fetch('https://www.eventbriteapi.com/v3/events/search/?q={wollongong}&location.within=50km&location.latitude=34.4278&location.longitude=-150.8931&token=MJN62TFZ2KMEP2RRRQYX')
            .then(res => res.json())
            .then(data => this.setState({
                data : data.top_match_events       
            }
        ));
    }

    render(){
     return(
        <div>
              <h3>Events Nearby..</h3>
           
             <div className="abc">
              {
                 this.state.data.map(function (event, i) {
                 return (
                       <div className="event">
                         <img src={event.logo.url} width='200px' height='210px'></img>
                         <div>{event.name.text}</div>
                         <Link to={{ 
                                     pathname: "/more",
                                     data : event
                                }}>
                            <button className="buttonClass">more</button>
                         </Link>
                       </div>
                   );
               })
             }
             
           </div>
        </div>
        );
    }
}