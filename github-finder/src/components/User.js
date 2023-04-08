import React, { Component } from 'react'

export class User extends Component {
    render() {
        const { avatar_url,name,followers,github_url,website } = this.props.user;
        return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img className='img-fluid rounded-start avatar' src={ avatar_url }  alt={ name } />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className="card-title">{ name }</h3>
                            <p>Followers: { followers }</p>
                            <a target="_blank" href={ github_url } className='btn btn-primary'>Github Profile</a>
                            <a target="_blank" href={ website } className='btn btn-primary ms-2'>WebSite</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User