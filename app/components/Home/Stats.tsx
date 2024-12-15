// import 

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
    <div className="w-4/5 md:w-3/4 h-32 flex-shrink-0 -mt-16 z-[10] mx-auto bg-custom-gray flex items-center justify-evenly gap-4 sliced-border">
      
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-2xl md:text-5xl abril">{stat.number}</p>
          <p className="capitalize text-xs">{stat.title}</p>
        </div>
      ))}

    </div>
  )
}

export default Stats