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








