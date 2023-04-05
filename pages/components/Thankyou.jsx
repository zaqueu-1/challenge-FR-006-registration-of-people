import React from 'react'
import { motion } from 'framer-motion'

function Thankyou({userResponses, setUserResponses}) {
    const handleReset = () => {
        setUserResponses({
            name: '',
            age: null,
            gender: 'masculino',
            email: '',
            cpf: null,
            movie1: '',
            movie2: '',
            movie3: '',
            movie4: 'curtos',
        })
        window.location.reload()
    }

  return (
    <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0, transition: { duration: 0.5 } }} className='thank-you'>
        <h1>Obrigado!</h1>
        <p>Seus dados foram recebidos com sucesso!</p>

        <div className="info">
            <h2>{userResponses.name}, {userResponses.age} anos, gênero {userResponses.gender}</h2>
            <h2>E-mail: {userResponses.email}</h2>
            {userResponses.cpf ? (<h2>CPF: {userResponses.cpf}</h2>) : null}
        </div>

        <div className="movies-info">
            <h2>Meus gêneros de filmes favoritos:</h2>
            <h3>1º {userResponses.movie1}</h3>
            <h3>2º {userResponses.movie2}</h3>
            <h3>3º {userResponses.movie3}</h3>
            <h3>Eu prefiro assistir {userResponses.movie4}!</h3>
        </div>

        <button onClick={handleReset} className="answer-again">Responder novamente</button>
    </motion.div>
  )
}

export default Thankyou
