import React from 'react';

class BitcoinCourse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items:[]
        }
    }
    componentDidMount() {
        fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR")
            .then(res => res.json())
            .then(
                (result) =>{
                    this.setState({
                        isLoaded: true,
                        items: result.BTC
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error){
            return <p>Error {error.massage}</p>
        }
        else if (!isLoaded){
            return <p>Loading...</p>
        }
        else {
            return <h1>One bitcoin =  {items.USD} USD</h1>
        }

    }
}

export default BitcoinCourse;
