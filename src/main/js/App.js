import React from 'react';
import Form from "./Form";
import Congratulation from "./Congratulation";
import CongratulationContainer from "./CongratulationContainer";

let congrats = [{name: "Ivan", text: "Very good airport! Awesome staff!"},
    {
    name: "Gregory",
    text: "Very good airport! Awesome staff! Have been flying so much! I'm crazy! Thank you very much!"
}, {
    name: "Dmitrii",
    text: "Very good airport! Awesome staff! Have been flying so much! I'm crazy! Thank you very much! " +
        "Many many text! Many many text! Many many text! Many many text!  Many many text! Many many text! Many many text! Many many text!"
}, {
        name: "Gregory",
        text: "Very good airport! Awesome staff! Have been flying so much! I'm crazy! Thank you very much!"
    }, {name: "Ivan", text: "Very good airport! Awesome staff!"}, {name: "Ivan", text: "Very good airport! Awesome staff!"}]

const inputs = [{
    name: "username",
    placeholder: "username",
    type: "text"
}, {
    name: "password",
    placeholder: "password",
    type: "password"
}, {
    type: "submit",
    value: "Submit",
    className: "btn"
}]
const props = {name: 'loginForm', method: 'POST', action: '/admin', inputs: inputs}
const params = new URLSearchParams(window.location.search)

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App"
                 style={{backgroundImage: `url("https://www.telegraph.co.uk/content/dam/Travel/2016/September/art-of-airport-MAIN.jpg")`}}>
                <div className="container">
                    <nav>
                        <img src="https://toplogos.ru/images/thumbs/preview-logo-pulkovo.png" alt=""/>
                    </nav>
                    <CongratulationContainer {...{congrats: congrats}}/>
                    <footer>
                        <Form {...props} />
                    </footer>
                </div>
            </div>
        );
    }
}

export default App
