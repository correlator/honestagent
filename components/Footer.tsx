import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">HonestAgent</Link>
            <p className="mt-2">Empowering businesses with AI</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="#about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="#team" className="hover:text-blue-400">Team</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} HonestAgent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

