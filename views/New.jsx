const React = require("react")

const myStyle = {
    color: '#FDD4CC',
    backgroundColor: '#191413',
    textAlign: 'center'
}

class New extends React.Component {
    render() {
        return (
            <div>
                <body style={{ backgroundColor: '#AC888D' }}>
                    <h1 style={myStyle}>New Pokemon Page</h1>
                    <nav>
                        <a style={{color: '#24479F', fontSize: '20px'}}href="/pokemon">Home Page</a>
                    </nav>
                    <form action="/pokemon" method="POST">
                        Name: <input type="text" name="name" /><br />
                        Image: <input type="text" name="img" /><br />
                        <input type="submit" value="Create Pokemon" />
                    </form>
                </body>
            </div>
        )
    }
}

module.exports = New