import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').optional(),
    companyName: Yup.string().required("Company Name is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phoneNumber:"",
        companyName: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form data:", values);
        setSubmitting(false);
      }}>
      {({ isSubmitting, isValid, dirty }) => (
        <form name="contact" className="contact form" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <h3>Send a Message:</h3>
          <div className="formBox">
            <div className="row50">
              <div className="inputBox">
                <label htmlFor="name">Name <span style={{color:"orangered"}}>*</span></label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="inputBox">
                <label htmlFor="email">Email <span style={{color:"orangered"}}>*</span></label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="row50">
              <div className="inputBox">
                <label htmlFor="jobRole">Phone Number</label>
                <Field type="text" name="phoneNumber" id="phoneNumber" />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="inputBox">
                <label htmlFor="companyName">Company Name <span style={{color:"orangered"}}>*</span></label>
                <Field type="text" name="companyName" id="companyName" />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>

            <div className="row100">
              <div className="inputBox">
                <label htmlFor="message">Message <span style={{color:"orangered"}}>*</span></label>
                <Field as="textarea" name="message" id="message" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>

            <div className="row100">
              <div className="inputBox">
                <input
                  name="submit"
                  type="submit"
                  value="Send"
                  disabled={isSubmitting || !(isValid && dirty)}
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default ContactForm;
