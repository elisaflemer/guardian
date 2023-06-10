import Image from 'next/image'
import Login from './login/login'



//dev
import ProfileUser from './profile_user/profile_user'


export default function Home() {
  return (
    <main>
      <div>
        <ProfileUser></ProfileUser>
      </div>
    </main>
  )
}
