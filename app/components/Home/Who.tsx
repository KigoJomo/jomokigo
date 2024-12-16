import { Sparkle } from "lucide-react";
import Image from "next/image";
import React from "react";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";

interface PointProps{
  text: string;
}

const Point: React.FC<PointProps> = ({text}) => {
  return (
    <div className="flex gap-4">
      <Sparkle size={24} className="flex-shrink-0 border p-1 rounded-full" />
      <p>{text}</p>
    </div>
  )
}

const Who: React.FC =()=>{
  return (
    <section className="flex flex-col gap-6">
      <h2>about me ...</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <ScrollAnimationWrapper animationType="slideInBottom" delay={0.25}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dignissimos enim expedita blanditiis dolor quas at molestias, labore hic dolores autem numquam? Neque eveniet ducimus dignissimos numquam doloremque non aliquam.</p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="slideInBottom" delay={0.75}>
          <Image
            src={"/images/nova.webp"}
            alt="jomo kigo software developer"
            width={1000}
            height={1000}
            className="w-full aspect-square image-clip-bottom"
           />
        </ScrollAnimationWrapper>

         <ScrollAnimationWrapper animationType="slideInBottom" delay={1.5}>
           <div className="w-full flex flex-col gap-6">
            <Point text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dignissimos enim expedita blanditiis dolor." />
            <Point text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dignissimos enim expedita blanditiis dolor." />
            <Point text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dignissimos enim expedita blanditiis dolor." />
           </div>
         </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

export default Who