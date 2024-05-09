'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

import Navigation from './Navigation'

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
      <Navigation></Navigation>


    </div >
  );
}
