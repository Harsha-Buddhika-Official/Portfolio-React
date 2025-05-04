import './templateStyle.css';

function Template({ name, image, description, technologies, github }) {
    return (
        <div className='template-container'>
            <img src={image} alt={`${name} preview`} className='image-container'/>
                <h1 className='project-name'>{name}</h1>
                <p className='description'>{description}</p>
                <div className='technologies-container'>
                    <h2>Technologies</h2>
                    <ul className="technologies-list">
                        {technologies.map((tech, index) => (
                            <li key={index} className="technology-item">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className='button-container'>
                    <a href={github} target='_blank' className='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    <span>View on GitHub</span></a>
                </div>
        </div>
    );
}

export default Template;