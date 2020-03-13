import React from 'react'

class RouletteGun extends React.Component {
    constructor(props){
        super (props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    chamberIsSpinning = () => {
        this.setState({
            spinningTheChamber: true
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.BulletInChamber}</p>
                <button onClick={this.chamberIsSpinning}>Pull the trigger</button>
            </div>

        
        )
    }
}

export default RouletteGun