import { MUI_C } from "../lib/materialUI";
import { useState } from 'react';
import "../assets/css/Contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <MUI_C.Box>
      <MUI_C.Container className="ContactForm">
        <MUI_C.Grid container spacing={2}>
          <MUI_C.Grid item xs={12} sm={6}>
            <img src=""/>
          </MUI_C.Grid>
          <MUI_C.Grid item xs={12} sm={6} className="ContactContainer_one">
            <MUI_C.Typography variant="h4" gutterBottom>
              Get In Touch With Me
            </MUI_C.Typography>
            <form onSubmit={handleSubmit}>
              <MUI_C.TextField
                label="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
             
              />
              <MUI_C.TextField
                label="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
             
              />
              <MUI_C.TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
    
              />
              <MUI_C.TextField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
              <MUI_C.TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
               
              />
              <MUI_C.Button type="submit" variant="contained" color="primary">
                Submit
              </MUI_C.Button>
            </form>
          </MUI_C.Grid>
        </MUI_C.Grid>
      </MUI_C.Container>
    </MUI_C.Box>
  );
}
