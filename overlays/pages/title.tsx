/* eslint-disable @next/next/no-img-element */
import HeadComponent from '../components/head.component'
import FooterComponent from '../components/footer.component'
import CarouselComponent from '../components/carousel.component'

export default function Home() {
  return (
    <div className="container">
      <HeadComponent/>
      <main>
        <img
            src="/images/FUSION-EVENTS.png"
            alt="Fusion Events"
        />
      </main>
    </div>
  )
}