import { connect } from 'react-redux';
import BenchIndex from '../components/bench_index'

const mstp = (state) => ({
    benches: state.entities.benches
})

const mdtp = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches())
})

export default connect(mstp, mdtp)(BenchIndex)