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
                        <a href="/pokemon">Home Page</a>
                    </nav>
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
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