import { Routes, Route } from "react-router-dom"
import collab from './assets/collab.jpg';
import './input.css';

function App() {
  return (
    <div className={`min-h-screen`} data-theme='dark'>
      <div className={`fixed top-0 w-screen py-2 z-50`}>
        <div className={`w-4/6 mx-auto navbar rounded-lg bg-neutral px-4 py-4 text-neutral-content`}>
          <div className={`navbar-start`}>
            <button className={`btn btn-ghost text-3xl`}>Projectify</button>
          </div>
          <div className={`navbar-center`}>
            <ul className="menu menu-horizontal px-1">
              <li className={`text-lg`}><a href={`#features`}>Features</a></li>
              <li className={`text-lg mx-2`}><a href={`#mission`}>Our Mission</a></li>
              <li className={`text-lg`}><a href={`#contact`}>Contact</a></li>
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
            <span className={`type-fruit text-accent text-8xl font-bold`}></span>
            <p className={`my-10 w-4/6 text-lg font-light fadeInLeft`}>
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
      <div className={``} id={`features`}>
        <div className={`w-11/12 rounded-xl p-10 mx-auto`}>
          <h2 className={`text-6xl font-bold mb-10 text-center`}>Features</h2>
          <div className={`flex flex-row flex-wrap`}>
            <div className="card w-96 bg-base-100 shadow-xl mr-6 mb-6">
              <figure><img src="https://t4.ftcdn.net/jpg/03/03/55/51/360_F_303555158_0h7YQZePL54n1UFE0Y5u4xqLSvHklqwc.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Feature 1</h2>
                <p>Explanation of feature 1</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mr-6 mb-6">
              <figure><img src="https://t4.ftcdn.net/jpg/03/03/55/51/360_F_303555158_0h7YQZePL54n1UFE0Y5u4xqLSvHklqwc.jpg" alt="Shoes" /></figure>
              <div className="card-body">
              <h2 className="card-title">Feature 2</h2>
                <p>Explanation of feature 2</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mr-6 mb-6">
              <figure><img src="https://t4.ftcdn.net/jpg/03/03/55/51/360_F_303555158_0h7YQZePL54n1UFE0Y5u4xqLSvHklqwc.jpg" alt="Shoes" /></figure>
              <div className="card-body">
              <h2 className="card-title">Feature 2</h2>
                <p>Explanation of feature 2</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mr-6 mb-6">
              <figure><img src="https://t4.ftcdn.net/jpg/03/03/55/51/360_F_303555158_0h7YQZePL54n1UFE0Y5u4xqLSvHklqwc.jpg" alt="Shoes" /></figure>
              <div className="card-body">
              <h2 className="card-title">Feature 2</h2>
                <p>Explanation of feature 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={``} id={`mission`}>
        <div className={`w-11/12 p-10 rounded-xl mx-auto`}>
          <h2 className={`text-6xl font-bold mb-10 text-center`}>Our Mission</h2>
          <p className={`text-xl font-thin text-white leading-relaxed w-4/6 mx-auto tracking-wide text-center`}>At Projectify, we aim to support all JavaScript developers in their scaffolding, storing, hosting, and project management needs. Our extensive application tools allow teams to collaborate easily while acomplishing their project needs and checking statuses like a breeze.</p>
        </div>
      </div>
      <div className={``} id={`contact`}>
        <div className={`w-11/12 p-10 rounded-xl mx-auto`}>
          <h2 className={`text-6xl font-bold mb-10 text-center`}>Contact Us</h2>
          <div className={`p-5 rounded-xl shadow-xl w-2/6 mx-auto bg-neutral text-neutral-content`}>
            <div id={`names`} className={`flex justify-between flex-row`}>
              <label className="form-control w-[49%]">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input type="text" placeholder="Enter your first name" className="input input-bordered input-lg w-full" />
              </label>
              <label className="form-control w-[49%]">
                <div className="label">
                  <span className="label-text">Last Name</span>
                  <span className="label-text-alt"><div className="badge badge-info gap-2 badge-outline">Optional</div></span>
                </div>
                <input type="text" placeholder="Enter your last name" className="input input-bordered input-lg w-full" />
              </label>
            </div>
            <div className={`w-full`}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input type="text" placeholder="Enter your email" className="input input-bordered input-lg w-full" />
              </label>
            </div>
            <div className={`w-full`}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Message</span>
                </div>
                <textarea className="textarea textarea-bordered h-24 textarea-lg" placeholder="Enter your message"></textarea>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
