import React, { useEffect, useState } from "react";
import { Read, Delete } from "../../APIServices/CRUDApi";
import FullScreenLoader from "../Common/fullScreenLoader";
import { errorMessage, successMessage } from "../Common/validator";
import { withRouter } from "react-router";

function ListTable(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Read().then((res) => setProducts(res));
  }, []);

  const deleteTableList = (id) => {
    Delete(id).then((result) => {
      if (result === true) {
        successMessage("Data delete success");
        props.history.push("/");
      } else {
        errorMessage("Request Fail please try again");
      }
    });
  };

  const updateItem = (id) => {
    props.history.push("/update-product/" + id);
  };

  if (products.length > 0) {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-dark  ">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i}>
                <td>{product.productName}</td>
                <td>{product.productCode}</td>
                <td>{product.qty}</td>
                <td>{product.unitPrice}</td>
                <td>{product.totalPrice}</td>
                <td>
                  <button
                    onClick={updateItem.bind(this, product._id)}
                    className="btn btn-warning me-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={deleteTableList.bind(this, product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <FullScreenLoader />
      </div>
    );
  }
}

export default withRouter(ListTable);
