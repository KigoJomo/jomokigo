import Featured from "./components/Home/Featured";
import Hero from "./components/Home/Hero";
import Stats from "./components/Home/Stats";
import Who from "./components/Home/Who";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Who />
      <Featured />
    </>
  );
}
