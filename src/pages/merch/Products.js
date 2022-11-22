import Product from './Product'
import { ComingSoon } from '../../assets'

const Products = (props) => {
    const {products, productMapping} = props
    if (productMapping.length === 0) {
        return (
            <main>
                <h3 className='router-title'>Merch</h3>
                <img className='cs' alt="coming soon" src={ComingSoon}></img>
            </main>
        )
    }

    return (
        <main>
            <h3 className='router-title'>Merch</h3>
            <div className='merch-grid'>
                {productMapping.map((p) => (
                    <div key={`g${p.name}`} xs={12} sm={6} md={4} lg={3}>
                        <Product key={p.id} products={products} product={p} />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Products;