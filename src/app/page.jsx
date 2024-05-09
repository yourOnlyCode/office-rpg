'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

export default function Home() {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const userSession = sessionStorage.getItem('user')


  if (!user && !userSession) {
    router.push('/sign-in')
  }

  console.log(user)

  return (
    <div>
      <button onClick={() => {
        signOut(auth)
        router.push('/sign-in')
        sessionStorage.removeItem('user')
      }}>Log Out</button>
      <div>Welcome, User!</div>
    </div >
  );
}
