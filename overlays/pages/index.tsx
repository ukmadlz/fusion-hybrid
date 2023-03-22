import HeadComponent from '../components/head.component'
import FooterComponent from '../components/footer.component'
import CarouselComponent from '../components/carousel.component'

export default function Home() {
  return (
    <div className="container">
      <HeadComponent/>
      <main>
        <CarouselComponent width={400} height={200} interval={10} spacer={4} caption={"Brought to you by"} images={[
          "https://cdn.sanity.io/images/6io4al7p/production/530b9c9356cce871599ceb4068dd84e59cb903ef-801x801.png?w=400&h=200&q=80&fit=clip&auto=format",
          "https://cdn.sanity.io/images/6io4al7p/production/bf623d79a5f2e05babe6a6a19e40bd0265477e98-720x671.png?w=400&h=200&q=80&fit=clip&auto=format",
          "fusion-overlay/fusion-group.png"
        ]} />
      </main>
      <FooterComponent/>
    </div>
  )
}