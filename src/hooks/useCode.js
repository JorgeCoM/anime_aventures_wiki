export const useCode = (type) => {

    const isGems = {
        background: 'linear-gradient(#ffffff 25%,#ffa7ff 40%,#66efff 75%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        cursor: 'pointer'
    }

    const isSummonTicket = {
        color: '#0dd3f5',
        cursor: 'pointer'
    }

    const isCandy = {
        background: 'linear-gradient(#f6a800 25%,#f74600 75%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        cursor: 'pointer'
    }
    
    const handlerClass = (type) => {
        if (type === 'Gems') return isGems
        if (type === 'Summon Ticket')  return isSummonTicket
        if (type === 'Candies')  return isCandy

        return {}
    }

    handlerClass(type)

  return {handlerClass}
}
