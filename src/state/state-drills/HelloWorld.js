import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            brady: 'friend',
            language: 'react'
        }
    }
    handleTheBrady = () => {
        return(
            {}
        )
    }
    handleTheLanguage = () => {
        console.log(this.state.language)
    }
    handleTheWorld = () => {
        console.log(this.props.who)
    }
    handleTheClicks = () =>{
        const filler = this.handleTheBrady.val(), this.handleTheLanguage.val(), this.handleTheClicks.val()
        this.setState({
            currentThing : filler
        })
    }
    render() {
        return(
            <div>
                <p>Hello {this.state.filler}!</p>
                <button onClick={this.handleTheWorld}>World</button>
                <button onClick={this.handleTheBrady}>Friend</button>
                <button onClick={this.handleTheLanguage}>React</button>
            </div>
        )
    }
}

export default HelloWorld