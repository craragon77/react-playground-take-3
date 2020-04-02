import React, {component} from 'react';
import { render } from '@testing-library/react';

export default function Demonym(props) {
    render() 
        return (
            <div className="demonym">
            A {props.name} comes from {props.country}
            </div>
        );
    }