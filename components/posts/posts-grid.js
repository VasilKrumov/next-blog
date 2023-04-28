import classes from './posts-grid.module.css'
import PostItem from './post-item'
function PostsGrid(props) {
    const { posts } = props
    return (
        <ul className={classes.grid}>
            {posts.map((post) => (
                <PostItem
                    key={post.slug}
                    image={post.image}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    slug={post.slug}
                />
            ))}
        </ul>
    )
}

export default PostsGrid
