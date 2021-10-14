/* eslint-disable @next/next/no-img-element */
import HeadComponent from '../components/head.component'
import CarouselComponent from '../components/carousel.component'

const thirdWidth = (1920/3);
const thirdHeight = (1080/3);

export default function Home() {
  return (
    <div className="container">
      <HeadComponent/>
      <main>
        <div
            style={{
                width: thirdWidth + 'px',
                height: thirdHeight + 'px',
                position: 'absolute',
                left: thirdWidth + 'px',
                top: (thirdHeight - 100) + 'px',
            }}>
            <img
                src="/images/FUSION-EVENTS.png"
                alt="Fusion Events"
                style={{width: '100%'}}
            />
        </div>
      </main>
    </div>
  )
}