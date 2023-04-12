import React from 'react';
 import Image from 'react-bootstrap/Image';
 class HornedBeast extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       likes: 0
     }
   }
   addClick = () => {
     this.setState({
       likes: this.state.likes + 1
     })
   }
   render() {
     return (

       <div>
       <h3>{this.props.beast.title}</h3>
         <Image width="300px" src={this.props.beast.image_url} onClick={this.addClick} />
         <p>&hearts; {this.state.likes} </p>
       </div>
     )
   }
 }
 export default HornedBeast;