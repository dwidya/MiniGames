import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useNavigate } from 'react-router-dom'
import '../css/MobileLegend.css'
import axios from 'axios'

interface hero {
  hero_id: number
  hero_name: string
  hero_avatar: string
  hero_role: string
  hero_specially: string
}

function MobileLegend() {
  const [heroList, setHeroList] = useState<hero[]>()
  const [text, setText] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    loadHeroData()
  }, [text])

  const loadHeroData = async () => {
    return await axios
        .get('https://api.dazelpro.com/mobile-legends/hero')
        .then(res => setHeroList(res.data.hero))
        .catch(err => console.log(err))
   }

  const handleSearch = () => {
    const findHero = heroList?.filter((u) => u?.hero_name.toLowerCase().includes(text.toLowerCase()))
    setHeroList(findHero)
  }
  
  const handleReset = () => {
    loadHeroData()
    setText('')
  }

  return (
    <>
      <Button variant="primary" style={{margin:30}} onClick={() => {navigate("/")}}>Kembali</Button>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h2 style={{marginTop:10, marginBottom:30}}>Daftar Hero Mobile Legend</h2>
        <div style={{marginTop:10}}>
        <InputGroup>
            <Form.Control
            placeholder="Cari hero berdasarkan nama" value={text} onChange={(e) => setText(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => handleSearch()}>Cari</Button>
            <Button variant="outline-secondary" onClick={() => handleReset()}>Reset</Button>
        </InputGroup>
        {heroList?.map(hero => (
          <div className='heroContainer' key={hero.hero_id}>
            <h5 style={{margin:10, paddingLeft:20, paddingTop:25}}>{hero.hero_name}</h5>
            <p style={{paddingLeft:30, paddingBottom:25}}>
            Peran: {hero.hero_role}<br></br>
            Kemampuan: {hero.hero_specially}
            </p>
          </div>
        ))}
      </div>
      </div> 
    </>
  )
}

export default MobileLegend
