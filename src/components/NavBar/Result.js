import React, {Component} from 'react';
import RequestButton from './RequestButton'

class Result extends Component {
	render() {
      console.log(this.props)
   return(
      <div>
      <RequestButton key={this.props.user.id} />
    </div>)
	}
}
export default Result;
