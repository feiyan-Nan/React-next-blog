import React from 'react'
import 'swiper/css/swiper.css'
import '../static/style/components/indexSwiper.css'
import Swiper from 'swiper'

class indexSwiper extends React.Component {
    public swiper: any
    constructor(props) {
        super(props)
        console.log(props)
    }
    componentDidMount() {
        if (this.swiper) {
            this.swiper.slideTo(0, 0)
            this.swiper.destroy()
            this.swiper = null;
        }
        console.log(this.refs.lun)
        this.swiper = new Swiper(this.refs.lun, {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false, // 用户操作之后,还可以继续操作
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        console.log(this.swiper)
    }
    render() {
        return (
            <div className='swiper-wrap'>
                <div className="swiper-container" ref="lun">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" data-id="0">
                            <img src="https://tva1.sinaimg.cn/large/006y8mN6gy1g8agcphbqnj31hb0u0hdu.jpg" alt="" />
                        </div>
                        <div className="swiper-slide" data-id="1">
                            <img src='https://tva1.sinaimg.cn/large/006y8mN6gy1g8agztomq9j31hb0u07wi.jpg'></img>
                        </div>
                        {/* <div className="swiper-slide" data-id="2">
                            <img src='https://oss.guangmangapp.com/331999d2-af72-4bf1-9a58-10a8a95f4866.jpg'></img>
                        </div> */}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}

export default indexSwiper