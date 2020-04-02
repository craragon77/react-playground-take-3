import React from 'react'
import GreatGrandChild from './GreatGrandChild/GreatGrandChild'

export default function GrandChild() {
  return (
    <div className='GrandChild'>
      <GreatGrandChild />
    </div>
  );
}