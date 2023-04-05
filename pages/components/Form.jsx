import React, { useState } from 'react'
import Thankyou from './Thankyou'
import { motion } from 'framer-motion'

function Form() {
    const [page, setPage] = useState(1)

    const handleNext = () => {
        if (page===1 && userResponses.name.length>0 && userResponses.age!=null && userResponses.email.length>0) {
            setPage(page+1)
        }
        else if (page===2 && userResponses.movie1.length>0 && userResponses.movie2.length>0 && userResponses.movie3.length>0) {
            setPage(page+1)
        }
    }

    const [userResponses, setUserResponses] = useState({
        name: '',
        age: null,
        gender: 'masculino',
        email: '',
        cpf: null,
        movie1: '',
        movie2: '',
        movie3: '',
        movie4: 'filmes curtos',
    })

  return (
    (page == 1 ? (
        <>
            <motion.form initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0, transition: { duration: 0.5 } }}  className='form'>
                <h1>Dados Pessoais</h1>

                <div className='input-wrapper'>
                    <label htmlFor='name'>Nome</label>
                    <input required type='text' id='name' name='name' 
                    value={userResponses.name} onChange={(e) => setUserResponses({ ...userResponses, name: e.target.value})}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='age'>Idade</label>
                    <input required type='number' id='age' name='age'
                    value={userResponses.age} onChange={(e) => setUserResponses({ ...userResponses, age: e.target.value})} 
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='gender'>Gênero</label>
                    <select required name='gender'
                    value={userResponses.gender} onChange={(e) => setUserResponses({ ...userResponses, gender: e.target.value})}
                    >
                        <option value='Masculino'>Masculino</option>
                        <option value='Feminino'>Feminino</option>
                    </select>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">E-mail</label>
                    <input required type="email" id="email" name="email" 
                    value={userResponses.email} onChange={(e) => setUserResponses({ ...userResponses, email: e.target.value})}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="cpf">CPF</label>
                    <input type="number" id="cpf" name="cpf" 
                    value={userResponses.cpf} onChange={(e) => setUserResponses({ ...userResponses, cpf: e.target.value})}
                    />
                </div>
                <button onClick={handleNext}>Próximo</button>
            </motion.form>
        </>
    ): page == 2 ? (
        <>
            <motion.form initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0, transition: { duration: 0.5 } }}  className='form'>
                <h1>Filmes</h1>

                <div className='input-wrapper'>
                    <label htmlFor='movie1'>Qual seu gênero de filmes favorito?</label>
                    <input type='text' id='movie1' name='movie1' 
                    value={userResponses.movie1} onChange={(e) => setUserResponses({ ...userResponses, movie1: e.target.value})}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='movie2'>Qual seu segundo gênero de filmes favorito?</label>
                    <input type='text' id='movie2' name='movie2' 
                    value={userResponses.movie2} onChange={(e) => setUserResponses({ ...userResponses, movie2: e.target.value})}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='movie3'>Qual seu terceiro gênero de filmes favorito?</label>
                    <input type='text' id='movie3' name='movie3'
                    value={userResponses.movie3} onChange={(e) => setUserResponses({ ...userResponses, movie3: e.target.value})}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='movie4'>Qual duração mais te prende?</label>
                    <select name='movie4'
                    value={userResponses.movie4} onChange={(e) => setUserResponses({ ...userResponses, movie4: e.target.value})}
                    >
                        <option value='filmes curtos'>Filmes curtos</option>
                        <option value='filmes longos'>Filmes longos</option>
                        <option value='minisséries'>Minisséries</option>
                        <option value='séries'>Séries</option>
                    </select>
                </div>
                <button onClick={handleNext}>Enviar</button>
            </motion.form>
        </>
  ): page == 3 ? <Thankyou userResponses={userResponses} setUserResponses={setUserResponses} /> : null)

  )
}

export default Form
