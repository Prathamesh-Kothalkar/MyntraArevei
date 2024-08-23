import {images} from "../../assets/data"
const ShopCategory = () => {
    const data=images;
    return <>
        <div className="">
            <div className="text-head-text text-start text-4xl uppercase font-semibold p-2">
            Shop By Category
            </div>
            <div className="flex flex-wrap justify-center">
                {data.map((each, index) => (
                    <div key={index} className="m-1">
                        <a href={data[index]}><img className="object-contain w-52" alt="Slide Image" src={each} /></a>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default ShopCategory;