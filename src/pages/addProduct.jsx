import React, {useRef, useState } from 'react'
import './addProduct.css'
import axios from 'axios';
import swal from 'sweetalert';

import { MenuItem, FormControl, InputLabel, Select, Checkbox, ListItemText } from '@mui/material';
const server = import.meta.env.VITE_BACKEND_SERVER;


const options = ['red', 'blue', 'yellow', 'green'];
export default function AddProduct() {
  const [product,setProduct] = useState({name:'', description:'', price:'', category:'',subCategory:'', brand:'', sizes: [],colors: [], images:[],imagePreviews: [], stock:''});
  const categories = {
    men: ['shirts', 'trousers', 'shoes'],
    women: ['dresses', 'handbags', 'shoes'],
    kids: ['toys', 'clothing', 'shoes'],
  };
  const resetBtn = useRef();
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
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (event) => {
      const { value } = event.target;
      setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
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
    product.images.forEach((size) => {
        formData.append('sizes', size);
      });
    product.images.forEach((color) => {
        formData.append('colors', color);
      });
    formData.append('stock', product.stock);
    
    product.images.forEach((image) => {
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

            {/* Category */}
            <div>
              <label className="block text-lg font-medium mb-1">Category</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChangeAddProduct}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value='' className=' text-slate-500'>Select Category</option>
                {
                  Object.keys(categories).map((pcategory)=><option value={pcategory} className=' text-slate-500'>{pcategory}</option>)
                }
              </select>
            </div>

            {/* Sub-Category */}
            <div className='sm:col-[span_2/span_2]'>
              <label className="block text-lg font-medium mb-1">Sub-Category</label>
              <select
                name="subCategory"
                value={product.subCategory}
                onChange={handleChangeAddProduct}
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
               <option value='' className=' text-slate-500'>Select sub-Category</option>
                {
                  product.category !== '' && categories[product.category].map((scategory)=><option value={scategory} className=' text-slate-500'>{scategory}</option>)
                }
                </select>
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
            <FormControl fullWidth>
      <InputLabel id="multiple-select-label">Select Options</InputLabel>
      <Select
        labelId="multiple-select-label"
        multiple
        name="colors"
        value={selectedOptions}
        onChange={handleChange}
        renderValue={(selected) => selected.join(', ')}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={selectedOptions.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
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
