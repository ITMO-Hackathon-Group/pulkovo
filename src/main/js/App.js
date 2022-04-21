import React from 'react';
import Form from "./Form";
import Congratulation from "./Congratulation";

const congrat = {name: "Ivan", text: "Very good airport! Awesome staff!"}
const congrat1 = {
    name: "Gregory",
    text: "Very good airport! Awesome staff! Have been flying so much! I'm crazy! Thank you very much!"
}
const congrat3 = {
    name: "Dmitrii",
    text: "Very good airport! Awesome staff! Have been flying so much! I'm crazy! Thank you very much! " +
        "Many many text! Many many text! Many many text! Many many text!  Many many text! Many many text! Many many text! Many many text!"
}

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
            <div className="App">
                <div className="container">
                    <nav>
                        <img src="https://toplogos.ru/images/thumbs/preview-logo-pulkovo.png"  alt="" />
                    </nav>
                    <div id="content1">
                        <Congratulation {...congrat}/>
                        <Congratulation {...congrat1}/>
                        <Congratulation {...congrat}/>
                    </div>
                    <div id="content2">
                        <Congratulation {...congrat3}/>
                        <Congratulation {...congrat}/>
                        <Congratulation {...congrat1}/>
                        <Congratulation {...congrat3}/>
                    </div>
                    <div id="content3">
                        <Congratulation {...congrat}/>
                        <Congratulation {...congrat3}/>
                        <Congratulation {...congrat}/>
                        <Congratulation {...congrat1}/>
                    </div>
                    <footer>
                        <Form {...props} />
                    </footer>
                </div>
            </div>
        );
    }
}

export default App
