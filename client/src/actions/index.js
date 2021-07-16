export function modifycompletedPaymentInfo(completedPaymentInfo) {
    return {
        type: 'MODIFY_COMPLETED_PAYMENT_INFO',
        completedPaymentInfo
    }
}

export function modifyPaymentInfo(paymentInfo) {
    return {
        type: 'MODIFY_PAYMENT_INFO',
        paymentInfo
    }
}

export function modificarClasesPorComprar(clasesPorComprar) {
    return {
        type: 'MODIFICAR_CLASES_POR_COMPRAR',
        clasesPorComprar
    }
}

export function modificarMoneda(moneda) {
    return {
        type: 'MODIFICAR_MONEDA',
        moneda
    }
}