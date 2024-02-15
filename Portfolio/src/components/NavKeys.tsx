import { useNavigate } from "react-router-dom";

const NavKeys = () => {
    const navigate = useNavigate();
    onkeyup = (event) => {
        if(event.key === 'a') {
            navigate('/About')
        }
        if(event.key === 'h') {
            navigate('/')
        }
        if(event.key === 'p') {
            navigate('/Projects')
        }
        if(event.key === 'c') {
            navigate('/Contact')
        }
    }
    return(
        <>
            <div className="Navbar">
                <p>H: home</p>
                <p>A: About</p>
                <p>C: Contact</p>
                <p>P: Projects</p>
            </div>
        </>
    )
}

export default NavKeys;