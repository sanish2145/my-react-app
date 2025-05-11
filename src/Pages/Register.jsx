import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ToastContainer,toast } from 'react-toastify'
import * as Yup from 'yup'

const Register = () => {

    const postFormData =async (values)=>{
       try {
         await axios.post("https://blog-hqx2.onrender.com/user/register", values);

            toast.success("User Register sucessfully");
            
          
             
       } catch (error) {
          toast.error("user register failed");
          console.log(error)
       }

        
    }
  return (
    <div className='flex flex-col min-h-screen w-full justify-center items-center'>
        <h1 className='text-xl'>Register user</h1>
    <div className='flex  w-[250px]   items-center bg-white shadow-2xl rounded-xl p-4 justify-center'>
    <Formik initialValues={{name:'', email: '', password: ''}} validationSchema={
        Yup.object({
            name: Yup.string().min(3, "Minimum 3 characters").required("Username is required."),
            email: Yup.string().email().required("This field is required."),
            password: Yup.string().min(8, "Minimum 8 characters required").required("Password is required.")
        })
    } 
    onSubmit={(values)=> {
         postFormData(values)
    }}
    >
        <Form className='w-full flex flex-col gap-2'>
            <label htmlFor='name'>Username</label>
            <Field name="name" type="text" className="pl-4 border outline-none rounded-2xl"/>
            <ErrorMessage name="name" component={"div"} className='text-red-500 text-sm'/>
            
            <label htmlFor='email'>Email</label>
            <Field name="email" type="text" className="border pl-4 outline-none rounded-2xl"/>
            <ErrorMessage name="email"  component={"div"}  className='text-sm text-red-500'/>
            
            <label htmlFor='password'>Password</label>
            <Field name="password" type="passwrod" className="border pl-4 outline-none rounded-2xl"/>
            <ErrorMessage name="password"  component={"div"} className='text-sm text-red-500'/>
           <div className='flex justify-center w-full'>
           <ToastContainer />
             <button type="submit" className='flex w-full hover:bg-blue-700 justify-center bg-blue-500 p-2 text-sm text-white rounded-lg mt-4'>submit</button>
           </div>
        </Form>
    </Formik>        
    </div>
    </div>

  )
}

export default Register