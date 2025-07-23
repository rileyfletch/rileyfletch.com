import ProjectData from '@/data/projects.mdx';

export default function Projects() {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-3xl mb-4">Projects</h2>
                
                    <ProjectData></ProjectData>
            </div>
        </div>
    )
}