import React from 'react'
import './Contact.css'

const Contact = () => {

    function whatsapp(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var age = document.getElementById("age").value;
        var plan = document.getElementById("plan").value;
        var message = document.getElementById("message").value;
         
        var url = "https://wa.me/+918766539293?text="
        +"*Name :* "+name+"%0a"
        +"*Email :* "+email+"%0a"
        +"*Contact No :* "+phone+"%0a"
        +"*Age :* "+age+"%0a"
        +"*Plan :* "+plan+"%0a"
        +"*Message :* "+message;
         
        window.open(url,'_blank').focus();
        }

  return (
  <div className="container" id='contact'>
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" autoComplete='true' placeholder="NAME" id='name' />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" autoComplete='on' placeholder="EMAIL" id='email'/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" id='phone'/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Age" id='age'/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Plan" id='plan'/>
            </div>
            <div classNameName="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" id='message'/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button" data-bs-dismiss="modal">CANCEL</button>
              <button className="app-form-button" onClick={whatsapp}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Contact;




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




// // import React, { useState } from "react";
// // import axios from "axios";
// // import { registerRoute } from "../../utils/APIRoutes";

// // export default function Contact() {
// //   const [values, setValues] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     age: "",
// //     plan: "",
// //     message: ""
// //   });

// //   const handleChange = (event) => {
// //     setValues({ ...values, [event.target.name]: event.target.value });
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     const { name, email, phone, age, plan, message } = values;
// //     axios.post(registerRoute, { name, email, phone, age, plan, message });
// //   };

// //   return (
// //     <div className="contact">
// //       <form className="form" onSubmit={(event) => handleSubmit(event)}>
// //         <label htmlFor="name">Name:</label>
// //         <input
// //           type="text"
// //           id="name"
// //           name="name"
// //           value={values.name}
// //           onChange={(e) => handleChange(e)}
// //         />

// //         <label htmlFor="email">Email:</label>
// //         <input
// //           type="email"
// //           id="email"
// //           name="email"
// //           value={values.email}
// //           onChange={(e) => handleChange(e)}
// //         />

// //         <label htmlFor="phone">Phone:</label>
// //         <input
// //           type="tel"
// //           id="phone"
// //           name="phone"
// //           value={values.phone}
// //           onChange={(e) => handleChange(e)}
// //         />
        
// //          <br />

// //         <label htmlFor="age">Age:</label>
// //         <input
// //           type="number"
// //           id="age"
// //           name="age"
// //           value={values.age}
// //           onChange={(e) => handleChange(e)}
// //         />
        

// //         <label htmlFor="plan">Plan:</label>
// //         <select id="plan" name="plan" value={values.plan} onChange={(e) => handleChange(e)}>
// //           <option value="basic">Basic</option>
// //           <option value="pro">Pro</option>
// //           <option value="premium">Premium</option>
// //         </select>

// //          <br />

// //         <label htmlFor="message">Message:</label>
// //         <textarea
// //           id="message"
// //           name="message"
// //           value={values.message}
// //           onChange={(e) => handleChange(e)}
// //         ></textarea>

// //         <button type="submit">Send</button>
// //       </form>
// //     </div>
// //   );
// // }
