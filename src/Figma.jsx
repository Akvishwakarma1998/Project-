import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
function Fig() {
    return (
        <div>
            <fieldset id="U">
                <div id='A'>
                    <a href="#">HOME</a>
                    <a href="#">CASE STUDY</a>
                    <a href="#">ABOUT</a>
                    <a href="#">TESTIMONIALS</a>
                    <a href="#">GET IN TOUCH</a>
                    <a href="#"><BsGithub /></a>
                     <a href="#"><BsLinkedin /></a>
                     

                </div>
            </fieldset >
            <div id="S">
                <div>
                    <h2>Aditya Kumar Vishwakarma</h2>
                    <p id="Zz">I am a student of Kashi institute at technology mirzamurad varanasi pursuing my Mca
                        with a strong intrest in web development
                    </p>
                    <div id="Q">
                        <a id="M" href="#"> let's get Started</a>
                    </div>
                </div>
                <div>
                    <img id="img" src="./photo.jpg" alt="photo" />
                </div>
            </div>

            <div id="F">
                <button >Html</button>
                <button>Css</button>
                <button>JavaScript</button>
                <button>React.js</button>
                <button>Node.js</button>
                <button>Sql</button>
            </div>
            <div></div>
        </div>
    )
}
export default Fig
