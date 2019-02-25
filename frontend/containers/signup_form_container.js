import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from '../components/session_form'

const mstp = state => ({
    errors: state.errors,
    formType: 'Sign Up'
})

const mdtp = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SessionForm)