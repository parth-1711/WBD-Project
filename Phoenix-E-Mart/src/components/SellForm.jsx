// import React, { useRef, useState } from "react";
import "./SellForm.css";
import Selector from "./Selector";
import { useSelector } from "react-redux";

let options = ["electronics", "automobile", "mobiles", "furniture", "hardware"];

import { useState } from "react";
import axios from "axios";

function SellForm() {
  const authSlice = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    age: "",
    price: "",
    address: "",
    owner: "",
    tags: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      console.log(formData.images);
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("age", formData.age);
      form.append("price", formData.price);
      form.append("address", formData.address);
      form.append("tags", formData.tags);
      form.append("owner", authSlice.user.uname);
      let imgs = [];
      formData.images.forEach((image) => {
        // imgs.push(image);
        form.append("images", image);
      });

      console.log(form);

      let response = await axios.post(
        "http://localhost:8000/postProduct",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="containform">
        <p>Please fill in the details</p>
        <br />
        <hr />
        <br />
        <form onSubmit={submitHandler}>
          <p>Ad title:</p>
          <input
            type="text"
            className="adtitl"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <br />

          <p className="text-slate-400">
            Mention the name of your item with some key features
          </p>
          <br />

          <p>Description</p>

          <textarea
            className="adddesc"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <br />
          <p className="text-slate-400">
            Include condition, features and reason for selling
          </p>
          <br />
          <label htmlFor="selectedOption">
            Slect Catagory for the product:-
          </label>
          <Selector option={options} onSelect={handleInputChange} />
          <br />

          <p>How old is your item</p>
          <input
            type="text"
            className="addoldness"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <br />
          <p className="text-slate-400">Mention clearly</p>
          <br />
          <p>Set price:</p>
          <input
            type="text"
            // ref={priceRef}
            className="addprice"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <br />
          <p className="text-slate-400">In rupees ₹</p>
          <br />
          <hr />
          <br />
          <p>
            <i className="fa fa-address-book-o"></i> Please confirm your address
          </p>

          <input
            type="text"
            className="addcity"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />

          <br />
          <br />
          <hr />
          <br />
          <p>
            <i className="fa fa-link "></i> Add Drive link
          </p>
          <br />
          <p>Images:</p>
          <input
            className="addimages"
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
          />

          <br />
          <hr />
          <div
            // id="empty-warning"
            className="hidden"
            // style="text-align: center; color: crimson"
          >
            Any field shouldn't be empty !
          </div>
          <div
            // id="neg-warning"
            className="hidden"
            // style="text-align: center; color: crimson"
          >
            Price shouldn't be 0 or less than 0 !
          </div>

          <div
            // id="pat-warning"
            className="hidden"
            // style="text-align: center; color: crimson"
          >
            title or age field shouldn't contain special characters !
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-success"
            // style="margin-left: 45%"
          />
        </form>
      </div>
    </>
  );
}

export default SellForm;