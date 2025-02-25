import PostCard from "./components/PostCard";

const fetchPosts = async (): Promise<IPost[] | undefined >=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if(!res.ok){
    console.error(`Failed to fetch posts with status code: ${res.status}`);
    return undefined;
  } else {
    return res.json()
  }
}

export default async function Home() {

  const posts = await fetchPosts();

  return (
    <main>
      <h2>Home</h2>
      {posts && posts.map((post) => <PostCard key={post.id} post={post}/>)}
    </main>
  );
}
