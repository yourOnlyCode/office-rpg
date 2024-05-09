import React, { useState } from 'react'
import { auth } from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

const Navigation = () => {
    let [showMenu, setShowMenu] = useState(false)
    const router = useRouter()
    const userSession = sessionStorage.getItem('user')
    return (
        <div className='text-gray-300 p-2 text-lg nav-bar press-start-2p-regular flex flex-col justify-center text-center bg-green-800'>
            <div>Office RPG</div>
            <div className='flex m-2 text-sm justify-between'>
                <button>Menu</button>
                <button onClick={() => setShowMenu(!showMenu)}>Settings</button>
            </div>
            <div className='border'></div>
            {
                showMenu === true ?
                    <div className='absolute right-0 m-2 mt-40 bg-green-600'>
                        <button className='border p-4 rounded' onClick={() => {
                            signOut(auth)
                            router.push('/sign-in')
                            sessionStorage.removeItem('user')
                        }}>Log Out</button>
                    </div>
                    : null
            }
        </div >
    )
}

export default Navigation;