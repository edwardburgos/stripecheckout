const initialState = {
  clasesPorComprar: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MODIFICAR_CLASES_POR_COMPRAR':
      return {
        ...state,
        clasesPorComprar: action.clasesPorComprar
      }
    default:
      return { ...state }
  }
}