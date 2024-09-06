import React, {useRef, useState } from 'react'
import './addProduct.css'
import axios from 'axios';
import swal from 'sweetalert';
const server = import.meta.env.VITE_BACKEND_SERVER;

export default function AddProduct() {
  const [product,setProduct] = useState({name:'', description:'', price:'', category:'',subCategory:'', brand:'', sizes: [],colors: [], images:[],imagePreviews: [], stock:''});
  const resetBtn = useRef(null);
  const handleChangeAddProduct=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const handleArrayChange = (e, fieldName) => {
      const values = e.target.value.split(',').map((item) => item.trim());
      setProduct({
        ...product,
        [fieldName]: values
      });
    };
    const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      const previews = files.map((file) => URL.createObjectURL(file));
      setProduct({
        ...product,
        images: files, // Store actual files
        imagePreviews: previews // Store URLs for preview
      });
      document.querySelector(".postform").classList.add("jadu");
    };
  const handleformdata = (e)=>{
    e.preventDefault();
    console.log(product);
    alert('wait for Few Seconds');

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('subCategory', product.subCategory);
    formData.append('brand', product.brand);
    formData.append('sizes', product.sizes);
    formData.append('colors', product.colors);
    formData.append('stock', product.stock);
    
    // Append each image to FormData
    product.images.forEach((image, index) => {
      formData.append('images', image);
    });
    axios.post(`${server}/v1/product/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res)=>{console.log(res.data);
  swal({
    title: "Successfully Uploaded",
    text: `${res.data.protype}`,
    icon: "success",
    dangerMode: true,
  })
  resetBtn.current.click();
  
}
  ).catch((err)=>{console.log(err);
    swal({
      title: "Failed",
      text: `${err.response?err.response.data.message:err.response.message}`,
      icon: "error",
      dangerMode: true,
    })});
  }
  let fileInput;
  let previewImg;
  // let mybox;
  let loadfile = (e)=>{
    // let ogImageRatio;
    var file = e.target.files[0]; 
    if(!file) return;
    previewImg.src = URL.createObjectURL(file); 
    previewImg.addEventListener("load", () => { 
        // ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        setimage(file);
    });
  }

  return (
    <>
    <div className="mysite">
    <div class="postform">
        <h1>Add Product</h1>
        <form  >
      <div class="upload-box"  onClick={()=>fileInput.click()}>
        <input type="file"  accept="image/*" id="postinp" 
                name="images"
                multiple
                onChange={handleImageChange}
 ref={(e)=>{fileInput=e}} hidden/>
        <div className="imageList">
        {product.imagePreviews.length > 0 && (
    <div className="flex  gap-2 overflow-x-auto">
      {product.imagePreviews.map((preview, index) => (
        <img
          key={index}
          src={preview}
          alt={`Preview ${index + 1}`}
          className="w-32 h-32 object-cover rounded"
        />
      ))}
  </div>
)}

        </div>
        <img src="https://www.codingnepalweb.com/demos/resize-and-compress-image-javascript/upload-icon.svg" alt="" id="postimage" ref={(e)=>{previewImg=e}} />
        <p>Browse File to Upload Product Image</p>
      </div>
      <div className="content">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {/* Name */}
       <div>
              <label className="block text-lg font-medium mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChangeAddProduct}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter product name"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-lg font-medium mb-1">Price</label>
              <input
                type="text"
                name="price"
                value={product.price}
                onChange={handleChangeAddProduct}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter product price"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-lg font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleChangeAddProduct}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter product category"
              />
            </div>

            {/* Sub-Category */}
            <div>
              <label className="block text-lg font-medium mb-1">Sub-Category</label>
              <input
                type="text"
                name="subCategory"
                value={product.subCategory}
                onChange={handleChangeAddProduct}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter product sub-category"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block text-lg font-medium mb-1">Brand</label>
              <input
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChangeAddProduct}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter product brand"
              />
            </div>

           {/* Sizes (Array Input) */}
           <div>
              <label className="block text-lg font-medium mb-1">Sizes</label>
              <input
                type="text"
                name="sizes"
                value={product.sizes.join(', ')}
                onChange={(e) => handleArrayChange(e, 'sizes')}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter sizes (comma separated)"
              />
            </div>

            {/* Colors (Array Input) */}
            <div>
              <label className="block text-lg font-medium mb-1">Colors</label>
              <input
                type="text"
                name="colors"
                value={product.colors.join(', ')}
                onChange={(e) => handleArrayChange(e, 'colors')}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter colors (comma separated)"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block text-lg font-medium mb-1">Stock</label>
              <input
                type="text"
                name="stock"
                value={product.stock}
                onChange={handleChangeAddProduct}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter stock quantity"
              />
            </div>


            {/* Description */}
            <div className="sm:col-span-2">
              <label className="block text-lg font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChangeAddProduct}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter product description"
                rows="4"
              ></textarea>
            </div>
      </div>
      <button type='submit' className=' w-full bg-[#927DFC] text-white font-semibold py-3 rounded mt-6 transition-colors ' onClick={handleformdata}>Submit</button>
      </div>
      <button type="reset" ref={resetBtn} hidden></button>
    </form>
    </div>
    </div>
    </>

  )
}
