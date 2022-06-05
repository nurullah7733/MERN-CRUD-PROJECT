import React, { Fragment, useRef, useState } from 'react';
import { Row, Button, Card, Form } from 'react-bootstrap';
import { isEmpty, successMessage, errorMessage } from '../Common/validator';
import { Create } from '../../APIServices/CRUDApi';
import FullScreenLoader from '../Common/fullScreenLoader';
import { withRouter } from 'react-router';

const CreateProduct = (props) => {
    const [loading, setLoading] = useState(false);

    let productName,
        productCode,
        image,
        quantity,
        price,
        totalPrice = useRef();

    let handleSubmit = (e) => {
        e.preventDefault();

        const product_Name = productName.value;
        const product_Code = productCode.value;
        const product_Image = image.value;
        const product_Quantity = quantity.value;
        const product_Price = price.value;
        const total_Price = totalPrice.value;

        if (isEmpty(product_Name)) {
            errorMessage('Please Provide Product Name');
        } else if (isEmpty(product_Code)) {
            errorMessage('Please Provide Product Code');
        } else if (isEmpty(product_Image)) {
            errorMessage('Please Provide Product Image');
        } else if (isEmpty(product_Quantity)) {
            errorMessage('Please Provide Quantity');
        } else if (isEmpty(product_Price)) {
            errorMessage('Please Provide Price');
        } else {
            setLoading(true);
            Create(
                product_Name,
                product_Code,
                product_Image,
                product_Price,
                product_Quantity,
                total_Price
            ).then((result) => {
                if (result === true) {
                    setLoading(false);
                    successMessage('Product Added Successfull');
                    props.history.push('/');
                } else {
                    setLoading(false);
                    errorMessage('Request Faild Please try Again');
                }
            });
        }
    };

    const handleChange = () => {
        let price1 = parseFloat(price.value);
        let qty = parseFloat(quantity.value);

        if (price1 && qty) {
            totalPrice.value = price1 * qty;
        }
    };

    return (
        <Fragment>
            {loading ? (
                <div>
                    <center>
                        <FullScreenLoader />
                    </center>
                </div>
            ) : (
                <Card className="p-3 mt-3">
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
                                            ref={(input) =>
                                                (productName = input)
                                            }
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
                                            ref={(input) =>
                                                (productCode = input)
                                            }
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

                                <Form.Group
                                    className="mb-3"
                                    controlId="totalPrice"
                                >
                                    <Form.Label>Total Price</Form.Label>
                                    <div>
                                        <Form.Control
                                            type="text"
                                            placeholder="Total Price"
                                            readOnly
                                            ref={(input) =>
                                                (totalPrice = input)
                                            }
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
                                    Submit
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </Card>
            )}
        </Fragment>
    );
};

export default withRouter(CreateProduct);
