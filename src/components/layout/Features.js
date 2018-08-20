import React from 'react';
import Ionicon from 'react-ionicons';

const Features = () => {
    return (
        <div>
        <section className="section-features js--section-features" id="features">
            <div className="row">
                <h2>Get Coins Fast &mdash; with complete safety</h2>
                <p className="long-copy">
                    Hello, we’re Bitcoin Merchant, your new Bitcoin service. We know you’re always busy. So let us take care of that and take away all the fuss, purchase your bitcoins online with us you will not regret it, we promise!
                </p>
            </div>
            
            <div className="row js--wp-1">
                <div className="col span-1-of-4 box">
                    <Ionicon fontSize="50%" icon="ios-infinite-outline" color="#fff"></Ionicon>
                    <h3>Up to 365 days/year</h3>
                    <p>
                        Never work again! We really mean that. Once you get into Bitcoin trading you will find our ease of use service so incredible you can get on with your life.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <Ionicon fontSize="50%" icon="ios-stopwatch-outline" color="#B15B60"></Ionicon>
                    <h3>Trade within 20 minutes</h3>
                    <p>
                        You're only twenty minutes away from your first adventure with the worlds premium cryptocurrency. We work with the best traders in the world to ensure that you're 100% happy.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <Ionicon fontSize="50%" icon="ios-cloud-upload" color="blue"></Ionicon>
                    <h3>All Transactions are 100% Safe</h3>
                    <p>
                        All your transactions are completely secure! Everything is held in the cloud to give you full peace of mind over security. All our traders folow tight rules in order to guarantee a high level of satisfaction.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <Ionicon fontSize="50%" icon="ios-cart-outline" color="orange"></Ionicon>
                    <h3>Order Any Amount of Bitcoin</h3>
                    <p>
                        We don't limit your trading, you can go up to the maximum that your traders allow. It's up to you!
                    </p>
                </div>
            </div>
        </section>    
        </div>
    )
}
export default Features;
