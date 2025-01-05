import ScrollAnimationWrapper from "../ScrollAnimationWrapper"

interface Stat{
  number: string
  title: string
}

const stats: Stat[] =[
  {
    number: '+24',
    title: 'projects completed'
  },
  {
    number: '+8',
    title: 'clients served'
  },
  {
    number: '+3',
    title: 'years of experience'
  }
]

const Stats: React.FC = () =>{
  return (
    <ScrollAnimationWrapper animationType="scaleIn" className="w-[90%] md:w-1/2 h-32 flex-shrink-0 mx-auto flex items-center justify-evenly gap-0 z-[10] -mt-16">
      
      {stats.map((stat, index) => (
        <div key={index} className="h-full w-full flex flex-col items-center justify-center text-center px-4 bg-custom-gray z-[10]">
          <p className="text-2xl md:text-5xl abril">{stat.number}</p>
          <p className="capitalize text-xs">{stat.title}</p>
        </div>
      ))}

    </ScrollAnimationWrapper>
  )
}

export default Stats