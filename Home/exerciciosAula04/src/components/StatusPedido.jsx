import React from 'react'

const StatusPedido = ({ status }) => {
    let state

    if (status === 'enviado') {
        state = <p>Seu pedido foi enviado! 📦</p>
    } else if (status === 'pendente') {
        state = <p>Seu pedido está pendente! ⏳</p>
    } else if (status === 'cancelado') {
        state = <p>Seu pedido foi cancelado! ❌</p>
    }
    return (
        <div>
            {state}
        </div>
    )
}

export default StatusPedido