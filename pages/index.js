import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed';
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({session}) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </main>
      
    </div>
  )
}
export async function getServerSideProps(context) {
  //get the user
  const session =await getSession(context);

  return {
    props: {
      session
    }
  }
}
