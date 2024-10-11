import educationRef from './Navbar.js';

function Education() {
  return (
    <div id="education" className="brat" ref={{educationRef}}>
      <h1>Education</h1>
      <table>
        <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td>BSc(Hons) Computer Science</td>
            <td>University of the West of England</td>
            <td>2021-2024</td>
            <td>1:1</td>
        </tr>
        <tr>
            <td>BEng Mechatronics (Unfinished)</td>
            <td>Yangon Technological University</td>
            <td>2018-2020</td>
            <td>GPA 3.6</td>
        </tr>
        <tr>
            <td>Matriculation Mathematics</td>
            <td>Basic Education High School No. 2 Latha</td>
            <td>2018</td>
            <td>85</td>
        </tr>
        <tr>
            <td>Matriculation Chemistry</td>
            <td>Basic Education High School No. 2 Latha</td>
            <td>2018</td>
            <td>97</td>
        </tr>
        <tr>
            <td>Matriculation Physics</td>
            <td>Basic Education High School No. 2 Latha</td>
            <td>2018</td>
            <td>86</td>
        </tr>
        <tr>
            <td>Matriculation Biology</td>
            <td>Basic Education High School No. 2 Latha</td>
            <td>2018</td>
            <td>95</td>
        </tr>
      </table>
      <div className="Row">
        <div class="col">
           <h2>Relevant Modules</h2>
            <ul>
                <li>Autonomous Agents and Multi-agent Systems</li>
                <li>Machine Learning</li>
                <li>Advanced Artificial Intelligence</li>
                <li>Security Data Analytics and Visualisation</li>
                <li>Web Development and Databases</li>
                <li>Operating Systems</li>
                <li>Computer Systems Architecture</li>
                <li>Distributed and Enterprise Software Development</li>
                <li>Advanced Software Development</li>
            </ul> 
        </div>
        <div class="col">
            <h2>Notable Awards</h2>
            <ul>
                <li>Dean's List (UWE)</li>
                <li>Distinction in all subjects (Matriculation)</li>
            </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Education;