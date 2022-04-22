import React from 'react'
import Congratulation from "./Congratulation";

class CongratulationContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let temp = this.props.congrats
        console.log(temp)
        let c1 = [], c2 = [], c3 = []
        for (let i = 0; i < temp.length; ++i) {
            if (i % 3 === 0) {
                c1.push(temp[i])
            } else if (i % 3 === 1) {
                c2.push(temp[i])
            } else {
                c3.push(temp[i])
            }
        }
        const congrats1 = c1.map(
            ({name, text}, index) => (
                <Congratulation {...{name, text}}/>
            )
        )
        const congrats2 = c2.map(
            ({name, text}, index) => (
                <Congratulation {...{name, text}}/>
            )
        )
        const congrats3 = c3.map(
            ({name, text}, index) => (
                <Congratulation {...{name, text}}/>
            )
        )
        return (
            <div id="congrats-container">
                <div id="content1">
                    {congrats1}
                </div>
                <div id="content2">
                    {congrats2}
                </div>
                <div id="content3">
                    {congrats3}
                </div>
            </div>
        )
    }
}

export default CongratulationContainer