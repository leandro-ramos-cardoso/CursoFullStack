import React from 'react'

const ComponenteInlineDinamico = ({ ativo }) => {

    function mudaCor() {
        if (ativo === 'true') {
            return {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
                color: '#fff',
                height: '120px',
                textAlign: 'center'
            };
        } else if (ativo === 'false') {
            return {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'gray',
                color:'black',
                height: '120px',
                textAlign: 'center'
            }
        }
        return {}; // Sem estilo se não for "true"
    }
    return (
        <div style={mudaCor()}>
            ComponenteInlineDinamico
        </div>
    )
}

export default ComponenteInlineDinamico