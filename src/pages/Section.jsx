
const Section=({text})=>{

    const images=[
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg"
    ]

    const links=[
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
        "https://assets.myntassets.com/f_webp,w_171,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg", 
    ]
    return (
        <>
            <div className="p-2">
            <div className="text-head-text text-start text-3xl uppercase font-semibold p-2 mt-5 my-5">
                The Best Category Form {text}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5">
                {
                  images.map((e,index)=>{
                    return <a href={links[index]}><img src={e} className="m-2 shadow-black h-60  md:h-80 md:w-80 object-contain hover:scale-105 hover:shadow-sm hover:transition-all"/></a>
                  })
                }
            </div>
            </div>
        </>
    )
}

export default Section;