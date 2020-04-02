import React, { Component } from 'react'
import LanguageSpecificCopy from '../../../LangControls/LangControls'

class GreatGrandChild extends Component {
  render() {
    const copy = LanguageSpecificCopy['en-US'] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    )
  }
}

export default GreatGrandChild