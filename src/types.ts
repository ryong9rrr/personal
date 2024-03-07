export type Post = {
  node: {
    id: string
    frontmatter: {
      title: string
      date: string
      summary: string
      categories: string[]
    }
  }
}
