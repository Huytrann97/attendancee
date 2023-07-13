import Image from 'next/image'
import Link from 'next/link'
import Button from './components/Button'
import Header from './layouts/Header'
export default function Home() {
  return (
    <div>
      <Header />
      <h3>Home Page</h3>
      <Button></Button>
    </div>
  )
}
