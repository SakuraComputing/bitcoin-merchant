import React, { Component } from 'react'
import CurrencyInput from 'react-currency-input';
import { Link } from 'react-router-dom';

class Vendor extends Component {
  render() {

    const { vendor } = this.props;
    return (
        <div className="vendor-container">
            <div className="vendor-col">
                {vendor.seller}
            </div>
            <div className="vendor-col-2">
                {vendor.paymentmethod}
            </div>
            <div className="vendor-col">
                <CurrencyInput 
                    type="currency" 
                    value={vendor.price} 
                    prefix={'£'} 
                    className="forms__input currency__input"
                    disabled={true}
                />
            </div>
            <div className="vendor-col">
                <CurrencyInput 
                    type="currency" 
                    value={vendor.lowerlimit} 
                    prefix={'£'} 
                    className="forms__input currency__input"
                    disabled={true}
                />
                 -
                <CurrencyInput 
                    type="currency" 
                    value={vendor.upperlimit} 
                    prefix={'£'} 
                    className="forms__input currency__input"
                    disabled={true}
                />    
            </div>
            <div className="vendor-col">
                {vendor.currency}
            </div>

            
            <Link to={`/seller/${vendor.seller}`} className="vendor-button">Buy</Link>
            
      </div>
    )
  }
}
export default Vendor;
