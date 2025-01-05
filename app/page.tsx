import Featured from '@/components/Home/Featured'
import Hero from '@/components/Home/Hero'
import Ongoing from '@/components/Home/Ongoing'
import Services from '@/components/Home/Services'
import Who from '@/components/Home/Who'
import Stats from './components/Home/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Who />
      <Featured />
      <Services />
      <Ongoing />
    </>
  )
}
