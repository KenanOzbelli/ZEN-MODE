import React, {Component} from 'react'
import './index.css'


export default class Home extends Component {

    render() {
        return (<>
            <div>
                <h2 className='titleApp'>Zen Mode</h2>
            </div>
            <div className="dailyQuotes mt-3">
                <div className="card">
                    <h4 className="card-header">Quote of the Day</h4>
                    <div className="card-body">
                        <h5 className="m-3">Fear is the Mind Killer</h5>
                        <p>- Frank Herbert</p>
                        <a href="/quotes" className="btn btn-secondary">Discover more here</a>
                    </div>
                </div>
            </div>
        </>)
    }
}
