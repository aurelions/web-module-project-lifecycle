import axios from 'axios';
import React from 'react'
import Followers from './Followers'
import './user.css'

import {
    Card,
    CardBody,
    CardText,
    CardSubtitle,
    CardTitle,
    CardLink,
} from 'reactstrap'

class User extends React.Component {

    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
            .then(res => {
                this.setState({
                    ...this.state,
                    userFollowers: res.data
                })
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProp, prevState) {
        if(prevProp.user !== this.props.user) {
            axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
                .then(res => {
                    this.setState({
                        ...this.state,
                        userFollowers: res.data
                    })
                })
                .catch(err => console.log(err))
        }
    }


    render() {
        const { user } = this.props;
        return (

            <div>

                <Card className="card">
                    <CardBody>
                        <CardTitle className="username">{user ? `${user.login}` : "User Not Found" }</CardTitle>
                    </CardBody>
                    <img width="250px" src={`${user.avatar_url}`} alt="User Avi" />
                    <CardBody className="mainbody">
                        <CardText>Bio : {user ? `${user.bio}` : "Lol Who doesn't have a bio in 2021"}</CardText>
                        <CardLink href="#"> {user ? `${user.blog}` : "Sorry, No Blog"}</CardLink>
                        <div className="github-user-sub-card">
                            <CardText> Followers : {user ? `${user.followers}` : "Followers Machine Broken"}</CardText>
                            <CardText> Following : {user ? `${user.following}` : "Following Machine Broken"}</CardText>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                    <h3>Followers</h3>
                        <Followers followers={this.state.followers} />
                    </CardBody>
                </Card>

            </div>
        )
    }
}

export default User;