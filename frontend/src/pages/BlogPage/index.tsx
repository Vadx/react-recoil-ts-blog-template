import PostList from '../../components/PostList'
import Seo from '../../components/SEO'

const BlogPage = () => {
  return (
    <>
      <Seo
        title="Blog"
        metaDescription="Blog page"
        metaKeywords="Blog page Keywords"
      />
      <PostList />
    </>
  )
}

export default BlogPage
