const initialState = {
  completedPaymentInfo: false,
  clasesPorComprar: [],
  paymentInfo: {},
  moneda: 'USD'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MODIFY_COMPLETED_PAYMENT_INFO':
      return {
        ...state,
        completedPaymentInfo: action.completedPaymentInfo
      }
    case 'MODIFY_PAYMENT_INFO':
      return {
        ...state,
        paymentInfo: action.paymentInfo
      }
    case 'MODIFICAR_CLASES_POR_COMPRAR':
      return {
        ...state,
        clasesPorComprar: action.clasesPorComprar
      }
    case 'MODIFICAR_MONEDA':
      return {
        ...state,
        moneda: action.moneda
      }
    default:
      return { ...state }
  }
}