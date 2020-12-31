import React from 'react'

const post = {
    "id": 1,
    "description": "I would love to be travelling again \n\nI really do",
    "likes": 20,
    "author": null,
    "published_at": "2020-12-31T15:11:53.496Z",
    "created_at": "2020-12-31T15:11:18.675Z",
    "updated_at": "2020-12-31T15:11:53.525Z",
    "image": [
        {
            "url": "/uploads/pexels_snapwire_34950_df1d2d4f18.jpg",
        }
    ]
}



const API_URL = 'http://localhost:1337'
const formatImageUrl = (url)  => `${API_URL}${url}`


const Posts = ({description, likes, url}) => {
    
    return (
        <div className="Post">
        <img className="Post__Image" src={formatImageUrl(url)} alt="some" />
            <h4>{description}</h4>
            <div>
                <span>Likes: {likes}</span>
            </div>

        </div>
    )
}

export default Posts
