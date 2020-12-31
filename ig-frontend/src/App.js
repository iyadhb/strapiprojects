import './App.css';

import Post from './components/Post'

const post = {
  likes: 20,
  description: "This is my post",
  image: {
    url: "/uploads/pexels_snapwire_34950_df1d2d4f18.jpg"
  }
}

function App() {
  return (
    <div className="App">
    <Post
      likes={post.likes}
      description={post.description}
      url={post.image && post.image.url}
    />
    </div>
  );
}

export default App;
