import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


function CoundownTime() {
    const navigate = useNavigate()
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

    let interval = useRef(0)
    
    const checkInput = () => {
        const dateInput = new Date((document.getElementById('date') as HTMLInputElement).value).getTime()
        if (isNaN(dateInput)) {
            alert("Masukkan tanggal dan waktu yang valid!")
            setTimerDays(0)
            setTimerHours(0)
            setTimerMinutes(0)
            setTimerSeconds(0)
        } else {
            startTimer()
        }
    }

    const startTimer = () => {
        const dateInput = new Date((document.getElementById('date') as HTMLInputElement).value).getTime()

        const spanTimer = document.getElementById('timer')

        interval.current = setInterval(() => {
            const now = new Date().getTime()
            const distance = dateInput - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
                alert("Waktu telah habis!");
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)

        if (spanTimer?.style.display === 'none') {
            spanTimer.style.display = 'block'
        }

    }
    
    const resetTimer = () => {
        (document.getElementById('date') as HTMLInputElement).value = ""
        clearInterval(interval.current)
        setTimerDays(0)
        setTimerHours(0)
        setTimerMinutes(0)
        setTimerSeconds(0)
    }

    return (
        <>
            <Button variant="primary" style={{margin:30}} onClick={() => {navigate("/")}}>Kembali</Button>
            <div className='countdownContainer'>
            <div>
                <h2 style={{margin:50}}>Countdown Time</h2>
                <div style={{marginTop:10}}></div>
                <InputGroup>
                    <Form.Control type="datetime-local" id='date' name='date'/>
                    <Button variant="outline-secondary" onClick={checkInput}>Start</Button>
                    <Button variant="outline-secondary" onClick={resetTimer}>Reset</Button>
                </InputGroup>
            </div>
            <div style={{margin:40}}>
                <h4>Countdown : </h4>
                <span id='timer' >{timerDays} Hari, {timerHours} Jam, {timerMinutes} Menit, {timerSeconds} Detik</span>
            </div>
            </div>
        </>
    )
}

export default CoundownTime