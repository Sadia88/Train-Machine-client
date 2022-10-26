import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion className='container mt-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are the technical requirements for the courses?</Accordion.Header>
          <Accordion.Body>
          You can use a mobile device to complete the Beginner lessons, but a computer is required to complete the Intermediate and Advanced level programming exercises. There is no need to install anything on the computer; all the programming tasks can be completed in the browser. The course does not function properly with Internet Explorer or Safari on earlier iPad models.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Which payment methods are available for these courses?</Accordion.Header>
          <Accordion.Body>
          You can use BKash, Nagad, Rocket for the Building AI course. 
          In India, you also have the options to use Visa or MasterCard.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Are there video lectures or other things tied to a place or time?</Accordion.Header>
          <Accordion.Body>
          No, all of the content, which is made up of text and references to other websites, is available on the website. The course is accessible from anywhere at any time.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default FAQ;