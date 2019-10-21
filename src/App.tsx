import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Die from './Die';
import QueryLink from './QueryLink';
import useQuery from './useQuery';

const App: React.FC = () => {
    const query = useQuery()
    return (
        <div className="App">
            <Switch>
                <Route path="/">
                    {query.d && query.d.map((die, i) => <Die key={`${die}-${i}`} sides={Number(die[0])} style={die[1]} />)}
                    <QueryLink query="d=6r">Add a red six-sided die</QueryLink>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
