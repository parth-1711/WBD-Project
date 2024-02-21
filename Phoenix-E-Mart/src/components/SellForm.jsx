// import React, { useRef, useState } from "react";
import "./SellForm.css";
import Selector from "./Selector";
import { useSelector } from "react-redux";

// const SellForm = () => {
//   const authSlice=useSelector((state)=>state.auth)
//   const adtitleRef = useRef();
//   const descRef = useRef();
//   const ageRef = useRef();
//   const priceRef = useRef();
//   const addln1Ref = useRef();
//   const addln2Ref = useRef();
//   const addln3Ref = useRef();
//   const cityref = useRef();
//   const img1ref = useRef();
//   const img2ref = useRef();
//   const img3ref = useRef();
//   const [selectedCatagory,setSelectedCatagory]=useState('');
let options = ["electronics", "automobile", "mobiles", "furniture", "hardware"];
//   const selectHandler=(option)=>{
//     setSelectedCatagory(option)
//   }
//   const submitHandler = async(e) => {
//     e.preventDefault();
//     const title = adtitleRef.current.value;
//     const desc = descRef.current.value;
//     const age=ageRef.current.value;
//     const price=priceRef.current.value;
//     const addln1=addln1Ref.current.value;
//     const addln2=addln2Ref.current.value;
//     const addln3=addln3Ref.current.value;
//     const city=cityref.current.value;
//     const img1=img1ref.current.value;
//     const img2=img2ref.current.value;
//     const img3=img3ref.current.value;
//     const address=addln1+addln2+addln3+city;
//     const img=[img1,img2,img3];
//     const product={
//       title:title,
//       description:desc,
//       tags:selectedCatagory,
//       imgs:img,
//       oldness:age,
//       expectedPrice:price,
//       address:address,
//       owner:authSlice.user.uname
//     }
//     console.log(product);
//     let response=await fetch('http://localhost:8000/postProduct',{
//       method:'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(product),
//     })
//     let result=await response.json()

//     console.log(result);
//   };

//   return (
//     <div className="containform">
//       <p>Please fill in the details</p>
//       <br />
//       <hr />
//       <br />
//       <form onSubmit={submitHandler}>
//         <p>Ad title:</p>
//         <input type="text" ref={adtitleRef} className="adtitl" name="title" />
//         <br />

//         <p className="text-slate-400">Mention the name of your item with some key features</p>
//         <br />

//         <p>Description</p>
//         <textarea ref={descRef} className="adddesc" name="description" />
//         <br />
//         <p className="text-slate-400">Include condition, features and reason for selling</p>
//         <br />

//         <label htmlFor="selectedOption">Slect Catagory for the product:-</label>
//         <Selector option={options} onSelect={selectHandler}/>
//         <br />

//         <p>How old is your item</p>
//         <input type="text" ref={ageRef} className="addoldness" name="howold" />
//         <br />
//         <p className="text-slate-400">Mention clearly</p>
//         <br />
//         <p>Set price:</p>
//         <input
//           type="text"
//           ref={priceRef}
//           className="addprice"
//           name="setprice"
//         />
//         <br />
//         <p className="text-slate-400">In rupees ₹</p>
//         <br />
//         <hr />
//         <br />
//         <p>
//           <i className="fa fa-address-book-o"></i> Please confirm your address
//         </p>
//         <br />
//         <p>Flat, House no., Building, Company, Apartment</p>
//         <input className="addflat" ref={addln1Ref} type="text" name="flat" />
//         <p className="text-slate-400">Address line 1</p>
//         <br />
//         <p>Area, Street, Sector, Village</p>
//         <input
//           className="addstreet"
//           ref={addln2Ref}
//           type="text"
//           name="street"
//         />
//         <p className="text-slate-400">Address line 2</p>
//         <br />
//         <p>Landmark</p>
//         <input
//           className="addlandmark"
//           ref={addln3Ref}
//           type="text"
//           name="landmark"
//         />
//         <br />
//         <br />
//         <p>Town/City</p>
//         <input type="text" ref={cityref} className="addcity" name="city" />
//         <br />
//         <hr />
//         <br />
//         <p>
//           <i className="fa fa-link "></i> Add Drive link
//         </p>
//         <br />
//         <p >Front View</p>
//         <input
//           type="text"
//           ref={img1ref}
//           className="addlandmark"
//           name="images1"
//         />
//         <p className="text-slate-400">Paste the Drive link of image</p>
//         <br />
//         <p>Back View</p>
//         <input
//           type="text"
//           ref={img2ref}
//           className="addlandmark"
//           name="images2"
//         />
//         <p>Paste the Drive link of image</p>
//         <br />
//         <p>Side View</p>
//         <input
//           type="text"
//           ref={img3ref}
//           className="addlandmark"
//           name="images3"
//         />
//         <p className="text-slate-400">Paste the Drive link of image</p>
//         <br />
//         <hr />
//         <div
//           // id="empty-warning"
//           className="hidden"
//           // style="text-align: center; color: crimson"
//         >
//           Any field shouldn't be empty !
//         </div>
//         <div
//           // id="neg-warning"
//           className="hidden"
//           // style="text-align: center; color: crimson"
//         >
//           Price shouldn't be 0 or less than 0 !
//         </div>

