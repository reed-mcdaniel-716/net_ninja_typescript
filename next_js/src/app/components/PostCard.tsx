interface IPostCardProps {
  post: IPost
}

export default function PostCard({ post } : IPostCardProps){
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
