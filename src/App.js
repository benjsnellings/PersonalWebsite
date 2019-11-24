import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Main from './components/main'
import Timeline from './components/timeline'
import Introduction from "./components/introduction";

class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar/>
                    <div id="colorlib-main">
                        <Main/>
                        <Timeline/>
                        {/*<Introduction/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
