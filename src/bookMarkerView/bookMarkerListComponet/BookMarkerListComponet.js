import React from 'react';

class BookMarkerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookMarkerList : props.bookMarkerList
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            bookMarkerList : nextProps.bookMarkerList
        })

    }
    render() {
        return (
            <div>
                <table className="bookMarker-table mui-table mui-table--bordered">
                    <tbody className="bookMarker-item-box">
                    {
                        this.state.bookMarkerList.map(bookMarkerItem =>
                            <tr key={bookMarkerItem.id}>
                                <td>
                                    {bookMarkerItem.phrase}
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookMarkerList;