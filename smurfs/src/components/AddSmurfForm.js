import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';
import { bindActionCreators } from 'redux'

class AddSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
        id: ''
    }

    addSmurf = (e) => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: '',
            id: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(this.state[e.target.name])
    }

    render() {
        console.log(this.props)
        return(
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="height"
                    placeholder="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="id"
                    placeholder="id"
                    value={this.state.id}
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