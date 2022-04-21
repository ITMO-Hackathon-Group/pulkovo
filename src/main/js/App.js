import React from 'react';
import Form from "./Form";

const inputs = [{
    name: "username",
    placeholder: "username",
    type: "text"
},{
    name: "password",
    placeholder: "password",
    type: "password"
},{
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
                    <nav>Navbar</nav>
                    <div id="content1">Content1</div>
                    <div id="content2">Content2</div>
                    <div id="content3">Content3</div>
                    <footer>
                        <Form {...props} error={params.get('error')} />
                    </footer>
                </div>
            </div>
        );
    }
}

export default App
