import classes from './featured-posts.module.css'
function FeaturedPosts() {
    const posts = getFeaturedPosts()

    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts
