import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    jobRole: Yup.string().required('Job Role is required'),
    companyName: Yup.string().required('Company Name is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        jobRole: '',
        companyName: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Netlify Forms will handle the form submission automatically.
        // You don't need to use Axios or custom serverless functions for this setup.
        console.log('Form data:', values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <form
          netlify
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contact form"
          method="post"
        >
          <h3>Send a Message:</h3>
          <div className="formBox">
            <div className="row50">
              <div className="inputBox">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div className="inputBox">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
            </div>
            <div className="row50">
              <div className="inputBox">
                <label htmlFor="jobRole">Job Role</label>
                <Field type="text" name="jobRole" id="jobRole" />
                <ErrorMessage name="jobRole" component="div" className="error-message" />
              </div>

              <div className="inputBox">
                <label htmlFor="companyName">Company Name</label>
                <Field type="text" name="companyName" id="companyName" />
                <ErrorMessage name="companyName" component="div" className="error-message" />
              </div>
            </div>

            <div className="row100">
              <div className="inputBox">
                <label htmlFor="message">Message</label>
                <Field as="textarea" name="message" id="message" />
                <ErrorMessage name="message" component="div" className="error-message" />
              </div>
            </div>

            <div className="row100">
              <div className="inputBox">
                <input name="submit" type="submit" disabled={isSubmitting} value="Send" />
              </div>
            </div>
          </div>

        </form>
      )}
    </Formik>
  );
}

export default ContactForm;
