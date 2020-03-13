import React from 'react'

class Accordion extends React.Component {
    static defaultProps = {thingy: []}
    render(){
        const listItems = this.props.thingy.forEach((thingy, index) => {
            return (
            <li key={index}>
                <p>{thingy.section}</p>
                <button>{thingy.title}</button>
            </li>)
        })
        return(
            <div>
                <ul className='accordion'>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default Accordion