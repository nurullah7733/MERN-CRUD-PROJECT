import React from 'react';
import { Row } from 'react-bootstrap';
import UpdateProduct from '../components/Update';

function updatePage(props) {
    return (
        <Row>
            <div className="col-md-8">
                <UpdateProduct />
            </div>
        </Row>
    );
}

export default updatePage;
