import React, { Component, Fragment } from 'react'
import '../styles/userCard.css'

export default class userImage extends Component {
    render() {
        return (
            <Fragment>
                <div className="user-card">
                    <img src={this.props.userData.image} alt="Profile Image"/>
                    <h3>
                        {this.props.userData.name}
                    </h3>
                    <p>{this.props.userData.role}</p>
                    <button type="button">Contact</button>
                </div>
            </Fragment>
        )
    }
}
