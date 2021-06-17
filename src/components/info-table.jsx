import React from "react"
import { table, th, td, tr } from './info-table.module.css'


const InfoTable = ({ data }) => {
  console.log(data)
  return (
    <div>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Sub-Category</th>
          <th>Rating</th>
          <th>Total Number of Reviews</th>
          <th>Short Description</th>

        </tr>
        {data.allMongodbBodyshopProducts.nodes.map((node) =>
          <tr>
            <td>{node.Product_Name}</td>
            <td>{node.Main_Category}</td>
            <td>{node.Sub_Category}</td>
            <td>{node.Ratings_out_of_5}</td>
            <td>{node.Reviews_Count}</td>
            <td>{node.Short_Description}</td>
          </tr>)}
      </table>
    </div>
  )
}

export default InfoTable