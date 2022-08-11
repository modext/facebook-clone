import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"
import Post from "./Post"
import { collection, query, addDoc, getDocs, doc, orderBy } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

function Posts() {

    const [thePost, setThePost] = useState([]);

    useEffect(() => {

            const getData = async()=>{        
                const citiesRef = collection(db,'posts');
                const snapshot = await getDocs(query(citiesRef, orderBy('timestamp', "desc"))) ;
                const postlist = snapshot.docs.map(doc => doc.data());
                setThePost( postlist);
                console.log("uploaded")
                console.log(thePost)
            }
            getData()
            
        },[])


  return (
    <div>
        {thePost.map((post) => (
        <Post
            key={post.id}
            name={post.name}
            message={post.message}
            email= {post.email}
            image= {post.image}
            timestamp= {post.timestamp}
            postImage= {post.postImage}
        />
      ))}
        
        {doc.id}
    </div>
  )
}

export default Posts