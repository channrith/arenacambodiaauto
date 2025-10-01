const NewsContent = ({ content }) => {
    return (
        <div
            className="news-content"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default NewsContent;
