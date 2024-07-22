import '../Pages/home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="text-container">
                <h1>HELLO! MY NAME IS</h1>
                <h2>YASH BHOOMKAR</h2>
                <p>GEN AI ENGINEER</p>
                <p>& WEB DEVELOPER</p>
                <div className="button-container">
                    <a href="https://drive.google.com/file/d/1rPkQ74wA_WvPyO4ezcrFelyghwjEuE7w/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">VIEW RESUME</a>
                    <a href="/about" className="button">ABOUT ME</a>
                </div>
            </div>
            <div className="photo-container">
                <img src="https://i.ibb.co/4pMp875/Techsparks-Yash-Photo.jpg" alt="Yash Bhoomkar" className="profile-photo" />
            </div>
        </div>
    );
}

export default Home;
