export default function Experience() {
    return (
        <div className="card bg-base-100 shadow-xl">
   <div className="card-body">
       <h2 className="card-title text-3xl mb-4">Experience 👔</h2>
       
       <div className="space-y-8">
           
           <div className="experience-item group">
               <div className="flex flex-col lg:flex-row lg:items-start gap-6 p-6 rounded-lg border border-base-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                   <div className="flex-shrink-0">
                       <div className="badge badge-primary badge-lg px-4 py-3 text-sm font-semibold">
                           2022 - Present
                       </div>
                   </div>
                   
                   <div className="flex-grow">
                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                           <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors">
                               Senior Full Stack Developer
                           </h3>
                           <div className="text-lg font-medium text-primary">
                               TechCorp Inc.
                           </div>
                       </div>
                       <p className="text-base-content/70 leading-relaxed">
                           Led development of microservices architecture serving 1M+ users. Built responsive web applications using React, Node.js, and PostgreSQL. Mentored junior developers and collaborated with cross-functional teams to deliver high-quality software solutions.
                       </p>
                       
                       <div className="flex flex-wrap gap-2 mt-4">
                           <span className="badge badge-outline badge-sm">React</span>
                           <span className="badge badge-outline badge-sm">Node.js</span>
                           <span className="badge badge-outline badge-sm">PostgreSQL</span>
                           <span className="badge badge-outline badge-sm">AWS</span>
                       </div>
                   </div>
               </div>
           </div>
           
           <div className="experience-item group">
               <div className="flex flex-col lg:flex-row lg:items-start gap-6 p-6 rounded-lg border border-base-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                   <div className="flex-shrink-0">
                       <div className="badge badge-secondary badge-lg px-4 py-3 text-sm font-semibold">
                           2020 - 2022
                       </div>
                   </div>
                   
                   <div className="flex-grow">
                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                           <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors">
                               Frontend Developer
                           </h3>
                           <div className="text-lg font-medium text-secondary">
                               StartupXYZ
                           </div>
                       </div>
                       <p className="text-base-content/70 leading-relaxed">
                           Developed and maintained user interfaces for SaaS platform. Implemented responsive designs and improved application performance by 40%. Collaborated with designers to create intuitive user experiences.
                       </p>
                       
                       <div className="flex flex-wrap gap-2 mt-4">
                           <span className="badge badge-outline badge-sm">Vue.js</span>
                           <span className="badge badge-outline badge-sm">TypeScript</span>
                           <span className="badge badge-outline badge-sm">Tailwind CSS</span>
                           <span className="badge badge-outline badge-sm">Firebase</span>
                       </div>
                   </div>
               </div>
           </div>
           
           <div className="experience-item group">
               <div className="flex flex-col lg:flex-row lg:items-start gap-6 p-6 rounded-lg border border-base-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                   <div className="flex-shrink-0">
                       <div className="badge badge-accent badge-lg px-4 py-3 text-sm font-semibold">
                           2019 - 2020
                       </div>
                   </div>
                   
                   <div className="flex-grow">
                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                           <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors">
                               Junior Web Developer
                           </h3>
                           <div className="text-lg font-medium text-accent">
                               Digital Agency Co.
                           </div>
                       </div>
                       <p className="text-base-content/70 leading-relaxed">
                           Built custom websites and web applications for clients across various industries. Gained experience in full-stack development and client communication. Contributed to team projects and learned industry best practices.
                       </p>
                       
                       <div className="flex flex-wrap gap-2 mt-4">
                           <span className="badge badge-outline badge-sm">JavaScript</span>
                           <span className="badge badge-outline badge-sm">PHP</span>
                           <span className="badge badge-outline badge-sm">MySQL</span>
                           <span className="badge badge-outline badge-sm">WordPress</span>
                       </div>
                   </div>
               </div>
           </div>
           
       </div>
   </div>
</div>
    )
}