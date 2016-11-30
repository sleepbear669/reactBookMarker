import React from 'react';
import ReactDOM from 'react-dom';
import BookMarkerView from './bookMarkerView/BookMarkerView';


const App = () => (
    <BookMarkerView/>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);