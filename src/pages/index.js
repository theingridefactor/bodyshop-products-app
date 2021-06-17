import * as React from "react"
import { graphql } from 'gatsby'

import InfoTable from "../components/info-table"
import { container } from '../components/layout.module.css'

export const query = graphql`query MyQuery {
  allMongodbBodyshopProducts {
    nodes {
      id
      Main_Category
      Main_Ingredient
      Ratings_out_of_5
      Sizes_Available
      Long_Description
      Item_Number
      Prices
      Product_Name
      Reviews_Count
      Short_Description
      Sizes
      Sub_Category
    }
  }
}`

const IndexPage = ({ data }) => {
  return (
    <main className={container}>
      <title>The BodyShop Site</title>
      <h1>The BodyShop Site</h1>
      <InfoTable data={data} />
    </main>
  )
}

export default IndexPage
