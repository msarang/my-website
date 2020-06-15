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
                        <div className="card-title">
                            {this.props.cardtitle}
                        </div>
                        <div className="card-body">
                            {this.props.cardbody}
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