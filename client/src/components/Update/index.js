import React, { useEffect, useRef } from 'react';
import { Button, Card, Form, Row } from 'react-bootstrap';
import { SignleProduct, Update } from '../../APIServices/CRUDApi';
import FullScreenLoader from '../Common/fullScreenLoader';
import { errorMessage, successMessage } from '../Common/validator';
import { withRouter } from 'react-router';

const UpdateProduct = (props) => {
    let {
        productName,
        productCode,
        image,
        quantity,
        price,
        totalPrice,
        Loader,
        card,
    } = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        Loader.classList.remove('d-none');
        card.classList.add('d-none');
        let product_Name = productName.value;
        let product_Code = productCode.value;
        let product_img = image.value;
        let unit_Price = price.value;
        let product_qty = quantity.value;
        let total_Price = totalPrice.value;

        Update(
            props.match.params.id,
            product_Name,
            product_Code,
            product_img,
            unit_Price,
            product_qty,
            total_Price
        ).then((result) => {
            Loader.classList.add('d-none');
            card.classList.remove('d-none');
            if (result) {
                successMessage('Product Update Success');
                props.history.push('/');
            } else {
                errorMessage('Request fail please try again');
            }
        });
    };

    function handleChange() {
        let price1 = price.value;
        let qty = quantity.value;

        if (price && qty) {
            totalPrice.value = price1 * qty;
        }
    }

    useEffect(() => {
        SignleProduct(props.match.params.id).then((Result) => {
            productName.value = Result[0]['productName'];
            productCode.value = Result[0]['productCode'];
            image.value = Result[0]['img'];
            price.value = Result[0]['unitPrice'];
            quantity.value = Result[0]['qty'];
            totalPrice.value = Result[0]['totalPrice'];
        });
    });

    return (
        <div>
            <div className="d-none" ref={(div) => (Loader = div)}>
                <center>
                    <FullScreenLoader />
                </center>
            </div>

            <Card className="p-3 mt-3" ref={(div) => (card = div)}>
                <Form>
                    <Row>
                        <div className="col-md-6">
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Product Name</Form.Label>
                                <div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Product Name"
                                        ref={(input) => (productName = input)}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </div>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="productCode"
                            >
                                <Form.Label>Product Code</Form.Label>
                                <div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Product Code"
                                        ref={(input) => (productCode = input)}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Image">
                                <Form.Label>Image</Form.Label>
                                <div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Image"
                                        ref={(input) => (image = input)}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </div>
                            </Form.Group>
                        </div>

                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Price</Form.Label>
                                <div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Price"
                                        ref={(input) => (price = input)}
                                        onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="qty">
                                <Form.Label>Product Quantity</Form.Label>
                                <div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Product Quantity"
                                        ref={(input) => (quantity = input)}
                                        onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="totalPrice">
                                <Form.Label>Total Price</Form.Label>
                                <div>
                                    <Form.Control
                                        readOnly
                                        type="text"
                                        placeholder="Total Price"
                                        ref={(input) => (totalPrice = input)}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </div>
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="float-end"
                                onClick={handleSubmit}
                            >
                                Update
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Card>
        </div>
    );
};

export default withRouter(UpdateProduct);
