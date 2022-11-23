const myStyle = {
    color: '#FDD4CC',
    textAlign: 'center',
    backgroundColor: '#000000',
};


const React = require("react")

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <body style={{ backgroundColor: '#AC888D' }}>
                    <h1 style={myStyle}>Seet All The Pokemon!</h1>
                    <br />
                    <a style={{ color: '#24479F', fontSize: '20px' }} href={`/pokemon/new`}>Create New Pokemon</a>

                    <ul style={{ color: '#000000', fontWeight: 'bold', fontSize: '20px' }}>
                        {
                            pokemon.map((character, i) => {

                                return (
                                    <li key={i}>
                                        The{' '}
                                        <a href={`/pokemon/${character._id}`}>{character.name[0].toUpperCase() + character.name.slice(1)}</a>

                                        {/* charAt(0).toUpperCase() = allow us to capitalize the first letter of the word */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </body>
            </div>
        )
    }
}

module.exports = Index