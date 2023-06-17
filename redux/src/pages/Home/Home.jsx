import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WishlistBtn from '../../components/WishlistBtn'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }, [])
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="col-lg-3 p-2">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <WishlistBtn item={item} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home