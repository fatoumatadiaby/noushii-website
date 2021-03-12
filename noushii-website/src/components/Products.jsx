import React from 'react'
import Grid from '@material-ui/core'

const products = [
    {id: 1, name:'swimsuitA', description: 'black zip up'}
    {id: 2, name:'swimsuitB', description: 'black strings'}
    {id: 3, name:'swimsuitC', description: 'black two piece'}
]
const Products = () => {
    <main>
        <Grid container justify="center" spacing= {4}>
            {products.map((product) => {
                
            }}
       </Grid>
    </main>
}