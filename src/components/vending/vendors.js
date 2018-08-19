import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner';
import { getVendors } from '../../actions/vendorActions';
import Vendor from './Vendor';

class Vendors extends PureComponent {

  componentDidMount() {
    this.props.getVendors();
  }

  render() {

    const { vendors, loading } = this.props.vendor;

    let vendor;
    
    if (vendors === null || loading ) {
      vendor = <Spinner />
    } else {
      if(vendors.length > 0) {
        vendor = vendors.map(vendor => (
          <Vendor key={vendor._id} vendor={vendor}/>
        ))
      } else {
        vendor = <h3>"No vendors found"</h3>
      }
    }

    return (
      <div className="vendors">
        <h2>Purchase your coins from one of the vendors below</h2>

        <div className="vendors">
          <div className="vendor-container">
                  <div className="vendor-col">Seller</div>
                  <div className="vendor-col-2">Payment Type</div>
                  <div className="vendor-col">Price</div>
                  <div className="vendor-col">Lower and Upper limits</div>
                  <div className="vendor-col">Currency</div>
          </div>
              {vendor}
        </div>
        {vendor}
      </div>
    )
  }
}

Vendors.propTypes = {
  getVendors: PropTypes.func.isRequired,
  vendor: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  vendor: state.vendor
})
export default connect(mapStateToProps, { getVendors })(Vendors);
