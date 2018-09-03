import React, { Component } from 'react'
import CurrencyInput from 'react-currency-input';
import { Link } from 'react-router-dom';

class Vendor extends Component {
  render() {

    const { vendor } = this.props;
    return (
        <div className="vendor-container">
            <div className="vendor-col vendor__col_seller">
                {vendor.seller}
            </div>
            <div className="vendor-col vendor__col_paymenttype">
                {vendor.paymentmethod}
            </div>
            <div className="vendor-col vendor__col_pricepercoin">
                <CurrencyInput 
                    type="currency" 
                    value={vendor.price} 
                    prefix={'£'} 
                    className="forms__input currency__input"
                    disabled={true}
                />
            </div>
            <div className="vendor-col vendor__col_limit">
                <CurrencyInput 
                    type="currency" 
                    value={vendor.lowerlimit} 
                    prefix={'£'} 
                    className="forms__input currency__input"
                    disabled={true}
                />
            </div>    
            <div className="vendor-col vendor__col_limit">
                <CurrencyInput 
                    type="currency" 
                    value={vendor.upperlimit} 
                    prefix={'£'} 
                    className="forms__input currency__input"
                    disabled={true}
                />    
            </div>
            <div className="vendor-col vendor__col_currency">
                {vendor.currency}
            </div>

            
            <Link to={`/seller/${vendor.seller}`} className="vendor-button">Buy</Link>
            
      </div>
    )
  }
}
export default Vendor;
