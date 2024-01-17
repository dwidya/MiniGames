import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SalaryCalculator() {
    const navigate = useNavigate()
    const [gajiPokok, setGajiPokok] = useState(0)
    const [tunjangan, setTunjangan] = useState(0)
    const [kewajiban, setKewajiban] = useState(0)
    const [gajiKotor, setGajiKotor] = useState(0)
    const [gajiBersih, setGajiBersih] = useState(0)

    const hitung = async () => {
        const nilai1 = parseInt((document.getElementById("pokok") as HTMLInputElement).value)

        const nilai2 = parseInt((document.getElementById("tunjangan") as HTMLInputElement).value)

        const nilai3 = parseInt((document.getElementById("kewajiban") as HTMLInputElement).value)

        setGajiPokok(nilai1)
        setTunjangan(nilai2)
        setKewajiban(nilai3)

        setGajiKotor(gajiPokok + tunjangan)

        setGajiBersih((gajiPokok + tunjangan) - kewajiban)
    }

    return(
        <>
            <Button variant="primary" style={{margin:30}} onClick={() => {navigate("/")}}>Kembali</Button>
            <div className='salaryContainer'>
            <div>
                <h1>Salary Calculator</h1>
                <Form style={{margin:30}}>
                    <Form.Group className="mb-3" controlId="pokok">
                        <Form.Label>Gaji Pokok</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tunjangan">
                        <Form.Label>Tunjangan</Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="kewajiban">
                        <Form.Label>Kewajiban Pokok</Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>
                    <Button variant="primary" onClick={hitung}>Hitung Gaji</Button>
                </Form>

                <div>
                    <h3>Hasil : </h3>
                    <p>Gaji Kotor: Rp. {gajiKotor}</p>
                    <p>Tunjangan: Rp. {tunjangan}</p>
                    <p>Gaji Bersih: Rp. {gajiBersih}</p>

                </div>
            </div>
            </div>
        </>
    )
}

export default SalaryCalculator