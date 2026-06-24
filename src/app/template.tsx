import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="top" />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  )
}
