import React from 'react'

class Congratulation extends React.Component {

    colors = ["#FED6BC", "#FFFADD", "#DEF7FE", "#E7ECFF",
        "#C3FBD8", "#FDEED9", "#F6FFF8", "#F6FFF8",
        "#B5F2EA", "#C6D8FF"]

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="congratulation" style={{
                backgroundColor: this.colors[Math.floor(Math.random() * this.colors.length)]
            }}>
                {this.props.text}
                <br/>
                {this.props.name}
            </div>
        )
    }
}

export default Congratulation