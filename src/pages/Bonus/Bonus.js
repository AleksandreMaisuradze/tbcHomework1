import React from 'react'
import './Bonus.css'

export default function Bonus() {
  const obj = {
    id: '10002',
    name: 'Eco-Friendly Water Bottle',
    description: 'Stay hydrated with our durable, eco-friendly water bottle.',
    price: 14.99,
    currency: 'USD',
    imageURL: 'https://example.com/images/product-10002.jpg',
  };

  return (
    <table>
      <thead>
        <tr>
          <th>key</th>
          <th>value</th>
          <th>position</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(obj).reduce((rows, value, index) => {
          console.log(value);
          return [
            ...rows,
            <tr key={index}>
              <td>{value}</td>
              <td>{obj[value]}</td>
              <td>{index}</td>
            </tr>
          ];
        }, [])}
      </tbody>
    </table>
  );

}