//         <div
//           // id="pat-warning"
//           className="hidden"
//           // style="text-align: center; color: crimson"
//         >
//           title or age field shouldn't contain special characters !
//         </div>

//         <input
//           type="submit"
//           value="Submit"
//           className="btn btn-outline-success"
//           // style="margin-left: 45%"
//         />
//       </form>
//     </div>
//   );
// };

// export default SellForm;

import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import axios from "axios";

function SellForm() {
  const authSlice=useSelector((state)=>state.auth)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    age: "",
    price: "",
    address: "",
    owner:"",
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
      form.append("owner",authSlice.user.uname)
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
        <label htmlFor="selectedOption">Slect Catagory for the product:-</label>
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
        {/* <br />
        <p>Flat, House no., Building, Company, Apartment</p>
        <input className="addflat" type="text" name="flat" />
        <p className="text-slate-400">Address line 1</p>
        <br />
        <p>Area, Street, Sector, Village</p>
        <input
          className="addstreet"
          // ref={addln2Ref}
          type="text"
          name="street"
        />
        <p className="text-slate-400">Address line 2</p>
        <br />
        <p>Landmark</p>
        <input
          className="addlandmark"
          // ref={addln3Ref}
          type="text"
          name="landmark"
        />
        <br />
        <br />
        <p>Town/City</p>
        <input type="text" className="addcity" name="city" /> */}
        <input
          type="text"
          className="addcity"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <br />
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

        {/* <p>Front View</p>
        <input
          type="text"
          // ref={img1ref}
          className="addlandmark"
          name="images1"
        />
        <p className="text-slate-400">Paste the Drive link of image</p>
        <br />
        <p>Back View</p>
        <input
          type="text"
          // ref={img2ref}
          className="addlandmark"
          name="images2"
        />
        <p>Paste the Drive link of image</p>
        <br />
        <p>Side View</p>
        <input
          type="text"
          // ref={img3ref}
          className="addlandmark"
          name="images3"
        />
        <p className="text-slate-400">Paste the Drive link of image</p> */}
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

<<<<<<< HEAD
        <input
          type="submit"
          value="Submit"
          className="btn btn-outline-success mt-2"
          // style="margin-left: 45%"
        />
      </form>
    </div>
=======
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-success"
            // style="margin-left: 45%"
          />
        </form>
      </div>
    </>
>>>>>>> 39463ecb3267c7f138511f3dfaf9bd34e4f08e52
  );
}

export default SellForm;

// <form onSubmit={handleSubmit}>
//   <label>
//     Title:
//     <input
//       type="text"
//       name="title"
//       value={formData.title}
//       onChange={handleInputChange}
//     />
//   </label>
//   <br />
//   <label>
//     Description:
//     <textarea
//       name="description"
//       value={formData.description}
//       onChange={handleInputChange}
//     />
//   </label>
//   <br />
//   <label>
//     Age:
//     <input
//       type="number"
//       name="age"
//       value={formData.age}
//       onChange={handleInputChange}
//     />
//   </label>
//   <br />
//   <label>
//     Price:
//     <input
//       type="text"
//       name="price"
//       value={formData.price}
//       onChange={handleInputChange}
//     />
//   </label>
//   <br />
//   <label>
//     Address:
//     <input
//       type="text"
//       name="address"
//       value={formData.address}
//       onChange={handleInputChange}
//     />
//   </label>
//   <br />
//   <label>
//     Images:
//     <input type="file" name="images" multiple onChange={handleImageChange} />
//   </label>
//   <label htmlFor="selectedOption">Select Catagory for the product:-</label>
//      <Selector option={options} onSelect={selectHandler}/>
//      <br />
//   <br />
//   <button type="submit">Submit</button>
// </form>
