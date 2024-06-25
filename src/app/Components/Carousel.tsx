"use client";

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import s1 from "../image/carousel/1.jpg"
import s2 from "../image/carousel/2.jpg"
import s3 from "../image/carousel/3.jpg"
import s4 from "../image/carousel/4.jpg"
import s5 from "../image/carousel/5.jpg"

export default function CarouselDemo() {

    const images = [s1, s2, s3, s4, s5];

  return (
    <Carousel 
    plugins={[Autoplay({delay: 3000})]}
    className="w-full">
      <CarouselContent >
        {
            images.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex items-center justify-center p-2">
                    <Image src={image} alt="slide" className=" w-full"/>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
