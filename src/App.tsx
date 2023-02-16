import { Header } from './components/Header'
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar';


const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https:github.com/chicaofmp.png',
          name:'Francisco M.',
          role: 'Web Dev.'
      },
      content: [
              { type: 'paragraph', content: 'Fala galeraa 👋,' },
              { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,' },
              { type: 'link', content: '👉 jane.design/doctorcare 👋,' },
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/17316392?v=4',
          name:'Jakeliny.',
          role: 'Instrutora'
      },
      content: [
              { type: 'paragraph', content: 'Fala galeraa 👋,' },
              { type: 'paragraph', content: ',' },
              { type: 'link', content: '👉 jane.design/doctorcare 👋,' },
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
  },
]


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div> 
  )
}       

export default App
