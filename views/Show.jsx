const React = require("react")

const myStyle = {
    color: '#FDD4CC',
    backgroundColor: '#191413',
    textAlign: 'center'
}

class Show extends React.Component {
    render() {
        const { name, img } = this.props
        const pokemonName = name.toUpperCase()
        return (
            <div>

                <body style={{backgroundColor: "#191413"}}>
                   
                    <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                    <h2 style={{color: '#4D8CEA', textAlign: 'center'}}>{pokemonName}</h2>
                    <img style={{width: '60vw', height:"70vh"}} src={img + '.jpg'} />
                    <br />
                    <br />
                    <a style={{color: '#99C4ED', fontWeight: '', fontSize: '25px'}}href ={`/pokemon/`}>Back</a>

                </body>
            </div>
        )
    }
}
module.exports = Show;

