export default function Projects() {
    return (
        <div className="card bg-base-100 shadow-xl">
   <div className="card-body">
       <h2 className="card-title text-3xl mb-4">Projects 🏗️</h2>
       
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           
           <div className="project-card group">
               <div className="card bg-base-200 hover:bg-base-300 hover:shadow-lg transition-all duration-300 h-full">
                   <div className="card-body">
                       <div className="flex items-center justify-between mb-4">
                           <h3 className="card-title text-xl group-hover:text-primary transition-colors">
                               E-Commerce Platform
                           </h3>
                           <a href="#" className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary transition-colors">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                           </a>
                       </div>
                       
                       <p className="text-base-content/70 mb-4 flex-grow">
                           Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Features include product catalog, shopping cart, order management, and analytics.
                       </p>
                       
                       <div className="flex flex-wrap gap-2">
                           <span className="badge badge-primary badge-sm">React</span>
                           <span className="badge badge-primary badge-sm">Node.js</span>
                           <span className="badge badge-primary badge-sm">MongoDB</span>
                           <span className="badge badge-primary badge-sm">Stripe</span>
                       </div>
                   </div>
               </div>
           </div>
           
           <div className="project-card group">
               <div className="card bg-base-200 hover:bg-base-300 hover:shadow-lg transition-all duration-300 h-full">
                   <div className="card-body">
                       <div className="flex items-center justify-between mb-4">
                           <h3 className="card-title text-xl group-hover:text-primary transition-colors">
                               Task Management App
                           </h3>
                           <a href="#" className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary transition-colors">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                           </a>
                       </div>
                       
                       <p className="text-base-content/70 mb-4 flex-grow">
                           Collaborative task management application with real-time updates, drag-and-drop functionality, team workspaces, and progress tracking. Built with modern web technologies.
                       </p>
                       
                       <div className="flex flex-wrap gap-2">
                           <span className="badge badge-secondary badge-sm">Vue.js</span>
                           <span className="badge badge-secondary badge-sm">Express</span>
                           <span className="badge badge-secondary badge-sm">Socket.io</span>
                           <span className="badge badge-secondary badge-sm">PostgreSQL</span>
                       </div>
                   </div>
               </div>
           </div>
           
           <div className="project-card group">
               <div className="card bg-base-200 hover:bg-base-300 hover:shadow-lg transition-all duration-300 h-full">
                   <div className="card-body">
                       <div className="flex items-center justify-between mb-4">
                           <h3 className="card-title text-xl group-hover:text-primary transition-colors">
                               Weather Dashboard
                           </h3>
                           <a href="#" className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary transition-colors">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                           </a>
                       </div>
                       
                       <p className="text-base-content/70 mb-4 flex-grow">
                           Interactive weather dashboard with location-based forecasts, historical data visualization, and customizable widgets. Integrates multiple weather APIs for accurate predictions.
                       </p>
                       
                       <div className="flex flex-wrap gap-2">
                           <span className="badge badge-accent badge-sm">JavaScript</span>
                           <span className="badge badge-accent badge-sm">Chart.js</span>
                           <span className="badge badge-accent badge-sm">OpenWeather API</span>
                           <span className="badge badge-accent badge-sm">CSS3</span>
                       </div>
                   </div>
               </div>
           </div>
           
           <div className="project-card group">
               <div className="card bg-base-200 hover:bg-base-300 hover:shadow-lg transition-all duration-300 h-full">
                   <div className="card-body">
                       <div className="flex items-center justify-between mb-4">
                           <h3 className="card-title text-xl group-hover:text-primary transition-colors">
                               AI Chat Bot
                           </h3>
                           <a href="#" className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary transition-colors">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                           </a>
                       </div>
                       
                       <p className="text-base-content/70 mb-4 flex-grow">
                           Intelligent chatbot with natural language processing capabilities. Features conversation memory, sentiment analysis, and integration with external APIs for enhanced functionality.
                       </p>
                       
                       <div className="flex flex-wrap gap-2">
                           <span className="badge badge-info badge-sm">Python</span>
                           <span className="badge badge-info badge-sm">TensorFlow</span>
                           <span className="badge badge-info badge-sm">FastAPI</span>
                           <span className="badge badge-info badge-sm">Redis</span>
                       </div>
                   </div>
               </div>
           </div>
           
       </div>
   </div>
</div>
    )
}