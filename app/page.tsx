import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ fontWeight: 'bold', fontSize: '3em', color: '#0077be', marginBottom: '20px' }}>hello kay</div>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <img src="/1.jpg" alt="Image 1" className="w-full h-auto" />
          </CarouselItem>
          <CarouselItem>
            <img src="/2.jpg" alt="Image 2" className="w-full h-auto" />
          </CarouselItem>
          <CarouselItem>
            <img src="/3.jpg" alt="Image 3" className="w-full h-auto" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}