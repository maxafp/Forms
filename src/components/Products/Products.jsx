import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id:1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://publish.one37pm.net/wp-content/uploads/2020/07/3-1.png?fit=750%2C368'},
    { id:2, name: 'Macbook', description: 'Apple Macbook.', price: '$100', image: 'https://cdn.vox-cdn.com/thumbor/PxguXrNv8nr1qGwofYw0fOt_Xzs=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69468925/vpavic_4291_20201113_0366.0.0.jpg' },
];

const Products = () => {
    const classes = useStyles();
    
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) =>
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                )}
            </Grid>
        </main>
    )
}

export default Products
