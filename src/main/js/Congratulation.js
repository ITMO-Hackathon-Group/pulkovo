import React from 'react'

class Congratulation extends React.Component {

    colors = ["#fd9856", "#ffef85", "#89e4fd", "#98abff",
        "#48dc7c", "#ffc170", "#24ff4c",
        "#f4aaff", "#788bd0"]

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="congratulation" style={{
                backgroundColor: this.colors[Math.floor(Math.random() * this.colors.length)]
            }}>
                <p style={{
                    fontSize: 14,
                    color: "#000000",
                    textAlign: "center",
                }}>
                    {this.props.message}
                </p>

                <br/>

                <p style={{
                    fontSize: 14,
                    color: "#000000",
                    textAlign: "center",
                }}>
                    {this.props.author}
                </p>
            </div>
        )
    }
}

export default Congratulation