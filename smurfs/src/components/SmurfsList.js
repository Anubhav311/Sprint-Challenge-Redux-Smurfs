import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';


class SmurflList extends React.Component {

    render() {
        console.log(this.props.fun)
        return(
            <div>
                {this.props.smurfs.map((smurf, index) => (
                    <div id={index}>
                        <h1>{smurf.name}</h1>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getSmurfs }, dispatch)
//   }
  
// export connect(
//     null, mapDispatchToProps
//   )(SmurflList)

const mapStateToProps = (state) => {
    return ({
        smurfs: state.smurfs,
        fun: state.fun
    })
}

export default connect(
    mapStateToProps, getSmurfs
)(SmurflList)