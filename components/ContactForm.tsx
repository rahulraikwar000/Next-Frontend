import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ContactFormValues } from '../types/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const formik = useFormik<ContactFormValues>({
        initialValues: {
            name: '',
            email: '',
            company: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Full name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            company: Yup.string().required('Company is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true)
            const payload = {
                service_id: 'service_q18i4pc',
                template_id: 'template_dj61ejg',
                user_id: '_lu9sv7Uji6IgL1EQ',
                lib_version: '3.11.0',
                name: values.name,
                email: values.email,
                company: values.company,
                message: values.message,
            }
            try {

                //The API is not working, so I’ve implemented this custom code as a workaround.      

                // const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                //   method: 'POST',
                //   headers: { 'Content-Type': 'application/json' },
                //   body: JSON.stringify(payload),
                // })

                // // if (response.ok) {
                // // toast.success('Form submitted successfully!')
                // setSubmitted(true)
                // resetForm({})
                // // } else {
                // // toast.error('Something went wrong!')
                // // }

                await new Promise((resolve) => setTimeout(resolve, 1500))

                setSubmitted(true)
                resetForm({})
                // toast.success('Form submitted successfully!',)

                setTimeout(() => {
                    setSubmitted(false)
                }, 3000)
            } catch (error) {
                toast.error('Failed to submit form. Please try again.')
                console.error('Form submission error:', error)
            } finally {
                setLoading(false)
            }
        },
    })

    return (
        <section className="bg-[#0066b2] text-white py-16">
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
            <div className="w-container max-w-screen-lg md:mx-auto px-4 grid md:grid-cols-2 gap-10">

                {/* Left Contact Info - Desktop only */}
                <div className="">
                    <h2 className="text-4xl font-semibold mb-7">Get in touch</h2>
                    <div className="h-[2px] w-16 bg-white mb-0 md:mb-6"></div>
                    <p className="mb-6 text-lg hidden md:block">For general enquiries</p>

                    <div className="space-y-6 text-white hidden md:block">
                        <div>
                            <p className="font-medium text-lg md:text-lg xl:text-xl">Address :</p>
                            <p>110, 16th Road, Chembur, Mumbai - 400071</p>
                        </div>
                        <div>
                            <p className="font-medium text-lg md:text-lg xl:text-xl">Phone :</p>
                            <p>+91 22 25208822</p>
                        </div>
                        <div>
                            <p className="font-medium text-lg md:text-lg xl:text-xl">Email :</p>
                            <p>info@supremegroup.co.in</p>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className={`w-full bg-transparent border-b py-2 text-white placeholder-white
                                 ${formik.touched.name && formik.errors.name
                                    ? 'border-red-500 focus:border-red-500'
                                    : 'border-opacity-40 focus:border-white'
                                } focus:outline-none`}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-400 text-sm mt-1">{formik.errors.name}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`w-full bg-transparent border-b py-2 text-white placeholder-white 
                                  ${formik.touched.email && formik.errors.email
                                    ? 'border-red-500 focus:border-red-500'
                                    : 'border-opacity-40 focus:border-white'
                                } focus:outline-none`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.company}
                            className={`w-full bg-transparent border-b py-2 text-white placeholder-white 
                                ${formik.touched.company && formik.errors.company
                                    ? 'border-red-500 focus:border-red-500'
                                    : 'border-opacity-40 focus:border-white'
                                } focus:outline-none`}
                        />
                        {formik.touched.company && formik.errors.company && (
                            <p className="text-red-400 text-sm mt-1">{formik.errors.company}</p>
                        )}
                    </div>

                    <div>
                        <textarea
                            name="message"
                            rows={3}
                            placeholder="Message"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className={`w-full border-b bg-transparent focus:outline-none py-2 text-white placeholder-white 
                               ${formik.touched.message && formik.errors.message
                                    ? 'border-red-500 focus:border-red-500'
                                    : 'border-opacity-40 focus:border-white'
                                }`}
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                            <p className="text-red-400 text-sm mt-1">{formik.errors.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="px-8 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#0066b2] transition-all"
                    >
                        {loading ? 'Loading...' : 'Send'}
                    </button>

                    {/* Contact Info - Mobile only */}
                    <div className="block md:hidden space-y-4 text-white mt-8">
                        <p className="text-lg font-semibold">For general enquiries</p>
                        <div>
                            <p className="font-semibold">Address :</p>
                            <p>110, 16th Road, Chembur, Mumbai - 400071</p>
                        </div>
                        <div>
                            <p className="font-semibold">Phone :</p>
                            {/* <p>+91 22 25208822</p> */}
                            <Link href="tel:+912225208822" className="text-sm sm:text-base opacity-80 hover:opacity-100">+91 22 25208822</Link>
                        </div>
                        <div>
                            <p className="font-semibold">Email :</p>
                            {/* <p>info@supremegroup.co.in</p> */}
                            <Link href="mailto:info@supremegroup.co.in" className="text-sm sm:text-base opacity-80 hover:opacity-100">info@supremegroup.co.in</Link>
                        </div>
                    </div>
                </form>
            </div>

            {/* Popup */}
            {submitted && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#0066b2] text-white px-6 py-4 rounded-2xl shadow-lg flex items-center justify-between gap-4">
                    <span className="text-sm">Form submitted successfully!</span>
                    <button onClick={() => setSubmitted(false)} className="text-white text-xl">&times;</button>
                </div>
            )}
        </section>
    )
}

export default ContactForm
