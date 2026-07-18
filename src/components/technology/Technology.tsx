import './Technology.css'
const Technology = ({title}: {title: string}) => {
    return (
        <p className="bg-panel p-2 px-4 rounded-full text-accent tech-card">
            {title}
        </p>
    )
}
export default Technology;