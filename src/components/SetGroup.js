import React, { Component } from 'react'
import SetItem from './SetItem'


export class SetGroup extends Component {

        // let myCycle = Object.keys(this.props.setCycles)[i]

        // for (let j = 0; j < this.props.setCycles[myCycle].length; j++) {
        //     console.log(this.props.setCycles[myCycle][j])
        // }

    render() {
        return(
                
            <ul className="set-list">
                {this.props.setList.map((set) => <SetItem key={set.code} name={set.name} url={set.symbolUrl} />)}
            </ul>

        )
    }
}

export default SetGroup
