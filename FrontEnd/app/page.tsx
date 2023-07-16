import Image from 'next/image'
import Header from './layouts/header'
import LoginArea from './components/login-area'
export default function Home() {
  return (
    <div className='w-full flex justify-center items-center h-screen pb-40' >
        <LoginArea   />
    </div>
  )
}
