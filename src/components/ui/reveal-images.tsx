'use client'

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: ImageSource[];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const container = "absolute  right-0 -top-2 z-40  h-16 w-12  md:h-20  md:w-16 rounded-md bg-[#EEEEEF] dark:shadow-white shadow-2xl shadow-black  ";

  return (
    <div className="relative h-fit w-fit overflow-visible py-8  ">
      <h1 className=" text-5xl md:text-7xl font-black text-foreground transition-all duration-500  ">
        {text}
      </h1>
      {images.map((img, index) => (
        <div
          key={index}
          className={cn(
            container,
            "transition-all duration-500 overflow-hidden rounded-md",
            visibleIndex === index
              ? "opacity-100 scale-100 rotate-3 "
              : "opacity-0 scale-0 rotate-180 "
          )}
        >
          <img alt={img.alt} src={img.src} className="h-full w-full object-contain rounded-md   " />
        </div>
      ))}
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    
    {
      text: "..more",
      images: [
        {
          src: "/alert.png",
          alt: "Image 1",
        },
        {
          src: "/dialog.png",
          alt: "Image 2",
        },
        {
          src: "/dropdown.png",
          alt: "Image 3",
        },
      ],
    },
  ];

  return (
    <div suppressHydrationWarning  className="flex flex-col sm:flex-row flex-wrap items-start gap-8 rounded-sm bg-background px-4 py-4">
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList };
