import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../../components'
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({productData, products}) => {
    const { image, name, details, price} = productData
    const [index, setIndex] = useState(0)
    const {decQty, incQty, qty, onAdd, setShowCart} = useStateContext();
    const handleBuyNow = () => {
        onAdd(productData, qty)
        setShowCart(true)
    }
    return (
        <>

        <main className="slug-main">
            <div className="slug-container">
                <div className="md:flex md:items-center">
                    <div className="w-full h-64 md:w-1/2 lg:h-96 ">
                        <img className="bg-black h-full w-full rounded-md object-cover max-w-lg mx-auto shadow-md" src={urlFor(image && image[index])} alt="Photo of Girl Shorts" />
                    </div>
                    
                    <div className="slug-product-container">
                        <h3 className="text-3xl leading-[3rem] lg:tracking-wide mt-2 mb-2 font-bold lg:text-5xl">{name}</h3>
                        <span className="text-2xl leading-7 text-[#3a95d2] font-bold mt-3">&#8369;{price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span><br/>
                        <span className="text-1xl leading-2 mt-5">{details}</span>
                            <div className="flex justify-center md:justify-normal items-center mt-8">
                                
                                <div className="flex items-center text-center mt-4 rounded-md">
                                    <div className='flex items-center gap-4 rounded-md quantity-desc'>
                                        <span className='cursor-pointer font-medium' onClick={decQty}><AiOutlineMinus/></span>
                                        <span className='cursor-default quantity-count'>{qty}</span>

                                        <span className='cursor-pointer font-medium' onClick={incQty}><AiOutlinePlus/></span>
                                    </div>
                                </div>
                            </div>
                        <div className="mt-5 flex flex-col justify-between ">
                            <div className='flex justify-center md:justify-normal'>
                                <button type='button' className='btn-darkmode' onClick={() => {
                                    onAdd(productData,qty)}}>Add to Cart</button>
                                <button type='button' className='btn-alt' onClick={handleBuyNow}>Go to checkout</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
        
        <div className='recommended-container'>
                <h2>Recommended Products</h2>
                <div className='marquee'>
                    <div className='recommended-products-container track'>
                        {products.map((item)=>(
                            <Product key={item._id} product={item}/>
                        ))}
                    </div>
                </div>
        </div>
    

    </>
  )
}

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const productsQuery = '*[_type == "product"]'
    const productData = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    // console.log(productData)
    // console.log(products)
    return {
      props: {productData, products}
    }
  }

export const getStaticPaths = async ()=>{
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export default ProductDetails