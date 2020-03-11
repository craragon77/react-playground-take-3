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
        this.interval = setInterval(() => {
            this.setState({
                dateTime: new Date()
            })
            console.log(this.dateTime)
            if (this.dateTime % 2 === 0) {
                console.log(this.state.tick)
            } else if (this.dateTime % 2 !== 0) {
                console.log(this.state.tock)
            } else if (this.dateTime >= 8) {
                console.log(this.state.explode)
            }
        }, 1000)
    }
    conponentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                <p>{this.state.dateTime}</p>
            </div>
        )
    }
}

export default Bomb