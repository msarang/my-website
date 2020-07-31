import React, {Component} from 'react';
import './Animation.css';

export default class Card extends Component {
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
                <div ref={this.wrapperRef} className={this.props.wrapper}>
                    <div className="nav">
                        <div className="card-body">

                            I study the future of the space industry. 

                            <br></br>
                            <br></br>

                            Currently, I split my time between the MIT Media Lab's Space Exploration Initiative, where I lead our
                            Lunar Exploration projects, and Harvard Business School, where I write cases about the space industry.

                            <br></br>
                            <br></br>

                            I developed a love for space at Wellesley College, where I graduated with a degree in Physics in 2018. After graduating,
                            I spent a year abroad on the Knafel Traveling Research Fellowship, studying the space industry in 10 countries. Read my blog
                            from my time abroad here.

                            <br></br>
                            <br></br>

                            I'm passionate about democratizing access to space, and proud to work towards that goal with other young, passionate individuals in the space industry as the Strategic Partnerships co-coordinator
                            of the Space Generation Advisory Council. 

                            <br></br>
                            <br></br>

                        </div>
                </div>
            </div>
        </div>

        <button
            className="nav__icon"
            onClick={() => this.handleClick()}>{this.props.cardtitle}</button>
        </div>
        )
    }

};