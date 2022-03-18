import {Grid} from '@material-ui/core';
import { productMapping } from '../../data/data.js'
import Product from './Product'


const Products = () => {
    return (
        <main>
            <h3 className='router-title'>Merch</h3>
            <div className='merch-grid'>
                {productMapping.map((p) => (
                    <div key={`g${p.id}`} item xs={12} sm={6} md={4} lg={3}>
                        <Product key={p.id} product={p} />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Products;