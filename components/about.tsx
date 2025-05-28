import AboutData from '@/data/about.mdx';

export default function About() {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="card-title text-3xl mb-4">Hey, I&apos;m Riley 🤠</h2>
                <div className='prose text-lg'>
                    <AboutData></AboutData>
                </div>
            </div>
        </div>
    )
}