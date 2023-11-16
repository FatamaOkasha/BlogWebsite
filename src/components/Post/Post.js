import "./Post.css";
import Seaimage from "./Seaimage.jpg";
const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src={Seaimage} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        voluptates. Officia assumenda cumque quisquam quam? Assumenda nulla
        placeat odio. Adipisci facilis quis perferendis laborum, sit beatae
        doloribus eveniet debitis quo.
      </p>
    </div>
  );
};

export default Post;
