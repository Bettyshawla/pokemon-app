const React = require("react")

const myStyle = {
    color: '#FDD4CC',
    backgroundColor: '#191413',
    textAlign: 'center',
    margin: 'auto',
    padding: '30px'
}

const imageStyle = {
    justifyContent: 'center',
    width: '70vw', 
    height:"70vh"
    
}

class Show extends React.Component {
    render() {
        const { name, img } = this.props.pokemon
        
        return (
            <div>

                <body style={{ backgroundColor: "#" }}>


                    <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                    <br />
                    <a style={{ color: '#24479F', fontWeight: '', fontSize: '15px' }} href={`/pokemon/`}>Click here to go back to Pokemon Index Page</a>
                    <br />
                    <h2 style={{ color: '#632F67', textAlign: 'center' }}>{name.toUpperCase()}</h2>
                    <br />
                    <img style={imageStyle} src={img + '.jpg'} />
                    <br />
                    <br />


                </body>
            </div>
        )
    }
}
module.exports = Show;

