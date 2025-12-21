import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import InputFileMainImage from "./InputFileMainImage";

const RegisterProduct = () => {
  return (
    
    <form className="flex flex-col px-9 py-8 mx-auto">
      <h1 className="font-title font-bold text-3xl text-main-200 mb-8">Register Product</h1>
      <Input id={"name"} label="Name" type="text" />
      <TextArea id={"description"} label={"Description"} />
      <InputFileMainImage id="mainImage" label="Main Image" buttonLabel="Choose Image"/>
      <Input id={"price"} label="Price" type="text" />
      <Input id={"discount"} label="Discount" type="text" />
      <Input id={"stock"} label="Stock" type="text" />
    </form>
  );
};

export default RegisterProduct;
