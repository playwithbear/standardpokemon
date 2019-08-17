import React, { Component } from 'react'
import SetGroup from './SetGroup'


export class MainSetDisplay extends Component {

    createGroups = () => {
        // Uses setCycles object to create 4 groups
        
        // console.log(this.props.setCycles)
        // console.log(this.props.setCycles["2020"])

        // console.log(Object.keys(this.props.setCycles))
        // console.log(Object.keys(this.props.setCycles)[0])
        // let myCycle = Object.keys(this.props.setCycles)[1]
        // console.log(this.props.setCycles[myCycle])


        for (let i = 0; i < Object.keys(this.props.setCycles).length; i++) {

            let myCycle = Object.keys(this.props.setCycles)[i]

            // for (let j = 0; j < this.props.setCycles[myCycle].length; j++) {
            //     console.log(this.props.setCycles[myCycle][j])
            // }

        }
        
    }

    render() {
        return (
            <section className="grid-main-set">
                
                {this.createGroups()}
                {/*
                <SetGroup setList={this.props.setList} setCycles={this.props.setCycles} />
                */}
                
            </section>
        )
    }
}

export default MainSetDisplay
