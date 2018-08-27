import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { getVendorBySellerId } from '../../actions/vendorActions';


class Seller extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            numberCoins: 1,
            totalCost: 1
        }
    }

    numberCoins = React.createRef();
    unitPrice = React.createRef();
    totalCost = React.createRef();
    
    componentDidMount() {
        if(this.props.match.params.seller) {
            this.props.getVendorBySellerId(this.props.match.params.seller);
        }
    }

    handleCoinChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("Passed In", this.unitPrice.current.value )
        const calcValue = this.unitPrice.current.value * value
        this.setState({ 
            [name]: value,
            totalCost: calcValue
        })
    }

    render() {

        const { vendor, loading } = this.props.vendor;

        
        let sellerContent;
        
        if( vendor === null || vendor === undefined || loading ) {
            sellerContent = <Spinner />
        } else {
            // console.log("Render", this.state, this.props);
            sellerContent = (
                <div> 
                    <h2>
                        Buy those Bit Coins
                    </h2>
                    <div className="row">
                        <div className="col span-1-of-2 buyer-box">
                            <p>Buy bitcoin from: {vendor.seller}</p>
                            <ul className="payment-calc">
                                <li>Item: Bitcoin</li>
                                <li>Number of coins: 
                                    <input className="forms__input" 
                                            name="numberCoins"
                                            ref={this.numberCoins}
                                            type="number" 
                                            onChange={this.handleCoinChange}
                                            value={this.state.numberCoins}
                                    ></input>
                                </li>
                                <li>Unit Price: 
                                    <input className="forms__input" 
                                            name="unitPrice"
                                            ref={this.unitPrice}
                                            type="number" 
                                            min="0.00" 
                                            defaultValue={vendor.price} 
                                    >
                                    </input>
                                </li>
                                <li>Total Cost: 
                                    <input className="forms__input" 
                                            name="totalCost"
                                            ref={this.totalCost}
                                            type="number" 
                                            value={this.state.totalCost}
                                            onChange={this.handleCoinChange}
                                    >
                                    </input></li>
                                <li>{vendor.paymentmethod}</li>
                            </ul>
                            {/* <Link></Link> */}
                            {/* <Link className="btn btn-full" to="/" /> */}
                        </div>
                        <div className="col span-1-of-2 buyer-box">
                            <p>
                            You can buy bitcoins from {vendor.seller} for only {vendor.price} GBP each. If a seller is online, it means that they are ready to trade. Just to make sure, when you click the button to start this transaction, a text message is sent to the seller to advise them about your request. After this, there is a countdown of 200 seconds before they have to confirm their full attention. All BitBargain sellers are trusted and reliable, so if your request for purchase is accepted, you can make the payment and receive your coins very quickly. These coins are already in escrow with BitBargain, and they are moved to your wallet as soon as the payment is confirmed. If the seller is offline or goes offline by not responding to your request in time, you can check out who else is online, or go to vladlondon's profile page to leave a note. You can also use the profile page to request more bitcoins in case your seller doesn't have enough in escrow. It is of course faster to buy smaller amounts from different sellers. BitBargain was built for OTC buyers and sellers who are interested in quick transactions with reliable people.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    
        return (
            <div className="buyer-container">
                {sellerContent}
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