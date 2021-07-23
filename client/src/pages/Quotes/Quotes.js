import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner'
import QuotesImg from '../../images/Quotes.jpg'

class Quotes extends Component {
    render() {
        return (
            <div>
                <Banner title='Quotes' src={QuotesImg} />
            </div>
        )
    }
}

export default Quotes