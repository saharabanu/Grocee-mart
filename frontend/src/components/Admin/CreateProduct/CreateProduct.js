import React, { useState } from 'react';
import axios from 'axios';

import swal from 'sweetalert';

const CreateProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        category: '',
        price: 0,
        image: '',
    })

    const onChangeHandler = (e) => {

        if (e.target.name === "image") {
            let reader = new FileReader();

            reader.onload = () => {
                let data = { ...newProduct };
                data[e.target.name] = reader.result;
                setNewProduct(data)
            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            let data = { ...newProduct };
            data[e.target.name] = e.target.value;
            setNewProduct(data)
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
// const option={
//     headers:{
//         "Authorization":`Bearer ${localStorage.getItem("token")}`,
//         "Accept":'application/json'
//     }
// }


        axios.post("/api/v1/product/create", newProduct)
            .then(data => swal("Product Create Success"))
            .catch(err => swal(err.response.data.message));


    }



    return (
        <div className="px-5">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-outline ">
                    <label className="d-block fw-bold" >Product Name</label>
                    <input onChange={(e) => onChangeHandler(e)} name="name" type="text" className=" login-input" placeholder='Product Name' required />
                </div>

                <div className="form-outline ">
                    <label className="d-block fw-bold" >Product Description</label>
                    <textarea onChange={(e) => onChangeHandler(e)} name="description" type="text" className=" login-input" placeholder='Description' required />
                </div>
                <div className="form-outline ">
                    <label className="d-block fw-bold" >Product Price</label>
                    <input onChange={(e) => onChangeHandler(e)} name="price" type="number" className=" login-input" placeholder='Price' required />
                </div>
                <div className="form-outline ">
                    <label className="d-block fw-bold" >Product Category</label>
                    <input onChange={(e) => onChangeHandler(e)} name="category" type="text" className=" login-input" placeholder='Category' required />
                </div>
                <div className="form-outline ">
                    <label className="d-block fw-bold" >Product Image</label>
                    <input onChange={(e) => onChangeHandler(e)} name="image" type="file" className=" login-input" placeholder='Add Image' required />
                </div>

                <input type="submit" value="Add Product" className="signin-btn btn-block mb-3"></input>

            </form>

        </div>
    );
}

export default CreateProduct