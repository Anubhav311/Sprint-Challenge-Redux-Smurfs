import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import { bindActionCreators } from 'redux';
import { deleteSmurf } from '../actions/index';

class SmurflList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs()
    }
    deleteSmurf = (e) => {
        e.preventDefault()
        this.props.deleteSmurf(e.target.id)
        console.log(e.target.id)
    }
    render() {
        console.log(this.props)
        return(
            <div>
                {this.props.smurfs.map((smurf, index) => (
                    <div id={index}>
                        <h1>{smurf.name}</h1>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                        <button id={smurf.id} onClick={this.deleteSmurf}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ deleteSmurf, getSmurfs }, dispatch)
    }
}

const mapStateToProps = (state) => {
    return ({
        smurfs: state.smurfs,
    })
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SmurflList)