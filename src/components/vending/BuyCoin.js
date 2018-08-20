import React from 'react'

class BuyCoin extends React.Component {
    render() {
        return (
            <div className="buyer-container">
                <h2>
                    Buy those Bit Coins
                </h2>
                <div className="row">
                    <div className="col span-1-of-2 buyer-box">

                        <p>Buy bitcoin from:  </p>
                        <ul>

                            <li>Seller:</li>
                            <li>Item: Bitcoin</li>
                            <li>Amount: <input type="text"></input></li>
                            <li>Price: <input type="text"></input></li>
                            <li>Unit: <input type="text"></input></li>
                            <li>Payment Via: Back Transfer</li>
                        </ul>
                        {/* <Link></Link> */}
                        <button className="btn btn-full">Make Transaction</button>
                    </div>
                    <div className="col span-1-of-2 buyer-box">
                        <p>
                        You can buy bitcoins from vladlondon for only 5,225 GBP each. If a seller is online, it means that they are ready to trade. Just to make sure, when you click the button to start this transaction, a text message is sent to the seller to advise them about your request. After this, there is a countdown of 200 seconds before they have to confirm their full attention. All BitBargain sellers are trusted and reliable, so if your request for purchase is accepted, you can make the payment and receive your coins very quickly. These coins are already in escrow with BitBargain, and they are moved to your wallet as soon as the payment is confirmed. If the seller is offline or goes offline by not responding to your request in time, you can check out who else is online, or go to vladlondon's profile page to leave a note. You can also use the profile page to request more bitcoins in case your seller doesn't have enough in escrow. It is of course faster to buy smaller amounts from different sellers. BitBargain was built for OTC buyers and sellers who are interested in quick transactions with reliable people.
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
export default BuyCoin;
