import React, {Component} from 'react'
import './Home.css'


export default class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2 className='titleApp'>Inner Zen</h2>
                </div>
                <div className="dailyQuotes mt-3">
                    <div className="card QOD-Card">
                        <h4 className="card-header">Quote of the Day</h4>
                        <div className="card-body ">
                            <h5 className="m-3">Fear is the Mind Killer</h5>
                            <p>- Frank Herbert</p>
                            <a href="/quotes" className="btn btn-secondary">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
