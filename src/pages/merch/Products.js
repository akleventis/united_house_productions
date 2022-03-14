import {Grid} from '@material-ui/core';
import { products } from '../../data/data.js'
import Product from './Product'


const Products = () => {
    return (
        <main>
            <h2 className='router-title'>Merch</h2>
            <Grid container justifyContent="center" className='merch-grid' spacing={4}>
                {products.map((p) => (
                    <Grid key={`g${p.id}`} item xs={12} sm={6} md={4} lg={3}>
                        <Product key={p.id} product={p} />
                    </Grid>
                ))}

            </Grid>
        </main>
    )
}

export default Products;