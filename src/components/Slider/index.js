import Slider from "react-slick";
import css from './slider.module.css';

const SliderContainer = ({data}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <Slider {...settings}>
            {
                data.map((item) => {
                    return (
                        <div className={css.sliderContainer} key={item.id}>
                            <div>
                                <img src={item.img} alt=""/>
                            </div>
                            <h4>{item.title}</h4>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default SliderContainer;