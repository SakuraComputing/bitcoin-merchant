import React, { Component } from 'react'
import ReactNumberFormat from 'react-number-format';
import NumberFormat from 'react-number-format';
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
                <NumberFormat value={vendor.price} prefix={'£'} thousandSeparator={true} />
            </div>
            <div className="vendor-col">
                <NumberFormat value={vendor.lowerlimit} prefix={'£'} thousandSeparator={true}/>
                 -
                <NumberFormat value={vendor.upperlimit} prefix={'£'} thousandSeparator={true}/>    
            </div>
            <div className="vendor-col">
                {vendor.currency}
            </div>

            <Link to={`/vendor/${vendor.seller}`} className="vendor-button">Buy</Link>
            
      </div>
    )
  }
}
export default Vendor;
