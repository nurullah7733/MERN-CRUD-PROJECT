import axios from "axios";

export const Create = (
  productName,
  productCode,
  img,
  unitPrice,
  qty,
  totalPrice
) => {
  const URL = `${process.env.REACT_APP_API}/add-product`;

  const newProduct = {
    productName: productName,
    productCode: productCode,
    img: img,
    unitPrice: unitPrice,
    qty: qty,
    totalPrice: totalPrice,
  };
  return axios
    .post(URL, newProduct)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const Read = () => {
  const URL = `${process.env.REACT_APP_API}/all-product`;

  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 201) {
        return res.data["data"];
      } else {
        return false;
      }
    })
    .catch((e) => console.log(e));
};

export const Update = (
  id,
  productName,
  productCode,
  img,
  qty,
  totalPrice,
  unitPrice
) => {
  const URL = `${process.env.REACT_APP_API}/update-product/${id}`;
  const updateProduct = {
    productName: productName,
    productCode: productCode,
    img: img,
    unitPrice: unitPrice,
    qty: qty,
    totalPrice: totalPrice,
  };
  return axios
    .post(URL, updateProduct)
    .then((res) => {
      if (res.status === 201) {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => console.log(e));
};

export const Delete = (id) => {
  const URL = `${process.env.REACT_APP_API}/delete-product/${id}`;

  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 201) {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => console.log(e));
};

export const SignleProduct = (id) => {
  const URL = `${process.env.REACT_APP_API}/product/${id}`;
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data["data"];
      } else {
        return false;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
