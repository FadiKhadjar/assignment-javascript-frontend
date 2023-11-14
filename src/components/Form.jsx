import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'



const Form = () => {

    const [errorMessage, setErrorMessage] = useState('')

    const form = useFormik ({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        onSubmit: async (values) => {
            const result = await fetch('', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 201:
                    alert('Meddelandet har skickats.')
                    break;
                case 400:
                    setErrorMessage('Något gick fel.')
                    break;
                case 409:
                    setErrorMessage('En annan användare med sammma e-post finns redan.')
                    break;

            }
        }
    })


  return (
    <>
        <section className="message">
                <div className="container">
                    <h2>Leave us a message <span>for any information.</span></h2>
                    <form className="registerForm" noValidate onSubmit={form.handleSubmit}>
                        <p className="errorMessage">{errorMessage}</p>
                        <div className="input-field">
                            <input className="name" type="text" name="name" placeholder="Name*" tabIndex="1" value={form.values.name} onChange={form.handleChange}/>
                        </div>
                        <div className="input-field">
                            <input className="email" type="email" name="email" placeholder="Email*" tabIndex="2" value={form.values.email} onChange={form.handleChange} />
                        </div>
                        <div className="input-field">
                            <input className="yourMessage" type="text" name="message" placeholder="Your Message*" tabIndex="3" value={form.values.message} onChange={form.handleChange} />
                        </div>
                        <button className="btn-yellow" type="submit" >Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
                    </form>
                </div>
        </section>
    </>
  )
}

export default Form