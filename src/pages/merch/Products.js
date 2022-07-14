import Product from './Product'


const Products = (props) => {
    const {products, productMapping} = props
    // let products = props.products
    // let productMapping = props.productMapping

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