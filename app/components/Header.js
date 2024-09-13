import Logo from './Logo'

const Header = () => {
  return (
    <header className="w-screen h-[10vh] fixed top-0 px-4 md:px-12 flex items-center justify-between">
      <Logo small blend />
    </header>
  )
}

export default Header
