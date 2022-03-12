import {Grid} from '@material-ui/core';
import {Shirt, Shroomy} from '../../assets/images/index.js'
import Product from './Product'

const products = [
    {id: 1, name: 'T-Shirt', price: 25, sizes: ['S', 'M', 'L', 'XL'], img: Shirt},
    {id: 2, name: 'Bucket Hat', price: 15, sizes: ['Universal'], img: Shroomy}
]

const Products = () => {
    return (
        <main>
            <Grid container justifyContent="center" className='merch-grid' spacing={4}>
                {products.map((p) => (
                    <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={p} />
                    </Grid>
                ))}

            </Grid>
        </main>
    )
}

export default Products;