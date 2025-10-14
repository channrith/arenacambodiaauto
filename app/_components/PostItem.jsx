import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }) => {
    const getTimeAgo = (date) => {
        const now = new Date();
        const postDate = new Date(date);
        const diffInMs = now - postDate;
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

        if (diffInHours < 24) {
            return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
        } else {
            const day = postDate.toLocaleDateString('en-US', {
                timeZone: 'Asia/Phnom_Penh',
                day: '2-digit'
            });

            const month = postDate.toLocaleDateString('en-US', {
                timeZone: 'Asia/Phnom_Penh',
                month: 'long'
            });

            const year = postDate.toLocaleDateString('en-US', {
                timeZone: 'Asia/Phnom_Penh',
                year: 'numeric'
            });

            return `${day} ${month} ${year}`;
        }
    };

    return (
        <div className="post-item flex mb-5">
            <Image
                src={post.featured_image.thumbnail}
                alt={post.title}
                width={240}
                height={160}
                className="rounded-md mr-4 object-cover"
            />
            <div className="post-article">
                <h4><Link href={post.link}>{post.title}</Link></h4>
                <p className="post-article-summary">{post.excerpt}</p>
                <p className="post-article-published-date">{getTimeAgo(post.published_at)}</p>
            </div>
        </div>
    );
};

export default PostItem;
