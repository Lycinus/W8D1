import React from 'react'
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBenches()
    }

    render() {
        const benchesArr = Object.values(this.props.benches)
        const benchesList = benchesArr.map(bench => <BenchIndexItem bench={bench} key={bench.id}/>)
        return(
            <div>
                <ul>
                    {benchesList}
                </ul>
            </div>
        )
    }
}

export default BenchIndex