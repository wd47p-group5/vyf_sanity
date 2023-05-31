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
        <main className="my-8 text-[#292F36]">
            <div className="container mx-auto px-6">
                <div className="md:flex md:items-center">
                    <div className="w-full h-64 md:w-1/2 lg:h-96 ">
                        <img className="bg-black h-full w-full rounded-md object-cover max-w-lg mx-auto" src={urlFor(image && image[index])} alt="Photo of Girl Shorts" />
                        <div className='flex gap-5 mt-5 ml-12'>
                            {image?.map((item,i)=> (
                                <img src={urlFor(item) }
                                key={i}
                                className={i == index ? 'cursor-pointer flex flex-row w-[100px] h-[100px] rounded-md border-[#f5f5f7] border-2 hover:border-black hover:border-2': 'border-[#f5f5f7] border-2 hover:border-black hover:border-2 flex flex-row w-[100px] h-[100px]'}
                                onMouseEnter={() => setIndex(i)}
                                />
                            ))}
                        </div>
                    </div>
                    
                    
                    <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
                        <h3 className="text-3xl leading-7 mt-2 mb-2 font-bold uppercase lg:text-5xl">{name}</h3>
                        <span className="text-2xl leading-7 text-[#3a95d2] font-bold mt-3">&#8369;{price}</span><br/>
                        <span className="text-1xl leading-2 mt-5">{details}</span>
                            <div className="mt-8">
                                
                                <div className="flex items-center text-center mt-4 rounded-md">
                                    <div className='flex items-center gap-4 rounded-md quantity-desc'>
                                        <span className='cursor-pointer font-medium' onClick={decQty}><AiOutlineMinus/></span>
                                        <span className='cursor-default quantity-count'>{qty}</span>

                                        <span className='cursor-pointer font-medium' onClick={incQty}><AiOutlinePlus/></span>
                                    </div>
                                </div>
                            </div>
                        <div className="mt-5 flex flex-col justify-between ">
                            <div className='flex'>
                                <button type='button' className='btn-darkmode' onClick={() => {
                                    onAdd(productData,qty)}}>Add to Cart</button>
                                <button type='button' className='btn-alt' onClick={handleBuyNow}>Go to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[index])} className='product-detail-image'/>
                </div>
                <div className='small-images-container'>
                    {image?.map((item,i)=> (
                        <img src={urlFor(item) }
                        key={i}
                        className={i == index ? 'small-image selected-image': 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                        <h4>Details:</h4>
                        <p>{details}</p>
                        <p className='price'>&#8369;{price}</p>
                        <div className='quantity'>
                            <h3>Quantity:</h3>
                            <p className='quantity-desc'>
                                <span className='minus' onClick={decQty}><AiOutlineMinus/></span>
                                <span className='num'>{qty}</span>
                                <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
                            </p>
                        </div>
                        <div className='buttons'>
                            <button type='button' className='add-to-cart' onClick={() => {
                                onAdd(productData,qty)}}>Add to Cart</button>
                            <button type='button' className='buy-now' onClick={handleBuyNow}>Buy Now</button>
                        </div>
                </div>
        </div>
        <div className='maylike-products-wrapper'>
                <h2>You may also like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item)=>(
                            <Product key={item._id} product={item}/>
                        ))}
                    </div>
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