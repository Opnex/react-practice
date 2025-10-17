function MainContent(props) {
    return (
        <main>
            <h2>Welcome to React</h2>
            <p>Building amazing web application in Nigeria.</p>
            <h1>My name is {props.name}</h1>
            <h1>I work at {props.location}</h1>
            <h1>I am a personate {props.skill}</h1>
        </main>
    )
}

export default MainContent;