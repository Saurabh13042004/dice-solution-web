"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by Leading Startups",
  logos = [
    {
      id: "logo-1",
      description: "Parlux - Beauty Brand",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Parlux-logo.jpg",
      className: "h-12 w-auto object-contain max-w-24",
    },
    {
      id: "logo-2",
      description: "Tech Solutions Company",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXV9EIHr6aUaqR_sKJTmgaEHEay4xhHPCQWQ&s",
      className: "h-12 w-auto object-contain max-w-24",
    },
    {
      id: "logo-3",
      description: "Professional Services",
      image: "https://pbs.twimg.com/profile_images/1570526707475714049/C-BVGCkA_400x400.jpg",
      className: "h-12 w-auto object-contain max-w-24",
    },
    {
      id: "logo-4",
      description: "United Salon Supplies",
      image: "https://unitedsalonsupplies.com/cdn/shop/files/united-salon-logo_1_1200x1200.png?v=1668799938",
      className: "h-12 w-auto object-contain max-w-24",
    },
    {
      id: "logo-5",
      description: "Plaud.ai",
      image: "https://cdn.shopify.com/s/files/1/0765/7039/4943/files/plaud.ai1.png?v=1730704709&width=2048",
      className: "h-12 w-auto object-contain max-w-24",
    },
    {
      id: "logo-6",
      description: "Software Solutions",
      image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/462/517/datas/medium.png",
      className: "h-12 w-auto object-contain max-w-24",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-3xl font-extralight tracking-tight text-pretty lg:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="pt-10 md:pt-16">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center">
                    <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-border transition-colors min-h-[80px] flex items-center justify-center">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };