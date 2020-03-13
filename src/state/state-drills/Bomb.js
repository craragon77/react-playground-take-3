import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tick: 'tick',
            tock: 'tock',
            explode: 'Boom!',
            count: 0,
            dateTime: Date()
        }
    }
    componentDidMount(){
        this.setState({
            dateTime: new Date()
        }, () => {
       console.log(this.state.dateTime)
        if (this.dateTime % 2 === 0) {
            console.log(this.state.tick)
        } else if (this.state.dateTime % 2 !== 0) {
            console.log(this.state.tock)
        } else if (this.state.dateTime >= 8) {
            console.log(this.state.explode)
        }
       })
    }

    conponentWillUnmount() {
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                <p>idk what i'm doing</p>
            </div>
        )
}
}

export default Bomb