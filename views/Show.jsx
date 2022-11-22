const React = require("react")

const myStyle = {
    color: '#ffde00',
    backgroundColor: '#3B4CCA',
    textAlign: 'center',
}

class Show extends React.Component {
    render() {
        const {name, img} = this.props
        return (
            <div>
             <h1> Show Page </h1>
            <img src="" alt="" />
            
            </div>
            
        )
    }

}

module.exports = Show;
