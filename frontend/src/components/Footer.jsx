import React from 'react';
import { Button, Form, Col, Row} from 'react-bootstrap'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaApple, FaAndroid } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white py-2">
        <Row className='ms-auto py-2' style={{backgroundColor: '#2e2e2e'}}>
           <Col className='d-flex' md={6}>
            <Col className="d-flex flex-row">
              <div className="d-flex justify-content-center align-items-center mb-2">
                <FaEnvelope size={25} style={{backgroundColor: 'white', color: 'black', borderRadius: '50%', padding: '0.2rem'}} />
              </div>
              <div>
                <p><strong>Email Support:</strong></p>
                <p><a href="mailto:help@winkshop.com" className="text-white">help@winkshop.com</a></p>
              </div>
            </Col>

            <Col className="d-flex flex-row">
              <div className="d-flex justify-content-center align-items-center mb-2">
                <FaPhoneAlt size={25} style={{backgroundColor: 'white', color: 'black', borderRadius: '50%', padding: '0.2rem'}} />
              </div>
              <div>
                <p><strong>Phone Support:</strong></p>
                <p><Link href="tel:+2348128331807" className="text-white">07080635700</Link>, <a href="tel:+234200000000" className="text-white">0200000000000</a></p>
              </div>
            </Col>

            <Col className="d-flex flex-row">
              <div className="d-flex justify-content-center align-items-center mb-2">
                <FaWhatsapp size={25} style={{backgroundColor: 'white', color: 'black', borderRadius: '50%', padding: '0.2rem'}} />
              </div>
              <div>
                <p><strong>Whatsapp:</strong></p>
                <p><Link href="https://wa.me/2349068000322" className="text-white">09068000322</Link>, <Link href="https://wa.me/2349068000322" className="text-white">09068000322</Link></p>
              </div>
            </Col>

          </Col>

          <Col className='d-flex' md={6}>
            <Col>
            <h4>Get Latest Deals</h4>
            <p>Our best promotions sent to your inbox.</p>
            </Col>

            <Col>
              <Form className="d-flex">
                <Form.Group controlId="email" className="mb-0 mr-2">
                    <Form.Label className="sr-only">Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button 
                className="mt-4" 
                variant="outline" 
                type="submit" 
                style={{backgroundColor: '#ed017f', color: 'white', width: '30%' }}>
                  Subscribe
              </Button>
            </Form>
            </Col>
          </Col>
        </Row>

        <Row className='ms-auto py-2' style={{backgroundColor: '#0c0c0c'}}>
          <Col md={2}>
            <h4>About Winkshop</h4>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white">Contact Us</Link></li>
              <li><Link href="#" className="text-white">About Us</Link></li>
              <li><Link href="#" className="text-white">Our Blog</Link></li>
              <li><Link href="#" className="text-white">Forum</Link></li>
              <li><Link href="#" className="text-white">Terms & Conditions</Link></li>
            </ul>
          </Col>

          <Col md={2}>
            <h4>Payment</h4>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white">Wallet</Link></li>
              <li><Link href="#" className="text-white">Verve</Link></li>
              <li><Link href="#" className="text-white">Mastercard</Link></li>
              <li><Link href="#" className="text-white">Visa</Link></li>
            </ul>
          </Col>

          <Col md={2}>
            <h4>More Info</h4>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white">FAQs</Link></li>
              <li><Link href="#" className="text-white">Delivery</Link></li>
              <li><Link href="#" className="text-white">Winkshop Return Policy</Link></li>
              <li><Link href="#" className="text-white">Site Map</Link></li>
              <li><Link href="#" className="text-white">Track My Order</Link></li>
              <li><Link href="#" className="text-white">Privacy Policy</Link></li>
            </ul>
          </Col>

          <Col md={2}>
            <h5>MAKE MONEY ON WINKSHOP</h5>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white">Become a Winkshop Affiliate</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h4>Download on</h4>
            <Row>
            <Col className='d-flex flex-row' style={{backgroundColor: 'black', flexGrow: '1', flexShrink: '1', maxWidth: '40%',
    padding: '0px 6px', borderRadius: '5px', marginRight: '1rem', }}>
              <div className="d-flex justify-content-center align-items-center mb-2" style={{ marginRight: '10px'}}>
                <FaApple size={30} style={{backgroundColor: 'white', color: 'black', borderRadius: '50%', padding: '0.2rem'}} />
              </div>
              <div>
                <p className="mb-0"><strong>Download On</strong></p>
                <p className="mb-0"><a href="mailto:help@winkshop.com" className="text-white">App Store</a></p>
              </div>
            </Col>

            <Col className='d-flex flex-row' style={{backgroundColor: 'black', flexGrow: '1', flexShrink: '1',
maxWidth: '40%',
    padding: '0px 6px', borderRadius: '5px'}}>
              <div className="d-flex justify-content-center align-items-center mb-2" style={{ marginRight: '10px' }}>
                <FaAndroid size={30} style={{backgroundColor: 'white', color: 'black', borderRadius: '50%', padding: '0.2rem'}} />
              </div>
              <div>
                <p className="mb-0"><strong>Download On</strong></p>
                <p className="mb-0"><a href="mailto:help@winkshop.com" className="text-white">Google Play</a></p>
              </div>
            </Col>
            </Row>

            <Row>
            <Col>
            <h4 style={{marginTop: '10px'}}>CONNECT WITH US</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px'}}>
            <span><FaFacebook size={30} /></span>
            <span><FaInstagram size={30} /></span>
            <span><FaTwitter size={30} /></span>
            <span><FaYoutube size={30} /></span>
            </div>
          </Col>
            </Row>

          </Col>
        </Row>


        <Row style={{backgroundColor: '#0c0c0c'}}>
          <Col className='text-center mb-4'>
          <hr />
            <p>Winkshop &copy; {currentYear}; All right reserved</p>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;
