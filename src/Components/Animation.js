import React, {Component} from 'react';
import './Animation.css';
import headshot from './Headshot.png';

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
                            <img src={headshot} width="60%"/>
                            <br></br>
                            <br></br>
                            <b>I study the future of the space industry. </b>

                            <br></br>
                            <br></br>

                            Currently, I split my time between the MIT Media Lab's <a href="https://www.media.mit.edu/groups/space-exploration/overview/">Space Exploration Initiative</a>, where I lead our
                            lunar exploration projects, and <a href="https://economicsofspace.hbs.harvard.edu/">Harvard Business School</a>, where I work with Professor Matthew Weinzierl to develop cases on the commercialization of the space industry.

                            <br></br>
                            <br></br>

                            I developed a love for space at Wellesley College, where I graduated with a degree in Physics in 2018. After graduating,
                            I spent a year abroad on the Knafel Traveling Research Fellowship, studying the space industry in 10 countries. Read my blog
                            from my time abroad <a href="https://tinyletter.com/msarang/archive">here</a>.

                            <br></br>
                            <br></br>

                            I'm passionate about democratizing access to space, and proud to work towards that goal with other young, passionate individuals in the space industry as the Strategic Partnerships Team co-coordinator
                            of the <a href="https://spacegeneration.org/">Space Generation Advisory Council</a>. 

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