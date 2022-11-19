const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

const React = require("React")

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
            return(
                <div>
                    <h1 style={myStyle}>See All The Pokemon!</h1>

                </div>
            )
    }
}



module.exports = Index