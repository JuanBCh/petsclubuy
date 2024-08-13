"use server";

import pool from "./db";

export const createDelivery = async (formData) => {
  let {
    check,
    date,
    name,
    product,
    features,
    data,
    specs,
    price,
    paid,
    contact,
    delivery,
    direction,
  } = Object.fromEntries(formData);

  const db = await pool.connect();
  try {
    const result = await db.query(
      `INSERT INTO orders ("check", date, name, product, features, data, specs, price, paid, contact, delivery, direction) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
      [
        check ? true : false,
        date,
        name,
        product,
        features,
        data,
        specs,
        price ? price : 0,
        paid ? true : false,
        contact,
        delivery,
        direction,
      ]
    );

    db.release();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

export const handleProductInput = (setInput, step, value) => {
  setInput((prevState) => ({
    ...prevState,
    product: { product: prevState.product.product, [step]: value },
  }));
};
