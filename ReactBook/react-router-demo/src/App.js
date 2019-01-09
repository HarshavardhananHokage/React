import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

const routes = [
    {
        path: '/',
        exact: true,
        leftbar: () => <div>Home</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: '/about',
        leftbar: () => <div>About</div>,
        main: () => <h2>About</h2>
    },
    {
        path: '/contact',
        leftbar: () => <div>Contact</div>,
        main: () => <h2>Contact</h2>
    }
]

class App extends React.Component {
    render() {
        return (
            <Router>
                <div style={{ display: 'flex' }}>
                    <div style={{
                        padding: '10px',
                        width: '20%',
                        background: '#FF6347'
                    }}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        {/* {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.leftbar}
                            />
                        ))} */}
                    </div>

                    <div style={{ flex: 1, padding: '20px' }}>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        )
    }
}

export default App