import { Routes, Route } from "react-router-dom"
import collab from './assets/collab.jpg';

function App() {
  return (
    <div className={`min-h-screen`} data-theme='dark'>
      <div className={`fixed top-0 w-screen py-2`}>
        <div className={`w-4/6 mx-auto navbar rounded-lg bg-neutral px-4 py-4 text-neutral-content`}>
          <div className={`navbar-start`}>
            <button className={`btn btn-ghost text-3xl`}>Projectify</button>
          </div>
          <div className={`navbar-center`}>
            <ul className="menu menu-horizontal px-1">
              <li className={`text-lg`}><a>Features</a></li>
              <li className={`text-lg mx-2`}><a>Our Mission</a></li>
              <li className={`text-lg`}><a>Contact</a></li>
            </ul>
          </div>
          <div className={`navbar-end`}>
            <button className={`btn btn-primary btn-outline mr-2 text-lg`}>Login</button>
            <button className={`btn btn-primary text-lg`}>Register</button>
          </div>
        </div>
      </div>
      <div className={`min-h-screen flex justify-center items-center`}>
        <div className={`w-11/12 rounded-xl p-10 flex flex-row items-center`}>
          <div className={`w-1/2`}>
            <span className={`type-fruit text-accent text-9xl font-bold`}></span>
            <p className={`my-10 w-4/6 text-lg font-light`}>
              At Projectify, we make it easy for developers to start new projects. With easy collaboration, storage, scaffolding, and more, developers
              can easily work on projects and complete them on time for the public.
            </p>
            <div>
              <button className={`btn btn-accent text-lg`}>Start Creating Today</button>
            </div>
          </div>
          <div className={`w-1/2 justify-center items-center flex`}>
            <img src={collab} alt="Collaboration" className={`rounded-xl w-11/12 h-auto`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
