import { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/user");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  const handleFormOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch("/user", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form flex justify-center items-center gap-4 py-12'>
      <div className='input-group-username'>
        <label className='pr-4'>Username</label>
        <input
          type='text'
          className='py-2 px-4 border rounded-lg outline-none'
          name='name'
          onChange={handleFormOnChange}
        />
      </div>

      <div className='input-group-username'>
        <label className='pr-4'>Password</label>
        <input
          type='password'
          className='py-2 px-4 border rounded-lg outline-none'
          name='password'
          onChange={handleFormOnChange}
        />
      </div>

      <div className='input-group-username'>
        <label className='pr-4'>Email</label>
        <input
          type='email'
          className='py-2 px-4 border rounded-lg outline-none'
          name='email'
          onChange={handleFormOnChange}
        />
      </div>

      <button
        className='py-2 px-12 rounded-full bg-black text-white capitalize'
        onClick={handleFormSubmit}
      >
        Sign In
      </button>
    </div>
  );
};

export default Form;
