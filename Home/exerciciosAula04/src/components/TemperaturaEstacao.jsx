import React from 'react'

const TemperaturaEstacao = () => {
    function corTemperatura(temperatura) {
        if (temperatura === 'verao') {
            return (
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'orange',
                        color: 'black',
                        height: '120px',
                        textAlign: 'center'
                    }}
                >
                    Verão
                </p>
            )
        } else if (temperatura === 'inverno') {
            return (
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'lightblue',
                        color: 'black',
                        height: '120px',
                        textAlign: 'center'
                    }}
                >
                    Inverno
                </p>
            )
        } else if (temperatura === 'outono') {
            return (
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'brown',
                        color: 'black',
                        height: '120px',
                        textAlign: 'center'
                    }}
                >
                    Outono
                </p>
            )
        } else if (temperatura === 'primavera') {
            return (
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        color: 'black',
                        height: '120px',
                        textAlign: 'center'
                    }}
                >
                    Outono
                </p>
            )
        }
    }
    return (
        <div>
            {corTemperatura('primavera')}
        </div>
    )
}

export default TemperaturaEstacao