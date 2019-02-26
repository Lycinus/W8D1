import { connect } from 'react-redux';
import {Search} from '../components/search'

const mstp = (state) => ({
    benches: state.entities.benches
})

const mdtp = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches())
})

export default connect(mstp, mdtp)(Search)