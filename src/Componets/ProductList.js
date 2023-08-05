import React from 'react'
import Headers from './Headers'
import { Table ,Button} from 'react-bootstrap'

export default function ProductList() {
  return (
    <div>
      <Headers />
      <h1
        style={{
          color: "green",
          fontFamily: "Georgia",
          fontWeight: "bolder",
        }}
      >
        Product List{" "}
      </h1>

      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th>Operation</th>
              <th>Edit Product</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                labore ea ipsam eaque, quaerat repellat dolores? Velit veniam
                minima doloribus quas. Amet, perspiciatis explicabo cupiditate
                atque architecto unde et voluptatibus.
              </td>
              <td>
                <Button style={{ backgroundColor: "red" }}>Delete</Button>
              </td>
              <td>
                <Button style={{ backgroundColor: "green" }}>Update</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                labore ea ipsam eaque, quaerat repellat dolores? Velit veniam
                minima doloribus quas. Amet, perspiciatis explicabo cupiditate
                atque architecto unde et voluptatibus.
              </td>
              <td>
                <Button style={{ backgroundColor: "red" }}>Delete</Button>
              </td>
              <td>
                <Button style={{ backgroundColor: "green" }}>Update</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                labore ea ipsam eaque, quaerat repellat dolores? Velit veniam
                minima doloribus quas. Amet, perspiciatis explicabo cupiditate
                atque architecto unde et voluptatibus.
              </td>
              <td>
                <Button style={{ backgroundColor: "red" }}>Delete</Button>
              </td>
              <td>
                <Button style={{ backgroundColor: "green" }}>Update</Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                labore ea ipsam eaque, quaerat repellat dolores? Velit veniam
                minima doloribus quas. Amet, perspiciatis explicabo cupiditate
                atque architecto unde et voluptatibus.
              </td>
              <td>
                <Button style={{ backgroundColor: "red" }}>Delete</Button>
              </td>
              <td>
                <Button style={{ backgroundColor: "green" }}>Update</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
