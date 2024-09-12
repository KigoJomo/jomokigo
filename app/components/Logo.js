import react from 'react'

const Logo = ({ light }) => {
  const color = light ? 'secondary' : 'primary'

  return (
    <div className="flex flex-col items-center select-none cursor-pointer">
      <span className={`w-[90%] h-8 border-2 border-b-0 border-${color}`}></span>
      <p className={`text-[2rem] abril text-${color}`}>jomo kigo</p>
      <p className={`text-xs tracking-widest montserrat text-${color}`}>Unwavering Creativity</p>
      <span className={`w-[90%] h-8 border-2 border-t-0 border-${color}`}></span>
    </div>
  )
}

export default Logo
