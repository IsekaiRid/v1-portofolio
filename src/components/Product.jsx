import { BsRocketTakeoff } from "react-icons/bs";
import Websiteimg1 from '../asset/website1.png';
import Websiteimg2 from '../asset/website2.png';

const items = [
    { id: 1, nama: 'WebsiteMovi', linkGambar: Websiteimg1, discount: 'none' },
    { id: 2, nama: 'ProfileWebsite', linkGambar: Websiteimg2, discount: 'none' },
]




const Product = () => {
    return (
        <>
            <div className='container pt-3 bg-slate-100 border pb-10' id="projack">
                <div className='flex justify-center mb-10 font-bold text-2xl'>
                <BsRocketTakeoff  style={{ width: '40px', height: '40px', marginRight:'5px' }} /><h1>Recent Project</h1>
                </div>
                <div className='grid md:grid-cols-2 grid-rows-1'>
                    {items.slice(0, 4).map((item) => (
                        <div key={item.id} className="mx-auto mt-4 w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                            <img loading="lazy" className="h-48 w-full object-contain" src={item.linkGambar} alt="Product Image" />
                            <div className="p-4">
                                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{item.nama}</h2>
                                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                                <div className="flex items-center">
                                    <p className="ml-auto text-base font-medium text-green-500">{item.discount}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product
