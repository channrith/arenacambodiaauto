import PostItem from "./PostItem";

const PostList = ({ posts, latest }) => {
    return (
        <div className="blog-posts">
            {latest === true && <h3 className="text-2xl font-semibold mb-4">Latest Blog Posts</h3>}
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
