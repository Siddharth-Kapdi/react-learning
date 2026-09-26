import { useEffect, useState } from 'react'

const navItems = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    label: 'About',
    href: '/about',
  },
  {
    id: 3,
    label: 'Services',
    href: '/services',
  },
  {
    id: 4,
    label: 'Projects',
    href: '/projects',
  },
  {
    id: 5,
    label: 'Contact',
    href: '/contact',
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header className="bg-neutral-700 shadow-white text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Apex</h1>
            </div>
            <nav>
              <ul className="hidden sm:flex gap-5">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="font-semibold hover:scale-110 hover:text-blue-500 transition duration-200"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="block sm:hidden">
                <button
                  className={`font-semibold border-2 py-1 px-4 transition duration-200 hover:bg-blue-500`}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  Menu
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="sm:hidden">
        <HiddenNav isOpen={isOpen} />
      </div>
    </>
  )
}

export default Navbar

const HiddenNav = ({ isOpen }) => {
  return (
    <div className={` ${isOpen ? 'block' : 'hidden'} flex flex-col justify-center items-center`}>
      <div className="w-72 bg-black/30 backdrop-blur-sm text-white">
        <ul className="w-full p-4 text-center space-y-4">
          <li>
            <a
              href=""
              className="font-semibold py-1 px-4 transition duration-200 hover:scale-120 hover:text-blue-500"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href=""
              className="font-semibold py-1 px-4 transition duration-200 hover:scale-120 hover:text-blue-500"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href=""
              className="font-semibold py-1 px-4 transition duration-200 hover:scale-120 hover:text-blue-500"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href=""
              className="font-semibold py-1 px-4 transition duration-200 hover:scale-120 hover:text-blue-500"
            >
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
