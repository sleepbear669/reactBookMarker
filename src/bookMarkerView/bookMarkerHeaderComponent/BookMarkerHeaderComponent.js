import React from 'react';
import Panel from 'muicss/lib/react/panel';

class BookMarkerHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const titleStyle = {margin : 0};
        return (
            <header>
                <Panel>
                    <h1 style={titleStyle}>
                        BookMarker List
                    </h1>
                </Panel>
            </header>
        );
    }
}

export default BookMarkerHeader;