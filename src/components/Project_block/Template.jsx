import './templateStyle.css';

function Template({ name, image }) {
    return (
        <div>
            <img src={image} alt={`${name} preview`} />
            <h1>Project name: {name}</h1>
            <p>Description about this project</p>
            <div>
                <h2>Technologies</h2>
            </div>
        </div>
    );
}

export default Template;