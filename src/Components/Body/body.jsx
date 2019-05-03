import React from 'react';
import './body.css';
import { productList } from '../Data/productList';
import Brands from '../Brand/brands';
import Price from '../Price/price';
import Phones from '../Phone/Phones';
import Pagination from 'react-js-pagination';
import { passingData } from '../../Action/Index1';
import { connect } from 'react-redux';
import ChangeLayout from '../ChangeLayout/change_layout';
import 'bootstrap/dist/css/bootstrap.min.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempArr: [],
      activePage: 1
    }
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      tempArr: this.paginate(nextprops.new_arr, 6, this.state.activePage)
    })
  }

  componentDidMount() {
    this.props.dispatch(passingData(productList))
  }

  handlePageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber,
      tempArr: this.paginate(this.props.new_arr, 6, pageNumber)
    });
  }

  paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, (page_number) * page_size);
  }

  render() {
    return (
      <div className="main-div">
        <div className="left-div">
          <div className="body1">
            <Brands />
          </div>
          <div className="body2">
            <Price />
          </div>
        </div>
        <div className="right-div">
          <div className="body3">
            <ChangeLayout />
          </div>
          <div className="body4">
            {
              this.state.tempArr && this.state.tempArr.length > 0 ?
                this.state.tempArr.map((item, index) => {
                  return (<Phones key={index}
                    item={item} />)
                }) : null
            }
          </div>
          <div className="pagination">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={6}
              totalItemsCount={this.props.count}
              pageRangeDisplayed={4}
              onChange={this.handlePageChange.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    new_arr: state.filter_arr,
    count: state.filter_arr.length,
    resultant_arr: state.result_arr
  }
}

export default connect(mapStateToProps)(Body);