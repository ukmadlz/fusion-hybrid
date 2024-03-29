/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function CarouselComponent ({ width, height, interval, spacer, images, caption }: {
    width: number;
    height: number;
    interval: number;
    spacer: number;
    images: Array<string>;
    caption?: string;
}) {
    const spacingArray = new Array(spacer).fill(0);
    return (
        <Carousel
            autoPlay={true}
            interval={interval*1000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            width={"20em"}
        >
            {spacingArray.map(() => { return <div></div>})
            .concat(images.map((image) => {
                const imageUrl = (image.startsWith('http')) ?
                    image :
                    `https://res.cloudinary.com/elsmore-me/image/upload/c_lpad,h_${height},w_${width}/${image}`
                return (<div style={{backgroundColor:"rgba(255, 255, 255, 0.2)"}}>
                    <h1>{caption}</h1>
                    <img
                        src={imageUrl}
                    />
                </div>)
            }))}
        </Carousel>
    );
}