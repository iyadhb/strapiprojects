import './App.css';

import Post from './components/Post'


const posts = [
  {
    likes: 20,
    description: "This is my post",
    image: {
      url: "/uploads/pexels_snapwire_34950_df1d2d4f18.jpg"
          }
    },
    {
      likes: 33,
      description: "Second post descriptin",
      image: {
        url: "/uploads/pexels_snapwire_34950_df1d2d4f18.jpg"
          }
    },
    {
    likes: 50,
    description: "Third post inline",
    image: {
      url: "/uploads/pexels_snapwire_34950_df1d2d4f18.jpg"
    }
  }
]


function App() {
  return (
    <div className="App">
    {[posts.map(post =>(
       <Post
      likes={post.likes}
      description={post.description}
      url={post.image && post.image.url}
    />
    ))]}
   
    </div>
  );
}

export default App;
