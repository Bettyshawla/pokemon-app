const myStyle = {
    color: '#CBBDE7',
    textAlign: 'center',
    backgroundColor: '#000000'
};

const React = require("react")

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <body style={{ backgroundColor: '#AC888D' }}>
                    <h1 style={myStyle}>See All The Pokemon!</h1>
                    <ul style={{ color: '#000000', fontWeight: 'bold', fontSize: '20px' }}>
                        {
                            pokemon.map((character, i) => {
                                // let characterName = character.names
                                return (
                                    <li key={i}>
                                        The{' '}
                                        <a href={`/pokemon/${character._id}`}>{character.name[0].toUpperCase() + character.name.slice(1)}</a>
                                        {/* <a style={{ color: '#0519A4' }} href={`/pokemon/${i}`}> */}
                                            {/* charAt(0).toUpperCase() = allow us to capitalize the first letter of the word */}
                                            {/* {
                                                characterName.charAt(0).toUpperCase() + characterName.slice(1).toLowerCase()
                                            } */}

                                        
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