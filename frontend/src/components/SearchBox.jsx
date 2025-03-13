import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';



const SearchBox = () => {

  
  const { keyword: urlKeyword } = useParams();
  
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }

  }
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
      type='text'
      name='q'
      onChange={(e) => setKeyword(e.target.value)}
      value={keyword}
       placeholder='Search Products...'
        className="mr-sm-2 ml-sm-5 col-md-8"
      ></Form.Control>
      <Button 
      type='submit' 
      variant='outline-success' 
      className="p-2 mx-2"
      style={{ borderColor: 'white', color: 'white' }}
      >
        search
      </Button>
    </Form>
  )
}

export default SearchBox
