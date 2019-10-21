import React from 'react';
import { Route, Switch } from 'react-router-dom';
import useQuery from './useQuery';
import QueryLink from './QueryLink';

const App: React.FC = () => {
    const query = useQuery()
    console.log('query', query)
    return (
        <div className="App">
            <Switch>
                <Route path="/">
                    <QueryLink query="d=6r">Add a red six-sided die</QueryLink>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
