import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = {lat: null, errMsg: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat: position.coords.latitude }),
            err => this.setState({errMsg: err.message})
        )
    }

    render() {
        if(this.state.errMsg && !this.state.lat) {
            return <div>Error: {this.state.errMsg}</div>
        }

        if(!this.state.errMSG && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

export default App
