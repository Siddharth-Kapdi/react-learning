import './App.css'
import BlogPostList from './BlogPostList'

const posts = [
  {
    id: 1,
    title: 'The Future of AI-Powered Product Development',
    date: '2026-07-31',
    excerpt:
      'How AI is changing the way modern teams research, design, build, and launch digital products.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Designing Interfaces That Feel Effortless',
    date: '2026-07-29',
    excerpt:
      'A practical look at the small interaction and visual design decisions that make products easier to use.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Why Performance Is a Product Feature',
    date: '2026-07-27',
    excerpt:
      'Fast websites do more than improve technical metrics. They reduce friction and directly influence user behavior.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Building Better Habits for Remote Teams',
    date: '2026-07-22',
    excerpt:
      'Simple communication and planning habits can make distributed teams more focused without adding unnecessary meetings.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'A Practical Guide to Modern Web Accessibility',
    date: '2026-07-15',
    excerpt:
      'The essential accessibility principles every frontend developer and designer should understand before shipping a product.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'How to Turn User Feedback Into Product Decisions',
    date: '2026-07-08',
    excerpt:
      'Collecting feedback is easy. The difficult part is separating useful signals from noise and turning them into decisions.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    title: 'The Case for Simpler Design Systems',
    date: '2026-06-24',
    excerpt:
      'More components do not necessarily create a better design system. Learn how constraints can improve consistency.',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    title: 'What Makes a Great Developer Experience?',
    date: '2026-06-12',
    excerpt:
      'From documentation to tooling and deployment, developer experience has a measurable impact on engineering velocity.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 9,
    title: 'Lessons From Building Products at Scale',
    date: '2026-05-28',
    excerpt:
      'Scaling a product introduces problems that cannot be solved simply by adding more people or more infrastructure.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 10,
    title: 'A Better Approach to Technical Documentation',
    date: '2026-05-10',
    excerpt:
      'Good documentation should help people accomplish a task quickly rather than force them to understand the entire system first.',
    image:
      'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80',
  },
]

function App() {
  return (
    <div className="container">
      <BlogPostList posts={posts} />
      {/* <BlogPostList posts={[]} /> */}
    </div>
  )
}

export default App
