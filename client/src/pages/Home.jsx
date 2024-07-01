import { Routes, Route, useNavigate } from "react-router-dom"
import collab from '../assets/collab.jpg';
import { useState, useEffect } from "react";

export default function Home() {
    const navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className={`min-h-screen`}>
      <div id={`navbar`} className={`top-0 py-2 z-50 bg-neutral border-b-2 border-gray-500 transition-all duration-300`}>
        <div className={`w-4/6 md:w-full md:flex lg:w-4/6 lg:flex sm:hidden mx-auto navbar rounded-lg bg-neutral px-4 py-4 text-neutral-content`}>
          <div className={`navbar-start`}>
            <button className={`btn btn-ghost text-3xl`}>Projectify</button>
          </div>
          <div className={`navbar-center`}>
            <ul className="menu menu-horizontal px-1 flex items-center">
              <li className={`text-lg`}><a href={`#mission`}>Our Mission</a></li>
              <div className="dropdown mx-auto">
                <div tabIndex={0} className={`text-lg btn btn-ghost font-normal`}>Services</div>
                <div className={`dropdown-content z-[1] p-4 shadow bg-base-100 rounded-box mt-2 w-[500px]`}>
                  <table className={`table table-auto w-full`}>
                    <tr>
                      <td><a className={`cursor-pointer hover:underline text-gray-400 text-lg`}>Project Management</a></td>
                      <td className={`cursor-pointer hover:underline text-gray-400 text-lg`}>Collaboration</td>
                    </tr>
                    <tr>
                      <td className={`cursor-pointer hover:underline text-gray-400 text-lg`}>Storage</td>
                      <td className={`cursor-pointer hover:underline text-gray-400 text-lg`}>Project Scaffolding</td>
                    </tr>
                    <tr>
                      <td className={`cursor-pointer hover:underline text-gray-400 text-lg`}>Time Management</td>
                      <td className={`cursor-pointer hover:underline text-gray-400 text-lg`}>Organization Control</td>
                    </tr>
                  </table>
                </div>
              </div>
              <li className={`text-lg mr-2`}><a href={`#pricing`}>Pricing</a></li>
              <li className={`text-lg`}><a href={`#contact`}>Contact</a></li>
            </ul>
          </div>
          <div className={`navbar-end`}>
            <button className={`btn btn-primary btn-outline mr-2 text-lg`} onClick={() => navigate('/login', { replace: true })}>Login</button>
            <button className={`btn btn-primary text-lg`} onClick={() => navigate('/register', { replace: true })}>Register</button>
          </div>
        </div>
      </div>
      <div className={`flex justify-center items-center`}>
        <div className={`w-11/12 rounded-xl p-10 flex flex-row items-center`}>
          <div className={`w-1/2`}>
            <span className={`type-fruit text-accent text-8xl font-bold`}></span>
            <p className={`my-10 w-4/6 text-lg font-light fadeInLeft`}>
              At Projectify, we make it easy for developers to start new projects. With easy collaboration, storage, scaffolding, and more, developers
              can easily work on projects and complete them on time for the public. React has never been easier.
            </p>
            <div>
              <button className={`btn btn-accent text-lg`} onClick={() => navigate('/register', { replace: true })}>Start Creating Today</button>
            </div>
          </div>
          <div className={`w-1/2 justify-center items-center flex`}>
            <img src={collab} alt="Collaboration" className={`rounded-xl w-11/12 h-auto`}/>
          </div>
        </div>
      </div>
      <div className={``} id={`mission`}>
        <div className={`w-11/12 p-10 rounded-xl mx-auto`}>
          <h2 className={`text-6xl font-bold mb-10 text-center`}>Our Mission</h2>
          <p className={`text-xl font-thin text-white leading-relaxed w-4/6 mx-auto tracking-wide text-center`}>At Projectify, we aim to support all React developers in their scaffolding, storing, hosting, and project management needs. Our extensive application tools allow teams to collaborate easily while acomplishing their project needs and checking statuses like a breeze.</p>
        </div>
      </div>
      <div className={``} id={`pricing`}>
        <div className={`w-11/12 p-10 rounded-xl mx-auto`}>
          <h2 className={`text-6xl font-bold mb-10 text-center`}>Pricing</h2>
          <div className={`p-5 flex items-center justify-between`}>
            <div className={`w-[30%] p-5 border-gray-500 rounded-lg border-2 flex flex-col justify-center`}>
              <h3 className={`text-2xl font-bold text-center`}>Basic</h3>
              <p className={`text-xl font-normal text-center my-4 text-gray-400`}>Best used for personal use and/or small group projects.</p>
              <h3 className={`text-3xl font-bold text-center mb-4`}>$0/month</h3>
              <ul className={`list-inside`}>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>2 GB of Storage per Project</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Up to 5 Projects</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>1 Team of up to 10 people</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>3 Domains for Hosting</span>
                </li>
              </ul>
              <button className={`mx-auto text-lg px-6 py-1 btn btn-primary mt-6 font-normal`}>Get Started</button>
            </div>
            <div className={`w-[30%] p-5 border-gray-500 rounded-lg border-2 flex flex-col justify-center`}>
              <h3 className={`text-2xl font-bold text-center`}>Pro</h3>
              <p className={`text-xl font-normal text-center my-4 text-gray-400`}>Best used for large teams and many projects</p>
              <h3 className={`text-3xl font-bold text-center mb-4`}>$2/month</h3>
              <ul className={`list-inside`}>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>10 GB of Storage per Project</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Unlimited Projects</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>1 Team of up to 50 people</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Organizations</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>10 Domains for Hosting</span>
                </li>
              </ul>
              <button className={`mx-auto text-lg px-6 py-1 btn btn-primary mt-6 font-normal`}>Get Started</button>
            </div>
            <div className={`w-[30%] p-5 border-gray-500 rounded-lg border-2 flex flex-col justify-center`}>
              <h3 className={`text-2xl font-bold text-center`}>Enterprise</h3>
              <p className={`text-xl font-normal text-center my-4 text-gray-400`}>Best used for large organizations with special needs.</p>
              <h3 className={`text-3xl font-bold text-center mb-4`}>Contact us for Pricing</h3>
              <ul className={`list-inside`}>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Custom Storage per Project</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Unlimited Projects</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>10 Team of up to 100 people</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Organizations</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Unlimited Domains for Hosting</span>
                </li>
              </ul>
              <button className={`mx-auto text-lg px-6 py-1 btn btn-primary mt-6 font-normal`}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className={``} id={`contact`}>
        <div className={`w-11/12 p-10 rounded-xl mx-auto`}>
          <h2 className={`text-6xl font-bold mb-10 text-center`}>Contact Us</h2>
          <div className={`p-5 rounded-xl shadow-xl lg:w-2/5 xl:w-2/6 mx-auto bg-neutral text-neutral-content`}>
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
            <div className={`w-full mt-3`}>
              <button className={`btn btn-primary w-full text-xl text-primary-content btn-md`}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}