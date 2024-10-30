import Link from "next/link"
import { useEffect, useState } from "react"

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 80 // Adjust this value to match your navbar's height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-darkblue to-redblue z-50 transition-shadow ${isScrolled ? 'shadow-lg' : ''
        }`}
    >
      <div className="mx-auto container px-12 flex justify-center lg:justify-between items-center">
        <div className="py-5 px-[0.9375rem]">
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="w-[6.25rem]" />
          </Link>
        </div>
        <nav className="hidden lg:flex">
          <button onClick={() => scrollToSection('getcozy')} className="listitem">
            <p>Get Cozy</p>
          </button>
          <button onClick={() => scrollToSection('ourclients')} className="listitem">
            <p>Our Clients</p>
          </button>
          <button onClick={() => scrollToSection('adverts')} className="listitem">
            <p>Adverts</p>
          </button>
          {/* <button onClick={() => scrollToSection('partners')} className="listitem">
            <p>Partners</p>
          </button> */}
          <button onClick={() => scrollToSection('sayhi')} className="listitem">
            <p>Say Hi</p>
          </button>
        </nav>
      </div>
    </header>
  )
}