import React, {Component} from 'react';

class App extends Component {
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
                    <footer>Footer</footer>
                </div>
            </div>
        );
    }
}

export default App