import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup'



const Form = () => {

    

    const [errorMessage, setErrorMessage] = useState('')

    const [validMessage, setValidMessage] = useState('')

    const form = useFormik ({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required("Please enter your name")
                .min(2, "The name must have at least 2 characters"),
            email: Yup.string()
                .required("Please enter your email address")
                .email("Please provide a properly formatted email address"),
            message: Yup.string()
                .required("You need to enter a message")
                .min(5, "The message must have at least 5 characters")
        }),


        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:
                    // alert('Meddelandet har skickats.')
                    setValidMessage('Your message has been sent successfully')
                    console.log('Meddelandet gick iväg')
                    break;
                case 400:
                    setErrorMessage('Something is wrong')
                    break;
                default:
                    setErrorMessage('Your message could not be delivered, please try again')
            }
        }
    })

  

  return (
    <>
        <section className="message">
                <div className="container">
                    <h2>Leave us a message <span>for any information.</span></h2>
                    <form className="registerForm" noValidate onSubmit={form.handleSubmit}>
                        {/* <p className="errorMessage">{errorMessage}</p> */}
                        <div className="input-field">
                            <label className={(form.touched.name && form.errors.name) ? 'error': ''}>{form.touched.name && form.errors.name  ? form.errors.name : ''}</label>
                            <input className="name" type="text" name="name" placeholder="Name*" tabIndex="1" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
                        </div>
                        <div className="input-field">
                            <label className={(form.touched.email && form.errors.email)  ? 'error': ''}>{form.touched.email && form.errors.email  ? form.errors.email : ''}</label>
                            <input className="email" type="email" name="email" placeholder="Email*" tabIndex="2" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                        </div>
                        <div className="input-field">
                            <label className={(form.touched.message && form.errors.message)  ? 'error': ''}>{form.touched.message && form.errors.message ? form.errors.message : ''}</label>
                            <input className="yourMessage" type="text" name="message" placeholder="Your Message*" tabIndex="3" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} />
                        </div>
                        <button className="btn-yellow" type="submit" >Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
                        <p className="validMessage">{validMessage}</p>
                    </form>
                </div>
        </section>
    </>
  )
}

export default Form