import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';
import { bindActionCreators } from 'redux'

class AddSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    addSmurf = (e) => {
        e.preventDefault()
        this.props.addSmurf(this.state)
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(this.state[e.target.name])
    }

    render() {
        console.log(this.props.addSmurf)
        return(
            <form>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <button onClick={this.addSmurf}>Add Smurf</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ addSmurf }, dispatch)
    }
  }

const mapStateToProps = (state) => {
    return ({fun: state.fun})
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(AddSmurfForm)