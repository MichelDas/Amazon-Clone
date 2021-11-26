import React from 'react'
import Header from './Header'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <Header/>
            
            <img className="home__image"
                src="https://m.media-amazon.com/images/I/71dKfsHN4xL._SX3000_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product 
                    id="12345432"
                    title="The Lean Startup: How to start"
                    price={1}
                    rating={5}
                    image="https://images-fe.ssl-images-amazon.com/images/G/09/2020/kindle/CLC/onboard/gateway_card_758x608_20200722._SY608_CB408627117_.jpg"
                />

                <Product 
                    id="12345432"
                    title="The Lean Startup: How to start"
                    price={1}
                    rating={5}
                    image="https://images-fe.ssl-images-amazon.com/images/G/09/2021/x-site/black_friday/gw/dt/LU_06_gw_dt_single_category_card_758X608._SY608_CB654066982_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="12345432"
                    title="The Lean Startup: How to start"
                    price={1}
                    rating={5}
                    image="https://images-fe.ssl-images-amazon.com/images/G/09/kindle/merch/2021/XPL/0118273_11/Echo/VX1736_BFW21_OM_AuCC_add01_372x232._SY232_CB653239175_.jpg"
                />

                <Product 
                    id="12345432"
                    title="The Lean Startup: How to start"
                    price={1}
                    rating={5}
                    image="https://images-fe.ssl-images-amazon.com/images/G/09/kindle/merch/2021/XPL/0118273_11/kindle/VX1739_BFW21_OM_Ereader_53_758x608._SY608_CB652867328_.jpg"
                />
                <Product 
                    id="12345432"
                    title="The Lean Startup: How to start"
                    price={1}
                    rating={5}
                    image="https://images-fe.ssl-images-amazon.com/images/G/09/2021/x-site/black_friday/event_placement/25_do_gw_dt_single_category_card_758X608._SY608_CB652542780_.jpg"
                />
            </div>


            
        </div>
    )
}

export default Home
