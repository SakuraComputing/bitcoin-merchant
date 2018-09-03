import React from 'react'

const Reviews = () => {
    return (
        <div>
            <section className="section-testimonials" id="reviews">
                <div className="row">
                    <h2>Our customers can't live without us</h2>                
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <blockquote>
                            I started trading with Bitcoin Merchant and found very easy to use, very safe and very reliable I would recommend this site to anyone embarking on the Bitcoin trail.
                            <cite><img src="/src/styles/img/customer-1.jpg" alt="Cusomer 1 photo"/>Tim Duncan</cite>
                        </blockquote>
                    </div>
                    <div className="col span-1-of-3">
                        <blockquote>
                            At first I was apprehensive using this site but as my trust grew the more and more I traded. After 9 months I have now made over a million pounds. Thank you Bitcoin Merchant.
                            <cite><img src="/src/styles/img/customer-2.jpg" alt="Customer 2 photo"/>Holly Holme</cite>
                        </blockquote>
                    </div>
                    <div className="col span-1-of-3">
                        <blockquote>
                            I originally used a stockbroker to purchase Bitcoin who badly advised me and I lost a lot of money through whacking great charges. Here the judgement and control is your own so when you buy or sell Bitcoin you completely cut out the middleman. What they actually did was beyond me really.
                            <cite><img src="/src/styles/img/customer-3.jpg" alt="Customer 3 photo"/>Clinton Stich</cite>
                        </blockquote>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Reviews;
