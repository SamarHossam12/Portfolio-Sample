import './App.css';
import Card from './components/card/card';
import Pbar from './components/Pbar/Pbar';
import Cards from './components/Cards/Card';


function App() {
  return (
    <>
      <div className='container-fuild'>

        <div className="container-fuild" id='c1' >
          <img src="img.jpg" alt="Girl in a jacket" width="100%" ></img>
          <h1 className='txt1' >Samar Hossam</h1>
          <h2 className='txt2'>Web Developer and Designer</h2>
          <button className='btn1'>Contact me</button>
        </div>

        <div className="container-fuild" id='c2' >
          <h1 className="txt3">About me</h1>
          <p className='txt4'>Innovative, Industrious and Inquisitive Computer Science Student Seeking A Summer Internship Position
            With New Challenges To Further Develop My Skills And Learn In A Professional Environment
            In Preparation For The Job Market.
            Your students should produce something like a personal blog or per-project page that's public.
            If they're developers, encourage them to have public code on a site like Github.
            Programmers should contribute to open source and link and document what they've done.
          </p>
          <button className='btn2'>Download Resume</button>
        </div>

        <div className='container-fuild' id='c3'>

          <h1 className="txt5">Skills</h1>
          <div className="row" >
            <div className='col-sm-8'>
              <p className='txt6'>Your students should produce something like a personal blog or per-project page that's public.
                If they're developers, encourage them to have public code on a site like Github.
                Programmers should contribute to open source and link and document what they've done.
              </p>
              <p className='txt7'><u>My Focus</u>
                <ul>
                  <li>ui/ux design</li>
                  <li>responsive design </li>
                  <li>web design </li>
                  <li>mobile app design</li>
                </ul>
              </p>
            </div>
            <div className='col-sm-4'>
              <Pbar />
            </div>
          </div>
        </div>


        <Cards />

        <footer>
          <p>GET IN TOUCH</p>
          <p><a href="mailto:hege@example.com">hege@example.com</a></p>
        </footer>
      </div>
    </>
  );
}

export default App;
