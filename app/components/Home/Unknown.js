import react from "react";
import AnimatedText from "../AnimatedText";

const Unknown = () => {
  return(
    <section className='h-[90vh] flex-shrink-0 flex flex-col items-center justify-start relative'>
      {/* <h1 className='text-[2.5rem] md:text-9xl'>Creativity</h1> */}
      <AnimatedText text={'Creativity'} />
    </section>
  )
}

export default Unknown;