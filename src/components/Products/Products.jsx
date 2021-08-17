import React from 'react';
import { Grid } from '@material-ui/core';
//import { product } from 'prelude-ls';

import Product from './Product/Product';
import useStyles from './styles';
/*
const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$90', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b57a253-3863-4d2c-b465-53691324bc0a/zoomx-vaporfly-next-2-road-racing-shoe-STlc3F.png'  },
    { id: 1, name: 'T-Shirt', description: 'Gym wear.', price: '$40', image: 'http://sc04.alicdn.com/kf/H7f9b45878f3b42a7867cf3e77eebdf24x.jpg' },
]; */
const Products = ({ products }) => {
    const classes = useStyles();

    return(
     <main className={classes.content}>
         <div className={classes.toolbar} />
         <Grid container justify="center" spacing={4}>
             {products.map((product) => (
                 <Grid item key={product.id} xs={12} sm={10} md={6} lg={3}>
                    <Product product={product} />
                 </Grid>
             ))}
            
         </Grid>
     </main>
    )
}

export default Products;
