import mysql from 'mysql';
import fs from 'fs';
import path from 'path';

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'node_course_schema',
  user: 'node-course-user',
  password: 'Mustafoski#1',
});

connection.connect();

fs.readFile(
  path.join(__dirname, 'new-products.txt'),
  'utf-8',
  (err, contents) => {
    if (err) colorfulLog(err);
    const productsString = contents.split('\n');
    const products = productsString.map((productString, i) => ({
      id: i,
      name: productString.split(',')[0],
      price: Number(productString.split(',')[1]),
    }));
    const productsInArray = products.map((product) => [
      product.id,
      product.name,
      product.price,
    ]);

    connection.query(
      `INSERT INTO products(id,name,price)
    VALUES ?`,
      [productsInArray],
      (err, results) => {
        if (err) console.log(err);
        console.log('Done Inserting products');
        console.log(results);
      }
    );
    connection.end();
  }
);
