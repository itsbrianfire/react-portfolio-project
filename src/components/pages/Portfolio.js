import React from 'react';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Pages.css';
// import Card from 'bootstrap/dist/css/bootstrap.min.css';
// import CodingQuiz from 'components/images/CodingQuiz';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CodingQuiz from '../images/CodingQuiz.png';
import SocialNetworkAPI from '../images/SocialNetworkAPI.png';
import PWATextEditor from '../images/PWATextEditor.png';
import ORMeCommerce from '../images/ORM-eCommerce.png';
import EmployeeTracker from '../images/EmployeeTracker.png';
import READMEgenerator from '../images/READMEgenerator.png';


export default function Portfolio() {
  return (
    <React.Fragment className="d-flex flex-column min-vh-100">

      <div>
        <h1>Portfolio</h1>
        <p>
          Here are a few of the projects I have worked on independently at my time
          with the Georgia Tech Full Stack Web Development Bootcamp. 👨‍💻 If you have any 
          inquiries about my work, please feel free to message me in the contact page,
          or drop a DM to my LinkedIn. Thanks for stopping by! 👋
        </p>
      </div>

      <CardGroup>

        <Card rounded border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={CodingQuiz} rounded height={400} width="100%"/>
          <Card.Body>
            <Card.Title>Web APIs: History Quiz</Card.Title>
            <Card.Text>
              <a href="https://github.com/itsbrianfire/code-quiz-us-history" target="_blank">Access GitHub Repository Here</a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Uses HTML and CSS, powered by JavaScript Web APIs</small>
          </Card.Footer>
        </Card>

        <Card rounded border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={SocialNetworkAPI} rounded height={400} width="100%"/>
          <Card.Body>
            <Card.Title>NoSQL: Social Network API</Card.Title>
            <Card.Text>
              <a href="https://github.com/itsbrianfire/social-network-api" target="_blank">Access GitHub Repository Here</a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Uses Express.js, MongoDB, Mongoose ODM, and Moment.js</small>
          </Card.Footer>
        </Card>

        <Card rounded border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={PWATextEditor} rounded height={400} width="100%"/>
          <Card.Body>
            <Card.Title>Progessive Web App: Text Editor</Card.Title>
            <Card.Text>
              <a href="https://github.com/itsbrianfire/pwa-text-editor" target="_blank">Access GitHub Repository Here</a>  
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Use node.js, Express.js, and Webpack in JSON</small>
          </Card.Footer>
        </Card>

      </CardGroup>

      <CardGroup>

        <Card rounded border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ORMeCommerce} rounded height={400} width="100%"/>
          <Card.Body>
            <Card.Title>Object-Relational Mapping: eCommerce Back End</Card.Title>
            <Card.Text>
              <a href="https://github.com/itsbrianfire/ecommerce-back-end" target="_blank">Access GitHub Repository Here</a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Uses Express.js, SQL, and Sequelize</small>
          </Card.Footer>
        </Card>

        <Card rounded border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={EmployeeTracker} rounded height={400} width="100%"/>
          <Card.Body>
            <Card.Title>SQL: Employee Tracker</Card.Title>
            <Card.Text>
              <a href="https://github.com/itsbrianfire/employee-tracker" target="_blank">Access GitHub Repository Here</a>  
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Uses SQL, fs, inquirer and console.table</small>
          </Card.Footer>
        </Card>

        <Card rounded border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={READMEgenerator} rounded height={400} width="100%"/>
          <Card.Body>
            <Card.Title>Node.js: README Generator</Card.Title>
            <Card.Text>
              <a href="https://github.com/itsbrianfire/homework-9-readme-generator" target="_blank">Access GitHub Repository Here</a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Uses node.js and inquirer</small>
          </Card.Footer>
        </Card>

      </CardGroup>


    </React.Fragment>
  );
}
