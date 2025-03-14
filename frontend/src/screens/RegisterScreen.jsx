
import { useState, useEffect } from 'react'
import {Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';


const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading, isSuccess, isError }] = useRegisterMutation();

  // const { userInfo }  = useSelector((state) => state.auth?.userInfo || {});
  // const { userInfo } = useSelector((state) => state.auth.userInfo);
const authState = useSelector((state) => state.auth);
const userInfo = authState ? authState.userInfo : null;


  const search = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  } , [navigate, userInfo, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error("password does not match")
      return;
    }else{
      try {
        const res = await register({name, email, password }).unwrap();
        dispatch(setCredentials({...res, }));
        navigate("/")
      }
      catch (err) {
        toast.error(err?.data?.message || err.error);
      } 
    }
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success("Register Successfully!");
    }
  }, [isError, isSuccess]);
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='name' className='my-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword' className='my-3'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-2' disabled = {isLoading}>{isLoading ? 'Registering...' : 'Register'}</Button>
        {isLoading && <Loader />}
      </Form>
      <Row className='py-3'>
        <Col>
          Already have an Account? {' '}<Link to= {redirect ? `/login?redirect=${redirect}` : '/login'} >login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}
export default RegisterScreen
