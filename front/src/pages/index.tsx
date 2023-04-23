import Image from 'next/image'
import { Inter } from 'next/font/google'
import UploadImage from '@/components/UploadImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-white items-center justify-between p-24 ${inter.className}`}
    >
      <UploadImage />
      <button className='bg-blue-400 text-white rounded-md p-4'>Submit Image</button>
    </main>
  )
}
