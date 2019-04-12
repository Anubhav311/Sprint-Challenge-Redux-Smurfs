import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

class SmurflList extends React.Component {

    render() {
        console.log(this.props.smurfs)
        return(
            <div>
                {this.props.smurfs.map(smurf => (
                    <div>
                        <h1>{smurf.name}</h1>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {smurfs: state.smurfs}
}

export default connect(
    mapStateToProps, getSmurfs
)(SmurflList)