import ExperienceData from '@/data/experiences.mdx';

export default function Experience() {
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            {/*<h2 className="card-title text-3xl mb-4">Experience 👔</h2> */}
            <ExperienceData />
        </div>
    </div>
    )
}