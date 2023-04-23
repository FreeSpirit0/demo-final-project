import Image from 'next/image'
import { Inter } from 'next/font/google'
import UploadImage from '@/components/UploadImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-white justify-between p-8 ${inter.className}`}
    >
      <UploadImage />
    </main>
  )
}
