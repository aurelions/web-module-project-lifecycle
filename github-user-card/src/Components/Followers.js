import React from 'react'

class Followers extends React.Component {
   
    render() {
        const { followers } = this.props;

        return (

            <>

                {
                    followers.map(follower => {
                        return (
                            <p>{follower.login}</p>
                        )
                    })
                }

            </>

        )
    }
}

export default Followers;