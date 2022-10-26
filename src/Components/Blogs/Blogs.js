import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
             <Accordion className='container mt-5 mb-5 pb-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>   
The HTTP-based security feature known as Cross-Origin Resource Sharing (CORS) is managed and enforced by the client (web browser). It enables an API to identify any source other than its own from which a client may request resources. The same-origin policy (SOP), which limits how a website (HTML document or JS script) loaded from one origin can interact with a resource from another origin, prompted the creation of this solution. Some cross-origin requests are explicitly allowed with CORS while others are rejected.
CORS is generally utilized in web browsers, although API clients also have the ability to use it. All widely used online browsers, including Google Chrome, Firefox, Opera, and Safari, have it.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
          <Accordion.Body>
          <li>A service offered by Firebase called "Firebase Authentication" aids in the development of user authentication systems for mobile and web applications. It includes the fundamental password-reset, sign-up, logout, and other lifecycle methods.Additionally, Firebase has the option to quickly and easily integrate your social oauth logins.</li>
          <li>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</li>

v
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
          The only differences between the private route component and the public route are the redirect URL and the authenticate condition. The user can only access the authenticated routes if they are authenticated, otherwise else they will be sent to the login page. If he has been verified (Logged in)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
          An open-source backend runtime environment for javascript is node.js. It serves as a backend service for applications that use javascript on the server. Javascript is utilized in this fashion for both the front end and the back end. Node.js is extremely scalable, light, quick, and data-intensive. It uses the Chrome v8 engine, which turns javascript code into machine code. Node.js's functionality is as follows: Node.js accepts requests from clients and responds to them, handling requests in a single thread. Node.js uses the idea of threads to manage requests or I/O activities. A thread is a set of operations that the server must carry out. In order to deliver the information to numerous clients, it runs concurrently on the server. An event loop single-threaded language is Node.js. Without blocking it for a single request, it may manage several requests in a single thread.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
    );
};

export default Blogs;
