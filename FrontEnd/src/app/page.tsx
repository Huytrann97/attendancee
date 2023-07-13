import Image from 'next/image'
import Header from './layouts/Header'
import Button from './components/Button'
export default function Home() {
  return (
    <div >
      <Header />
      <p className='text-lg'>Home Page</p>
      <Button />
    </div>
   )
}
