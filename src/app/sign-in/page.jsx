'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter()

    let [loginErrorMessage, setLoginErrorMessage] = useState(false)
    let handleLoginErrorMessage = () => {
        setLoginErrorMessage(!loginErrorMessage)
    }

    const handleSignIn = async () => {
        try {
            const res = await signInWithEmailAndPassword(email, password);
            console.log({ res });
            sessionStorage.setItem('user', true)
            setEmail('');
            setPassword('');
            if (res === undefined) {
                console.log(loginErrorMessage)
                handleLoginErrorMessage()
            }
            if (res !== undefined) {
                router.push('/')
            }
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center press-start-2p-regular ">
            <div className="bg-gray-300 p-10 rounded-lg shadow-xl w-96">
                <h1 className="text-white text-2xl mb-5">Sign In</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 bg-gray-100 rounded outline-none text-gray "
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 bg-gray-100 rounded outline-none text-gray "
                />
                <button
                    onClick={handleSignIn}
                    className="w-full p-3 bg-green-800 rounded text-white hover:bg-green-700"
                >
                    Sign In
                </button>
                <div className='flex flex-col text-center'>
                    <div className='text-xs mt-2'>Don't have an account?</div>
                    <button className='text-green-600 text-sm mt-2 underline hover:text-green-500' onClick={() => router.push('/sign-up')}>Sign Up</button>
                    {loginErrorMessage === true ? <div className='mt-2 text-xs text-red-600'>you have entered an invalid username or password</div> : null}
                </div>

            </div>
        </div>
    );
};

export default SignIn;