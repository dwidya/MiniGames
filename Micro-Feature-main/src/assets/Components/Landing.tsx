import '../css/Landing.css'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const navigate = useNavigate()
    return(
        <div>
            <h1 style={{textAlign:'center', margin:50}}>Micro Feature Task</h1>
            <div className='container'>
                <div className='heroContainer'>
                    <h3>Mobile Legend</h3>
                    <Button variant="primary" onClick={() => {navigate("/mobilelegend")}}>Try</Button>
                </div>
                <div className='heroContainer'>
                    <h3>Countdown Time</h3>
                    <Button variant="primary" onClick={() => {navigate("/count")}}>Try</Button>
                </div>
                <div className='heroContainer'>
                    <h3>Salary Calculator</h3>
                    <Button variant="primary" onClick={() => {navigate("/salary")}}>Try</Button>
                </div>
            </div>
        </div> 
    )
}