
import Slider from "react-slick";
import brand1 from '../changeLivesComponent/images/brand1.png'
import brand2 from '../changeLivesComponent/images/brand2.png'
import brand3 from '../changeLivesComponent/images/brand3.png'
import brand4 from '../changeLivesComponent/images/brand4.png'
import brand5 from '../changeLivesComponent/images/brand5.png'
import brand6 from '../changeLivesComponent/images/brand6.png'
import brand7 from '../changeLivesComponent/images/brand7.png'
const settings = {

    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const Slide = () => {
    return (
        <div style={{
            width: '80%',
            height: '20vh',
            

        }} className="slider-container ">
            <Slider {...settings}>
                <div className="slidedivImg" >
                    <img
                        src={brand1}
                        alt="Platform 1"
                        className="img-fluid"
                    />
                </div>
                <div className="slidedivImg">
                    <img
                        src={brand2}
                        alt="Platform 1"
                        className="img-fluid"
                    />
                </div>
                <div className="slidedivImg">
                    <img
                        src={brand3}
                        alt="Platform 1"
                        className="img-fluid"
                    />
                </div>
                <div className="slidedivImg">
                    <img
                        src={brand4}
                        alt="Platform 1"
                        className="img-fluid"
                    />
                </div>
                <div className="slidedivImg">
                    <img
                        src={brand5}
                        alt="Platform 1"
                        className="img-fluid"
                    />
                </div>
                <div className="slidedivImg">
                    <img
                        src={brand6}
                        alt="Platform 1"
                        className="img-fluid"
                    />
                </div>
                <div className="slidedivImg">
                    <img
                        src={brand7}
                        alt="Platform 1"
                        className="img-fluid"
                    />
                </div>

            </Slider>

        </div>

    )
}

export default Slide
