import React,{Component} from 'react'
import Episode from './Episodes.component'
import Info from './Information.component'
import Btn from './Btn-Episodes.component'
import "../Details/Information.css"



class Details extends Component{
    
    constructor(){
        super();
     this.state={
         details:[],
         selectSeason:1,
     }
    }
    componentDidMount(){ 
        fetch(`https://www.episodate.com/api/show-details?q=${this.props.match.params.id}`).then(response=>response.json()).then(users=>this.setState({details:users.tvShow}));
    }
   
   selectclick=(id)=>{this.setState({selectSeason:id});}
    
    render(){
        
        return(
            <div className="Inform" >
            
            <Info  detail={this.state.details}/>
            <Btn  selectclick={this.selectclick} detail={this.state.details.episodes}  />
              <Episode detail={this.state.details.episodes} selseason={this.state.selectSeason}  />
             
          
            </div>
        )
    }

}
export default Details;