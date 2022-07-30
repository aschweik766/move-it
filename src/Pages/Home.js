import Card from "../Components/Card"
import { posts } from "../Components/HomeData"


const Home = () => {
    return (
        
        <div className="home">
           {posts.map(post=>(
                <Card key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Home













// import React, { useEffect, useState } from "react";
// import axios from "axios";

// axios.defaults.baseURL = "/api";

// const Home = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [user, setUser] = useState();

//   useEffect( () => {
//     const fetchProfile = async () => {
//       const data = await axios.get("/profile");
//       setUser(data);
//       setLoading(false);
//     }
//     fetchProfile()
//     .catch(console.error)
//   }, []);

//   if (isLoading) return "Loading...";
//   else {
//     return (
//       <div>
//         <p>Email: {user.email}</p>
//         <p>First Name: {user.first_name}</p>
//       </div>
//     );
//   }
// }

// export default Home;
