import './templateStyle.css';

function Template({ name, image, description, technologies, github }) {
    return (
        <div>
            <img src={image} alt={`${name} preview`} />
            <h1>Project name: {name}</h1>
            <p>{description}</p>
            <div className='technologies-container'>
                <h2>Technologies</h2>
                <ul className="technologies-list">
                    {technologies.map((tech, index) => (
                        <li key={index} className="technology-item">{tech}</li>
                    ))}
                </ul>
            </div>
            <a href={github}>Github Link</a>
        </div>
    );
}

export default Template;