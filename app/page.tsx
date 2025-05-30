import Image from "next/image";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

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
                <div className="max-w-5xl mx-auto">

                    <div className="space-y-8">

                        <div className="">
                          <About></About>
                        </div>
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
                            <a href="/blog" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 9.4L18.3 3.7C20.1 1.9 22 2.5 22 5V16L20 18H12L7 23V21C7 19.9 6.1 19 5 19S3 19.9 3 21 4.1 23 5 23H7V21L12 16H20V5C20 4.4 19.4 4.2 19 4.6L12.6 9.4Z"/>
                                </svg>
                                Blog
                            </a>
                        </li>
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
                                  <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.5V17.5H16V15.5H8ZM8 12.5V14.5H16V12.5H8ZM8 9.5V11.5H13V9.5H8Z"/>
                                </svg>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                
                <Contact></Contact>
                
            </aside>
          </div>
    </div>
    )
}