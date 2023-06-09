import Image from 'next/image'
import Login from './login/login'


//dev
import Feed from './feed/feed'


export default function Home() {
  return (
    <main>
      <div>
        <Feed></Feed>
      </div>
    </main>
  )
}
