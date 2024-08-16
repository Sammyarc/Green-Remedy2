import { useState } from "react";

export default function useFormHook(initialState) {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setState((prevState) => ({
      ...prevState,
      // If the input is a checkbox, use `checked`; otherwise, use `value`.
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //show/hide password
  const toggleVisibility = (field) => {
    setState((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  // Reset form
  const resetForm = () => {
    setState(initialState);
  };

  return [
    state, // form data (formData)
    handleChange,
    toggleVisibility,
    resetForm,
  ];
}
