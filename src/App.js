 // src/App.js

    import React, { Component } from 'react';
    import Bank from './components/bank'
   
    class App extends Component {

      render() {
        return (
            <Bank bank={this.state.bank} />
        )
    }

    state = {
        bank: ""
    };


componentDidMount() {
        // var api = "http://jsonplaceholder.typicode.com/users"
        var api = "/banks/airtable/random"
        fetch(api)
            .then(res => res.json())
            .then((data) => {
                this.setState({ bank: data })

            })
            .catch(console.log)
    }

  }
export default App