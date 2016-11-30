import React from 'react';

import BookMarkerHeader from './bookMarkerHeaderComponent/BookMarkerHeaderComponent';
import BookMarkerContent from './bookMarkerContentsComponent/BookMarkerContentComponent';

class BookMarkerView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BookMarkerHeader/>
                <BookMarkerContent/>
            </div>
        );
    }
}

export default BookMarkerView;