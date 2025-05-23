import Image from "next/image";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <div className="drawer lg:drawer-open">
          <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
        
          <div className="drawer-content flex flex-col">

            <div className="navbar bg-base-100 lg:hidden">
                <div className="flex-none">
                    <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
            </div>
            
            <main className="flex-1 p-8 bg-base-200 min-h-screen">
                <div className="max-w-4xl mx-auto">

                    <div className="space-y-8">

                        <About></About>
                        <Experience></Experience>
                        <Projects></Projects>
                       
                    </div>
                </div>
            </main>
          </div>
        
          <div className="drawer-side">
            <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
            <aside className="w-80 min-h-full bg-base-100 border-r border-base-300 flex flex-col">
                
                <div className="p-8 border-b border-base-300">
                    <div className="avatar mb-6">
                        <div className="w-24 rounded-full bg-primary/20 flex items-center justify-center">
                            <Image 
                            src="shield.svg"
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt="blank"
                            width={25}
                            height={25}>
                            </Image>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-base-content mb-2">Riley Fletcher</h1>
                    <h2 className="text-lg font-medium text-primary mb-3">Software Engineer</h2>
                    <p className="text-base-content/70 leading-relaxed">
                        Just a chill guy curious about low-level computer stuff
                    </p>
                </div>
                
                <nav className="flex-1 p-8">
                    <ul className="menu menu-lg w-full space-y-2">
                        <li>
                            <a href="#about" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C13.7 8 15 9.3 15 11V22H13V16H11V22H9V11C9 9.3 10.3 8 12 8Z"/>
                                </svg>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M10 2H14C15.1 2 16 2.9 16 4V6H20C21.1 6 22 6.9 22 8V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V8C2 6.9 2.9 6 4 6H8V4C8 2.9 8.9 2 10 2ZM10 6H14V4H10V6Z"/>
                                </svg>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM4 14L6 21L10.5 18.5L15 21L17 14H4Z"/>
                                </svg>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 9.4L18.3 3.7C20.1 1.9 22 2.5 22 5V16L20 18H12L7 23V21C7 19.9 6.1 19 5 19S3 19.9 3 21 4.1 23 5 23H7V21L12 16H20V5C20 4.4 19.4 4.2 19 4.6L12.6 9.4Z"/>
                                </svg>
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.5V17.5H16V15.5H8ZM8 12.5V14.5H16V12.5H8ZM8 9.5V11.5H13V9.5H8Z"/>
                                </svg>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                
                <div className="p-8 border-t border-base-300">
                    <h3 className="text-sm font-semibold text-base-content/70 mb-4 uppercase tracking-wider">contact me</h3>
                    <div className="flex flex-wrap gap-4">
                        <a href="#" className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-colors group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        
                        <a href="#" className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-colors group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                            </svg>
                        </a>
                        
                        <a href="#" className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-colors group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
            </aside>
          </div>
    </div>
    )
}