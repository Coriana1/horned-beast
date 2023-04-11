import React from 'react';

class Main extends React.Component {
    render () {
        return (
            <>
                <HornedBeast title="Primal Beast" imageURL={"https://unsplash.com/@anritikhon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"} description={"Primal Beast is hatched into an existence devoid of all feeling but hunger and pain."} /> 

                <HornedBeast title="Beastmaster" imageURL={"https://unsplash.com/de/@javigabbo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"} description={"Beastmaster is Armed with supernatural powers, the handsome hero who fights monsters and other creatures"}/>
            </>
        )
    }
}

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageURL} alt={this.props.title}/>
                <p>{this.props.description}</p>
            </>    
        )
    }
}

export default Main;