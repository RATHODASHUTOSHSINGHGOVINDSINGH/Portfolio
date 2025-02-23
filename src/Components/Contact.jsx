import { useForm } from "react-hook-form";
import { useId } from "react";

const Contact = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className="max-w-lg mx-auto p-6  shadow-lg rounded-lg py-12">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor={nameId} className="block text-sm font-medium ">Name</label>
          <input 
            id={nameId}
            type="text" 
            {...register("name", { required: "Name is required",
              pattern: { value: /^[A-Za-z\s]+$/, message: "Use only letters (A-Z, a-z) and spaces" }

             })} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor={emailId} className="block text-sm font-medium ">Email</label>
          <input 
            id={emailId}
            type="email" 
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" }
            })} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-600"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor={messageId} className="block text-sm font-medium ">Message</label>
          <textarea 
            id={messageId}
            rows="4" 
            {...register("message", { required: "Message is required" })} 
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-600"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-2xl hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        
        </a>
        
        {/* GitHub Icon */}
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        
        </a>
      </div>
    </div>
  );
};

export default Contact;
