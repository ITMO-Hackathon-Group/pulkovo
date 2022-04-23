import React from 'react';
import Form from "./Form";
import Congratulation from "./Congratulation";
import CongratulationContainer from "./CongratulationContainer";
import downloadCongratulations from "./downloadCongratulations";

/*let congrats = [
    {
        author: "Ivan",
        message: "Very good airport! Awesome staff!"
    },
    {
        author: "Gregory",
        message: "Very good airport! Awesome staff! Have been flying so much! I'm crazy! Thank you very much!"
    },
    {
        author: "Dmitrii",
        message: "Very good airport! Awesome staff! Have been flying so much! I'm crazy! Thank you very much! " +
            "Many many text! Many many text! Many many text! Many many text!  Many many text! Many many text! Many many text! Many many text!"
    },
    {
        author: "Gregory",
        message: "Very good airport! Awesome staff! Have been flying so much! I'm crazy! Thank you very much!"
    },
    {
        author: "Ivan",
        message: "Very good airport! Awesome staff!"
    },
    {
        author: "Ivan",
        message: "Very good airport! Awesome staff!"
    }]*/
let congrats = []

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
const inputs2 = [{
    name: "author",
    placeholder: "author",
    type: "text"
}, {
    name: "message",
    placeholder: "message",
    type: "text"
}, {
    type: "submit",
    value: "Submit",
    className: "btn"
}]
const props = {name: 'loginForm', method: 'POST', action: '/admin', inputs: inputs}
const props2 = {name: 'submitForm', method: 'POST', action: '/api/congratulations', inputs: inputs2}
const params = new URLSearchParams(window.location.search)
let author = "";
let text = "";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        downloadCongratulations()
            .then(res => {
                if (res.ok) {
                    res.json().then(congrats_tmp => this.congrats = congrats_tmp[0])
                    console.log(congrats)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        return (
            <div className="App"
                 style={{backgroundImage: `url("https://www.telegraph.co.uk/content/dam/Travel/2016/September/art-of-airport-MAIN.jpg")`}}>
                <div className="container">
                    <nav>
                        <img src="https://toplogos.ru/images/thumbs/preview-logo-pulkovo.png" alt=""/>
                    </nav>
                    <CongratulationContainer {...{congrats: congrats}}/>
                    <footer>
                        <form>
                            <div>
                                Author: <br/>
                                <input id="Author" onChange={(val) => {
                                    author = val;
                                }}/>
                            </div>
                            <div>
                                Congratulation<br/>
                                <input id="Congrat" onChange={(val) => {
                                    text = val;
                                }}/>
                            </div>
                            <div>
                                <button value="Submit" onClick={() => {
                                    if (typeof text.length > 9 && author > 3) {
                                        fetch('/api/congratulations', {
                                            method: 'POST', headers: {
                                                'Content-Type': 'application/json',
                                            }, body: JSON.stringify({
                                                author: author,
                                                message: text,
                                                published: true
                                            })
                                        })
                                            .then(response => {
                                                if (response.ok) {
                                                    response.json().then(congrat => congrats.push(congrat));
                                                    console.log(congrats);

                                                } else response.text().then(text => console.log(text));
                                            })
                                            .catch((error) => {
                                                console.error('Error:', error);
                                            });
                                    }
                                }}>Submit
                                </button>
                            </div>
                        </form>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App
