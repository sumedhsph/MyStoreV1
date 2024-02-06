import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  const { meta, params} = useLoaderData();
  const categories = meta.categories;
  const companies = meta.companies;

  const {search, company, category, shipping, order, price} = params
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH  */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        className="input-sm"
        defaultValue={search}
      />

      {/* CATEGORIES */}
      <FormSelect
        name='category'
        className="select-sm"
        label="select category"
        list={categories}
        defaultValue={category}
      />

      {/* COMPANIES */}
      <FormSelect
        name='company'
        className="select-sm"
        label="select company"
        list={companies}
        defaultValue={company}
      />

      {/* SORT  */}
      <FormSelect
        name='order'
        className="select-sm"
        label="Sort by"
        list={['a-z', 'z-a', 'low price', 'high price']}
        defaultValue={order}
      />

      {/* RANGE */}

      <FormRange name="price" label="select price" className="range-sm w-full" price={price}/>

      {/* SHIPPING */}
      <FormCheckbox 
      name="shipping"
      label="free shipping"
      className="checkbox-sm"
      defaultValue={shipping}
      />
      {/* BUTTONS  */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}

export default Filters;
