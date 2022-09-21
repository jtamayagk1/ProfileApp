import awsPractioner from './Images/aws-certified-cloud-practitioner.png';
import awsDeveloper from './Images/aws-certified-developer-associate.png';
import ms365 from './Images/microsoft-365-certified-fundamentals.png';
import azure from './Images/microsoft-certified-azure-fundamentals.png';
import scrumDev from './Images/professional-scrum-developer.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul class="navbar">
            <li class="navItem"><a href="work.html" class="navLink">Work</a></li>
            <li class="navItem"><a href="contact.html" class="navLink">Contact</a></li>
            <li class="navItem"><a href="index.html" class="navLink active">Home</a></li>
        </ul>
        <div class="titleContainer">
        </div>
            <h1>Jonathan Amaya</h1>
        <div class="aboutContainer section">
            <h3>Application Developer</h3>
            <p>I am an application developer at SoftwareONE. </p>
            <a href="">Contact Me</a>
        </div>
        <div class="certContainer section">
            <h3>Certifications</h3>
            <div>
                <a href="https://www.credly.com/badges/56dd2c6b-9747-487d-92aa-133bd1a0e910/public_url">
                  <img src={awsPractioner} alt="AWS Cloud Practitioner"/>
                </a>
                <a href="https://www.credly.com/badges/87e4a5b7-8cc6-40be-8fa4-88d71d33afb8/public_url">
                  <img src={awsDeveloper} alt="AWS Associate Developer"/>
                </a>
                <a href="https://www.credly.com/badges/0033b2ff-d195-4bcc-a74c-f778d92b7554/public_ur">
                  <img src={azure} alt="Microsoft Azure Fundamentals"/>
                </a>
                <a href="https://www.credly.com/badges/05beb4d4-7911-4e7c-9929-89e6b8a72b96/public_url">
                  <img src={scrumDev} alt="Professional Scrum Developer"/>
                </a>
                <a href="https://www.credly.com/badges/45c7002d-c230-4711-bb03-e79ad8446c51/public_url">
                  <img src={ms365} alt="Microsoft 365 Fundamentals"/>
                </a>
            </div>
        </div>
        <div class="expContainer section">
            <h3>Work Experience</h3>
            <table class="workExpTable">
                <thead>
                    <th>Date</th>
                    <th>Company</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    <tr class="workExpRow">
                        <td>02/2022 - Current</td>
                        <td>SoftwareONE</td>
                        <td>Join the academy in February and worked on the Skills Matrix application</td>
                    </tr>
                    <tr class="workExpRow">
                        <td>07/2018 - Current</td>
                        <td>GSA</td>
                        <td>Work in the concession stand</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="skillsContainer section">
            <h3>Skills</h3>
            <table>
                <tr>
                    <td>
                        <table>
                            <tr class="skillItem">
                                <td>AWS Development</td>
                                <td>⭐⭐⭐⭐</td>
                            </tr>
                            <tr class="skillItem">
                                <td>Java</td>
                                <td>⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr class="skillItem">
                                <td>React</td>
                                <td>⭐⭐⭐</td>
                            </tr>
                            <tr class="skillItem">
                                <td>JavaScript</td>
                                <td>⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default App;
