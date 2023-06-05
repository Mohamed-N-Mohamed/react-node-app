import React from "react";

const Form = () => {
  return (
    <div className='form flex justify-center items-center gap-4 py-12'>
      <div className='input-group-username'>
        <label className='pr-4'>Username</label>
        <input
          type='text'
          className='py-2 px-4 border rounded-lg outline-none'
        />
      </div>

      <div className='input-group-username'>
        <label className='pr-4'>Password</label>
        <input
          type='password'
          className='py-2 px-4 border rounded-lg outline-none'
        />
      </div>

      <div className='input-group-username'>
        <label className='pr-4'>Email</label>
        <input
          type='email'
          className='py-2 px-4 border rounded-lg outline-none'
        />
      </div>
    </div>
  );
};

export default Form;
