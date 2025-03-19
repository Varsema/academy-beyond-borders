import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Slider.module.scss'
import SubmitLink from '../../../components/UI/SubmitLink';

function Slider() {
    const data = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/3262/7114/ddf321457f0170b49f5dcbd6a1f9af2b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGCpoddVPqyw-FV3v4bcfgT6IS0kFXD6GLaNTS3DK0WfVVyMDa0KGnBBpM35cle8gthy3A-GwGFtw~S4nBTUUfthC5UGU8c8O8HimXA10e3N33PVpSEsPYcBiNqnEbZo9KEIKFJa6r-6Ud0SbKE8Jp8hDmK1DBMKflDP~lBbIkuCLONFUOozSaoDN0Q5uM6lCrEzUO0-qisVjI3IIsYIOmbcI4o-8gXmq5eOAXDzjaFPWKrDKuxhsMOdmJOM9hVbQXv13ijai3DIJmyFbmNRV5St5Mq-zy2RRp0IFHzY8rDLsPR6YcfL~w-wuY59GGkfoPuL9H7BxH93rHibf~uhjA__',
            title: 'Test'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/3262/7114/ddf321457f0170b49f5dcbd6a1f9af2b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGCpoddVPqyw-FV3v4bcfgT6IS0kFXD6GLaNTS3DK0WfVVyMDa0KGnBBpM35cle8gthy3A-GwGFtw~S4nBTUUfthC5UGU8c8O8HimXA10e3N33PVpSEsPYcBiNqnEbZo9KEIKFJa6r-6Ud0SbKE8Jp8hDmK1DBMKflDP~lBbIkuCLONFUOozSaoDN0Q5uM6lCrEzUO0-qisVjI3IIsYIOmbcI4o-8gXmq5eOAXDzjaFPWKrDKuxhsMOdmJOM9hVbQXv13ijai3DIJmyFbmNRV5St5Mq-zy2RRp0IFHzY8rDLsPR6YcfL~w-wuY59GGkfoPuL9H7BxH93rHibf~uhjA__',
            title: 'Test 2'
        }
    ]
    return (
        <Swiper
            className={styles.slider}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {data?.map((item)=>{
                    return (
                        <SwiperSlide key={item.title}>
                            <div className={`${styles['slider__item']}`}>
                                <img src={item.img} alt={item.title} className={`${styles['slider__item--cover']}`}/>
                                <div className="d-flex justify-content-center">
                                    <SubmitLink  className={styles.link}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
        </Swiper>
    )
}

export default Slider;
