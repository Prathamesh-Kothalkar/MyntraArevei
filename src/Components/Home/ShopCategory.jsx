import {images} from "../../assets/data"
const ShopCategory = () => {
    const data=images;
    return <>
        <div className="">
            <div className="text-head-text text-start text-3xl uppercase font-semibold p-2 mt-5 my-5">
            Shop By Category
            </div>
            <div className="grid grid-cols-2 md:flex flex-wrap justify-center ">
                {data.map((each, index) => (
                    <div key={index} className="m-2 hover:shadow-lg hover:shadow-black hover:scale-105 transition-all">
                        <a href={data[index]}><img className="object-contain w-52" alt="Slide Image" src={each} /></a>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default ShopCategory;