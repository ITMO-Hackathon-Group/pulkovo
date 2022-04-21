import React from 'react'

class CongratulationRow extends React.Component {

    constructor(props){
        super(props)
        if(props.error){
            this.state = { failure: 'wrong username or password!', errcount: 0 }
        }else{
            this.state = { errcount: 0 }
        }
    }

    render() {
        const inputs = this.props.inputs.map(
            ({name, placeholder, type, value, className}, index) => (
                <Input key={index} name={name} placeholder={placeholder} type={type} value={value}
                       className={type==='submit'? className : ''} handleError={this.handleError} />
            )
        )
        const errors = this.renderError()
        return (
            <div className="congratulation-row">

            </div>
        )
    }
}

export default CongratulationRow