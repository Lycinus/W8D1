import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from '../components/session_form'

const mstp = state => ({
    errors: state.errors,
    formType: 'Log In'
})

const mdtp = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(mstp, mdtp)(SessionForm)