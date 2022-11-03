import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';





const DeleteData = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://127.0.0.1:8000/apiV1/status/')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);





   const deletePost = async (id) => {
       await fetch(`http://127.0.0.1:8000/apiV1/status/${id}`, {
          method: 'DELETE',
       }).then((response) => {
          if (response.status === 200) {
             setPosts(
                posts.filter((post) => {
                   return post.id !== id;
                })
             );
          } else {
             return;
          }
       });
       };

return (
   <div>
       
       {/* <div className="posts-container">
 {posts.map((post) => {
    return (
       <div className="post-card" key={post.id}>
          <h2 className="post-title">{post.content}</h2>
         <img src={post.image} alt="" />
          <div className="button">
          <div className="delete-btn">Delete</div>
          </div>
       </div>
    );
 })}
</div>
 */}


<div className="posts-container">
 {posts.map((post) => {
    return (
       <div className="post-card" key={post.id}>
          {/* ... */}
          <h2>{post.content}</h2>
          <div className="button">
            <button className="delete-btn" onClick={() => deletePost(post.id)}>
                Delete  </button>
          </div>    
       </div>
    );
 })}
</div>

</div>
   );
};

export default DeleteData;