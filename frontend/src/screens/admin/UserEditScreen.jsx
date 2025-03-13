import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from "react-bootstrap"
import Messagge from "../../components/Message"
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'
import FormContainer from '../../components/FormContainer'
import { useParams } from 'react-router-dom'
import { 
  useGetUserDetailsQuery, 
  useUpdateUserMutation
} from '../../slices/usersApiSlice'



const UserEditScreen = () => {
  const { id: userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[isAdmin, setIsAdmin] = useState(false);

  const { data: user, isLoading, refetch, error } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin })
      toast.success('user updated successfully!');
      refetch();
      navigate('/admin/userlist')
    } catch (err) {
      toast.err(error?.data?.message || error.error)
    }
  }


  useEffect(() => {
    if(user){
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user])
  
  return (
    <>
      <Link to= '/admin/userlist' className='btn btn-light my-3'>
       Go Back
      </Link>
      <FormContainer>
        <h1 style={{marginTop: '3rem'}}>Edit User</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Messagge variant='danger'>{error?.data?.message || error.error}</Messagge>
        ) : (
          <Form onSubmit={submitHandler}>
              <Form.Group className='my-2' controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='name'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen
