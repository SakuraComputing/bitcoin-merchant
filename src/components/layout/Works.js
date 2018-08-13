import React from 'react'
import bitcoinImage from '../../styles/img/bitcoin.jpg';
import appleStore from '../../styles/img/download-app.svg';
import googlePlay from '../../styles/img/download-app-android.png';

function Works() {
    return (
        <div>
            <section className="section-steps" id="works">
                <div className="row">
                    <h2>How it works &mdash; Simple as 1, 2, 3</h2>
                </div>
                <div className="row">
                    <div className="col span-1-of-2 steps-box">
                        <img src={bitcoinImage} alt="Bitcoin Merchant app on iPhone" className="app-screen js--wp-2"/>
                    </div>
                    <div className="col span-1-of-2 steps-box">
                        <div className="works-step">
                            <div>1</div>
                            <p>Register your details with ths site.</p>   
                        </div> 
                        <div className="works-step">
                            <div>2</div>
                            <p>Enter your bank account details so we can verify who you are.</p>   
                        </div>
                        <div className="works-step">
                            <div>3</div>
                            <p>Begin trading right away!</p>   
                        </div>
                        
                        <a href="#" className="btn-app"><img src={appleStore} alt="App Store Button"/></a>
                        <a href="#" className="btn-app"><img src={googlePlay} alt="Play Store Button"/></a>
                    </div>
                </div>
            </section>            
        </div>
    )
}

export default Works;
