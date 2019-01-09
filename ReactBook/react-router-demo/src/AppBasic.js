import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2>Navigation</h2>
                    <Link to="/">Home</Link><br />
                    <Link to="/airport">Airport</Link><br />
                    <Link to="/city">City</Link><br />
                    <Link to="/course">Courses</Link><br />
                </div>
                <div>
                    <h2>Content</h2>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/airport" component={Airport} />
                        <Route path="/city" component={City} />
                        <Route path="/course" component={Course} />
                        <Route render={() => <div>Page does not exist</div>} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const Course = ({ match }) => (
    <div>
        <ul>
            <li><Link to={`${match.url}/technology`}>Technology</Link></li>
            <li><Link to={`${match.url}/business`}>Business</Link></li>
            <li><Link to={`${match.url}/economics`}>Economics</Link></li>
        </ul>


        <Route path={`${match.url}/:course`} render={({ match }) => (<div>This is the course list for {match.params.course}</div>)} />
    </div>
);

function Airport(props) {
    console.log(props.match);
    return (
        <div>
            <h2>Airports</h2>
            <ul>
                <li>Airport 1</li>
                <li>Airport 2</li>
                <li>Airport 3</li>
            </ul>
        </div>
    )
}

function City(props) {
    return (
        <div>
            <h2>Cities</h2>
            <ul>
                <li>City 1</li>
                <li>City 2</li>
                <li>City 3</li>
            </ul>
        </div>
    )
}

function Home(props) {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

export default App;