import React from 'react'

const DiaDaSemana = ({ dia }) => {
    function diaSemana() {
        if (dia === 'segunda') {
            return (
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'blue',
                        color: 'white',
                        height: '120px',
                        textAlign: 'center'
                    }}
                >
                    Começo da semana!

                </p>
            )
        } else if (dia === 'sexta') {
            return (
                <p

                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'lightgreen',
                        height: '120px',
                        textAlign: 'center'
                    }}>
                    Sextou!
                </p>
            )
        } else if(dia === 'domingo'){
            return(
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'red',
                        color: 'white',
                        height: '120px',
                        textAlign: 'center'
                    }}
                >
                    Dia de descanso!
                </p>
            )
        }
    }
    return (
        <div>
            {diaSemana()}
        </div>
    )
}

export default DiaDaSemana