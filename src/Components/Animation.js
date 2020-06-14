import React, {Component} from 'react';
import './Animation.css';

export default class ExampleCss extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    handleClick() {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open')
    }

    render() {
        return(
            <div>
            <div>
                <div ref={this.wrapperRef} className="wrapper">
                    <div className="nav">
                        <div className="card-title">
                            About Me
                        </div>
                        <div className="card-body">
                            I'm a researcher at the MIT Media Lab's Space Exploration Initiative and Harvard Business School
                            studying the future of space exploration.
                        </div>
                </div>
            </div>
        </div>
        <button
            className="nav__icon"
            onClick={() => this.handleClick()}>About</button>
        </div>
        )
    }

};