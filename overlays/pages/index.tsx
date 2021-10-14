import HeadComponent from '../components/head.component'
import FooterComponent from '../components/footer.component'
import CarouselComponent from '../components/carousel.component'

export default function Home() {
  return (
    <div className="container">
      <HeadComponent/>
      <main>
        <CarouselComponent width={400} height={200} interval={10} spacer={4} caption={"Brought to you by"} images={[
          "fusion-overlay/GS_Signature_Mono-002.png",
          "fusion-overlay/fusion-group.png"
        ]} />
      </main>
      <FooterComponent/>
    </div>
  )
}