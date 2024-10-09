import './bonus.css';
import '../global.css'

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
    <table className='table'>
      <thead>
        <tr>
          <th className='th'>Key</th>
          <th className='th'>Value</th>
          <th className='th'>Position</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(obj).reduce((rows, key, index) => {
          return [
            ...rows,
            <tr key={index}>
              <td className='td'>{key}</td>
              <td className='td'>{obj[key]}</td>
              <td className='td'>{index}</td>
            </tr>
          ];
        }, [])}
      </tbody>
    </table>
  );
}
