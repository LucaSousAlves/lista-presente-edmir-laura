'use client'
import React, { useState, useEffect } from 'react';
import './page.css';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';


export default function Home() {
  const [selectedItem, setSelectedItem] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [itemExists, setItemExists] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    const checkItemExists = async () => {
      if (selectedItem !== '') {
        const q = query(collection(db, 'gifts'), where('itemName', '==', selectedItem));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setItemExists(true);
        } else {
          setItemExists(false);
        }
      }
    };

    checkItemExists();
  }, [selectedItem]);

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
    setSubmitted(false);
    setItemExists(false); // Reset itemExists state when selecting a new item
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== '' && selectedItem !== '') {
      try {
        const docRef = await addDoc(collection(db, 'gifts'), {
          itemName: selectedItem,
          recipientName: name.trim(),
        });
        console.log('Document written with ID: ', docRef.id);

        setName('');
        setSelectedItem('');
        setSubmitted(true);
        setShowPopup(true);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      setSubmitted(false); // Adicione esta linha para garantir que o estado submitted seja falso quando os campos estiverem vazios
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4 bg-gray-100'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-serif text-base'>
        <div className='flex justify-center items-center'>
          <img src="/brasao.png" alt='Presente' className='mb-4' style={{ width: '200px' }} />
        </div>
        <h1 className='text-4xl p-4 text-center' style={{ color: '#333333' }}>Lista de Presentes</h1>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <form className='flex flex-col items-center text-black'>

            <select
              value={selectedItem}
              onChange={handleSelectChange}
              className='col-span-3 p-3 border'
              style={{ width: '300px', borderRadius: '5px' }}
            >
              <option value=''>Selecione um item</option>
              <option value='Abridor de lata'>Abridor de lata</option>
              <option value='Aparelho de jantar'>Aparelho de jantar</option>
              <option value='Aspirador de pó'>Aspirador de pó</option>
              <option value='Assadeiras de vidro'>Assadeiras de vidro</option>
              <option value='Cabides pretos de camurça'>Cabides pretos de camurça</option>
              <option value='Caixas organizadoras'>Caixas organizadoras</option>
              <option value='Centifugador de salada'>Centifugador de salada</option>
              <option value='Cesto organizador de geladeira'>Cesto organizador de geladeira</option>
              <option value='Cesto para roupa suja'>Cesto para roupa suja</option>
              <option value='Colher de Servir'>Colher de Servir</option>
              <option value='Conjunto de travesseiros'>Conjunto de travesseiros</option>
              <option value='Conjunto de vasilhas'>Conjunto de vasilhas</option>
              <option value='Conjunto de Xícaras'>Conjunto de Xícaras</option>
              <option value='Conjunto para sushi'>Conjunto para sushi</option>
              <option value='Conjunto ralador e fatiador'>Conjunto ralador e fatiador</option>
              <option value='Cuscuzeira'>Cuscuzeira</option>
              <option value='Descanso para talheres'>Descanso para talheres</option>
              <option value='Edredom de Casal'>Edredom de Casal</option>
              <option value='Escorredor de Louças'>Escorredor de Louças</option>
              <option value='Escorredor de macarrão'>Escorredor de macarrão</option>
              <option value='Espremedor de Frutas'>Espremedor de Frutas</option>
              <option value='Ferro de passar'>Ferro de passar</option>
              <option value='Formas assadeiras'>Formas assadeiras</option>
              <option value='Frigideira Wok'>Frigideira Wok</option>
              <option value='Fruteira'>Fruteira</option>
              <option value='Garrafa de café'>Garrafa de café</option>
              <option value='Jogo americano'>Jogo americano</option>
              <option value='Jogo de cama de Casal'>Jogo de cama de Casal</option>
              <option value='Jogo de Copos'>Jogo de Copos</option>
              <option value='Jogo de cumbucas'>Jogo de cumbucas</option>
              <option value='Jogo de facas'>Jogo de facas</option>
              <option value='Jogo de Frigideiras'>Jogo de Frigideiras</option>
              <option value='Jogo de Panelas'>Jogo de Panelas</option>
              <option value='Jogo de peneira'>Jogo de peneira</option>
              <option value='Jogo de sobremesa'>Jogo de sobremesa</option>
              <option value='Jogo de taças'>Jogo de taças</option>
              <option value='Jogo de talher'>Jogo de talher</option>
              <option value='Jogo de tapetes'>Jogo de tapetes</option>
              <option value='Jogo de toalha de banho'>Jogo de toalha de banho</option>
              <option value='Kit de utensílios de churrasco'>Kit de utensílios de churrasco</option>
              <option value='Kit pia banheiro'>Kit pia banheiro</option>
              <option value='Kit pia cozinha'>Kit pia cozinha</option>
              <option value='Kit panos de prato'>Kit panos de prato</option>
              <option value='Liquidificador'>Liquidificador</option>
              <option value='Mixer'>Mixer</option>
              <option value='Mop giratório'>Mop giratório</option>
              <option value='Mop Spray'>Mop Spray</option>
              <option value='Porta tempeiros inox'>Porta tempeiros inox</option>
              <option value='Potes herméticos'>Potes herméticos</option>
              <option value='Sanduicheira'>Sanduicheira</option>
              <option value='Tábua de carne'>Tábua de carne</option>
              <option value='Tábua de passar roupa'>Tábua de passar roupa</option>
              <option value='Toalha de mesa (120cm*80cm)'>Toalha de mesa (120cm*80cm)</option>
              <option value='Varal de chão'>Varal de chão</option>
              <option value='Ventilador'>Ventilador</option>
            </select>
            {selectedItem && (
              <div className='col-span-3'>
                {itemExists && <p className='text-red-500'>Este item já foi escolhido.</p>}
                {!itemExists && (
                  <>
                    <input
                      value={name}
                      onChange={handleNameChange}
                      className='p-3 border'
                      type='text'
                      placeholder='Digite seu nome completo'
                      style={{ width: '300px', borderRadius: '5px', display: 'flex', flexDirection: 'column', marginTop: '20px' }}
                    />
                    <button
                      onClick={handleSubmit}
                      className='text-black py-2 text-xl mt-4 rounded-md shadow-md border border-black mt-5 hover:bg-black hover:text-white self-center text-center'
                      type='submit'
                      style={{ width: '300px' }}
                    >
                      Enviar
                    </button>

                  </>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <div className="btn-fechar">
              <button style={{ color: '#333333', textAlign: 'center' }} className="close-btn" onClick={() => setShowPopup(false)}>X</button>
            </div>
            <h2 style={{ color: 'green', textAlign: 'center', marginBottom: '1rem' }}>Item selecionado com sucesso!</h2> {/* Centralizando o texto */}
            <p style={{ color: '#333333', textAlign: 'center' }}>Agradecemos imensamente o carinho e a gentileza de seu presente. Sua generosidade é verdadeiramente apreciada.</p>
            <p style={{ color: '#333333', textAlign: 'center' }}>Atenciosamente,</p>
            <p style={{ color: '#333333', textAlign: 'center' }}>Edmir e Laura</p>
          </div>
        </div>
      )}
    </main>
  );
}