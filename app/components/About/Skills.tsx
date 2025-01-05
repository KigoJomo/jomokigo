import Image from 'next/image'
import { FC } from 'react'

const skills = [
  {
    title: 'technical skills',
    set: [
      {
        name: 'React.js',
        image: 'react',
        usage: 'Efficient UI design and component-based development',
      },
      {
        name: 'Next.js',
        image: 'next',
        usage: 'Server-side rendering and building scalable web applications',
      },
      {
        name: 'Tailwind CSS',
        image: 'tailwind',
        usage: 'Rapid UI styling with utility-first CSS',
      },
      {
        name: 'TypeScript',
        image: 'typescript',
        usage: 'Type-safe JavaScript development for improved reliability',
      },
    ],
  },
  {
    title: 'soft skills',
    set: [
      {
        name: 'Problem-Solving',
        image: 'problem-solving',
        usage: 'Breaking down complex challenges into manageable tasks',
      },
      {
        name: 'Communication',
        image: 'communication',
        usage:
          'Clear and effective information exchange with team members and clients',
      },
      {
        name: 'Teamwork',
        image: 'teamwork',
        usage: 'Collaborating efficiently in diverse teams to achieve goals',
      },
      {
        name: 'Time Management',
        image: 'time-management',
        usage:
          'Organizing tasks to meet deadlines without compromising quality',
      },
    ],
  },
]

const Skills: FC = () => {
  return (
    <section className="">
      <div className="w-full flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-12">
        <h2>my skills ...</h2>

        <p className="text-sm md:text-base md:w-[38ch] md:text-right">
          Here&apos;s a look at my array of skills - those that make me who I am
          in software development and in other facets of my life.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:px-16 md:gap-16">
        {skills.map((category, index) => (
          <div
            key={index}
            className="w-full aspect-[4/3] bg-background p-6 flex flex-col gap-4">
            <h3 className="">{category.title}</h3>

            <hr className="opacity-20" />

            <div className="w-full flex flex-col gap-4">
              {category.set.map((skill, index) => (
                <div
                  key={index}
                  className="w-full bg-custom-gray flex items-center gap-2 py-2 px-4">
                  <Image
                    src={`/images/skills/${skill.image}.webp`}
                    alt={`${skill.name} is one of jomo kigo's skills`}
                    width={100}
                    height={100}
                    className="w-10 aspect-square rounded-full"
                  />

                  <div className="w-full flex flex-col gap-1">
                    <h4 className='uppercase'>{skill.name}</h4>
                    <p className='text-xs border-l border-b border-white/40 pl-1 pb-1 ml-2'>{skill.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
