import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/Container'
import React from 'react'

export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("c582533b-ddec-471d-9621-49344bdd5e90")
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title="Features Products" items={products} />
      </div>
    </Container>
  )
}

export default HomePage