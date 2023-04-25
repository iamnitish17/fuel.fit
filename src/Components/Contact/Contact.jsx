
// import React, { useState} from "react";
// import axios from "axios";


// import { registerRoute } from "../../utils/APIRoutes";

// export default function Contact() {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     plan:"",
//     message:""
//   });


//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

 
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//       const { name,email,phone,age,plan,message } = values;
//       axios.post(registerRoute, {
//         name,email,phone,age,plan,message
//       });
//   };

//   return (
//     <div className="contact">
//         <form action="" onSubmit={(event) => handleSubmit(event)} className="form">
//           <input
//             type="text"
//             placeholder="name"
//             name="name"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="text"
//             placeholder="number"
//             name="phone"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="text"
//             placeholder="age"
//             name="age"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="text"
//             placeholder="plan"
//             name="plan"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="text"
//             placeholder="message"
//             name="message"
//             onChange={(e) => handleChange(e)}
//           />
//           <button type="submit">Send</button>

//         </form>
      
//     </div>
//   );
// }




import React, { useState } from "react";
import axios from "axios";
import { registerRoute } from "../../utils/APIRoutes";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    plan: "",
    message: ""
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, phone, age, plan, message } = values;
    axios.post(registerRoute, { name, email, phone, age, plan, message });
  };

  return (
    <div className="contact">
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={(e) => handleChange(e)}
        />
        
         <br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={values.age}
          onChange={(e) => handleChange(e)}
        />
        

        <label htmlFor="plan">Plan:</label>
        <select id="plan" name="plan" value={values.plan} onChange={(e) => handleChange(e)}>
          <option value="basic">Basic</option>
          <option value="pro">Pro</option>
          <option value="premium">Premium</option>
        </select>

         <br />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(e) => handleChange(e)}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
