import react from 'react'

const Logo = ({ light, className = '', small = false, blend = false }) => {
  const color = light ? 'secondary' : 'primary'

  return (
    <div
      className={`logo ${
        small ? 'w-[64px] h-[48px]' : 'w-[168px] h-[124px]'
      }  flex flex-col items-center select-none cursor-pointer ${className}`}
    >
      <span
        className={`w-[100%] h-8 ${
          small ? 'border' : 'border-2'
        } border-b-0 border-${color} ${blend ? 'mix-blend-difference' : ''}`}
      ></span>

      <p
        className={`${
          small ? 'text-[0.8rem]' : 'text-[2rem]'
        }  text-nowrap cinzel text-${color} ${blend ? 'mix-blend-difference' : ''}`}
      >
        jomo kigo
      </p>

      <p
        className={`${
          small ? 'hidden' : 'text-[0.75rem] tracking-widest text-nowrap'
        } lato text-${color} text-center ${blend ? 'mix-blend-difference' : ''}`}
      >
        Unwavering Creativity
      </p>

      <span
        className={`w-[100%] h-8 ${
          small ? 'border' : 'border-2'
        } border-t-0 border-${color} ${blend ? 'mix-blend-difference' : ''}`}
      ></span>
    </div>
  )
}

export default Logo
