import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-8">Discover amazing things with us!</p>
        <div className="flex space-x-4">
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Link>
          <Link href="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Register</Link>
        </div>
      </div>
    </main>
  )
}
