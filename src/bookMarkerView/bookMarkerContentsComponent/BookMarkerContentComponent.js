import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import Input from 'muicss/lib/react/input';

const ENTER_KEY_CODE = 13;

import BookMarkerList from './../bookMarkerListComponet/BookMarkerListComponet';
import FireBaseStore from './../../common/FireBaseStore';

class BookMarkerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookMarkerList: []
        };
        this.fireBaseStore = new FireBaseStore();
        this.fireBaseStore.on('book-marker/', 'value', this.updatedStore)

    }

    updatedStore = (items) => {
        let bookMarkerList = [];
        for (let id in items) {
            bookMarkerList.push(items[id]);
        }
        this.setState({
            bookMarkerList: bookMarkerList
        });
    };
    addItem = bookMarker => {
        this.fireBaseStore.addItem(bookMarker);
    };

    checkEnterKeyPress = (e) => {
        e.stopPropagation();
        if (e.charCode === ENTER_KEY_CODE) {
            this.addItem(e.target.value);
            e.target.value = '';
        }
    };

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col xs="12" md="8" md-offset="2">
                        <Input
                            hint="Write Your BookMarker"
                            onKeyPress={this.checkEnterKeyPress}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="8" md-offset="2">
                        <BookMarkerList
                            bookMarkerList={this.state.bookMarkerList}
                        />
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default BookMarkerContent;
