import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { getVendorBySellerId } from '../../actions/vendorActions';


class Seller extends React.Component {

    componentDidMount() {
        if(this.props.match.params.seller) {
            this.props.getVendorBySellerId(this.props.match.params.seller);
        }
    }

    render() {

        const { vendor, loading } = this.props.vendor;

        console.log("Cunt", this.props);

        let sellerContant;

        if(vendor === null || loading ) {
            sellerContant = <Spinner />
        } else {
            sellerContant = (
                <div> 
                    <h2>
                        Buy those Bit Coins
                    </h2>
                    <div className="row">
                        <div className="col span-1-of-2 buyer-box">

                            <p>Buy bitcoin from: </p>
                            <ul className="payment-calc">

                                <li>Seller: </li>
                                <li>Item: Bitcoin</li>
                                <li>Amount: <input className="forms__input" type="text"></input></li>
                                <li>Price: <input className="forms__input" type="text"></input></li>
                                <li>Unit: <input className="forms__input" type="text"></input></li>
                                <li>Payment Via: Bank Transfer</li>
                            </ul>
                            {/* <Link></Link> */}
                            {/* <Link className="btn btn-full" to="/" /> */}
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
    
        return (
            <div className="buyer-container">
                {sellerContant}
            </div>
        )
    }
}

Seller.propTypes = {
    getVendorBySellerId: PropTypes.func.isRequired,
    vendor: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    vendor: state.vendor
});

export default connect(mapStateToProps, { getVendorBySellerId })(Seller);
