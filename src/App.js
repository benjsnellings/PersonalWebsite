import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Main from './components/main'
import Timeline from './components/timeline'
import Education from "./components/education";
// import Introduction from "./components/introduction";

class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar/>
                    <div id="colorlib-main">
                        <Main/>
                        <Education/>
                        <Timeline/>
                        {/*<Introduction/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
