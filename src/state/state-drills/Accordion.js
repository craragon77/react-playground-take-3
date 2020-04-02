import React from 'react'

class Accordion extends React.Component {
    static defaultProps = {tester: []}
    handleClick = () => {
        console.log(this.props.tester)
    }
    render(){
        const listItems = this.props.tester.map((tester, index) => {
            return (
            <li key={index}>
                <p>{tester.section}</p>
                <button onClick={() => this.handleButtonClick()}>{tester.title}</button>
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