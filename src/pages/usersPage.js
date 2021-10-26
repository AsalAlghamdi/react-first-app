import React, { Component } from 'react';
import UserCard from '../components/userCard';
import '../styles/userPage.css'

export default class usersPage extends Component {
    state = {
        usersList: [
            {
                "id": 1,
                "name": "Asaffffamdi",
                "role": "Frontend Developer",
                "image": "https://media-exp1.licdn.com/dms/image/C4D03AQFtXoeoIg9EDg/profile-displayphoto-shrink_400_400/0/1633177271663?e=1640822400&v=beta&t=sFUetJDReJ097RwGNIH6wQdhmPX2snDBI0_7QXRYPlQ"
            },
            {
                "id": 2,
                "name": "Ahmaffffd",
                "role": "React Developer",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0fC2KsLfnEv7mNSr47lgwuQ5x3NyIsN3BabFtrdGMF50APqQqOG-_zBzj6P7Pc8zd_8&usqp=CAU"
            }
        ]
    }
    render() {
        return (
            <div className="user-page">
                <UserCard userData={this.state.usersList[0]}></UserCard>
                <UserCard userData={this.state.usersList[1]}></UserCard>
            </div>
        )
    }
    componentDidMount() {
        let apiUrl = 'http://' + window.location.hostname + ':8000/users'
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    usersList: data
                })
            });
    }
}
