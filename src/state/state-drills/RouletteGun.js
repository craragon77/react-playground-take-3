import React from 'react'

class RouletteGun extends React.Component {
    constructor(props){
        super (props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    componentDidMount(){

    }
    render() {
        return(
        <p>{this.props.BulletInChamber}</p>
        <button>Pull the trigger</button>
        )
    }
}

export default RouletteGun