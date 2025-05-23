import Image from "next/image";

export default function NavBar() {
    return (
         <div className="drawer-side">
            <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
            <aside className="w-80 min-h-full bg-base-100 border-r border-base-300 flex flex-col">
                
                <div className="p-8 border-b border-base-300">
                    <div className="avatar mb-6">
                        <div className="w-24 rounded-full bg-primary/20 flex items-center justify-center">
                            <Image 
                            src="processor.svg"
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt="blank"
                            width={125}
                            height={125}>
                            </Image>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-base-content mb-2">Riley Fletcher</h1>
                    <h2 className="text-lg font-medium text-primary mb-3">Software Engineer</h2>
                    <p className="text-base-content/70 leading-relaxed">
                        Curious about Linux, security, networks, cloud infrastructure, and embedded systems.
                    </p>
                </div>
                
                <nav className="flex-1 p-8">
                    <ul className="menu menu-lg w-full space-y-2">
                        <li>
                            <a href="#about" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7C1 6.4 1.4 6 2 6L10 6.5C10 5.7 10.7 5 11.5 5H12.5C13.3 5 14 5.7 14 6.5L22 6C22.6 6 23 6.4 23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9Z"/>
                                </svg>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14Z"/>
                                </svg>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                                </svg>
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>
                
                <div className="p-8 border-t border-base-300">
                    <h3 className="text-sm font-semibold text-base-content/70 mb-4 uppercase tracking-wider">Connect</h3>
                    <div className="flex flex-wrap gap-4">
                        <a href="#" className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-colors group">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                                <text x="12" y="15" textAnchor="middle" fontSize="8" fill="currentColor">GH</text>
                            </svg>
                        </a>
                        
                        <a href="#" className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-colors group">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                                <text x="12" y="15" textAnchor="middle" fontSize="8" fill="currentColor">LI</text>
                            </svg>
                        </a>
                        
                        <a href="#" className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-colors group">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                                <text x="12" y="15" textAnchor="middle" fontSize="8" fill="currentColor">TW</text>
                            </svg>
                        </a>
                        
                        <a href="#" className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-colors group">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                                <text x="12" y="15" textAnchor="middle" fontSize="8" fill="currentColor">@</text>
                            </svg>
                        </a>
                    </div>
                </div>
                
            </aside>
        </div>
    )
}