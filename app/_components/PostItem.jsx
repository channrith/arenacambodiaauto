import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }) => {
    return (
        <div className="blog-post-item flex mb-5">
            <Image
                src={post.featured_image.thumbnail}
                alt={post.title}
                width={240}
                height={160}
                className="rounded-md mr-4 object-cover"
            />
            <div>
                <h4 className="text-lg font-bold"><Link href={post.link}>{post.title}</Link></h4>
                <p className="text-gray-700">{post.excerpt}</p>
            </div>
        </div>
    );
};

export default PostItem;
