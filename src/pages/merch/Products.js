import { Grid } from "@material-ui/core";
import Product from "./Product";
import { getProducts } from "../../api";
import { useState, useEffect, useCallback } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const hydrateProducts = useCallback(() => {
    getProducts().then((res) => setProducts(res));
  }, [setProducts]);

  useEffect(() => {
    hydrateProducts();
  }, [hydrateProducts]);

  return (
    <main>
      <Grid
        container
        justifyContent="center"
        className="merch-grid"
        spacing={4}
      >
        {products.map((p) => (
          <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={p} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
