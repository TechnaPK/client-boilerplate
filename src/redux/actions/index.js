export const createAccount = ( account ) => {

    console.log("Creating Account: ", account);
    return {
        type: 'CREATE_ACCOUNT',
        payload: account
    }

}

export const deleteAccount = ( account ) => {

    console.log("Deleting Account: ", account);
    return {
        type: 'DELETE_ACCOUNT',
        payload: account
    }

}

export const depositInToAccount = ( account, amount ) => {

    console.log("Depositing InTo Account");
    return {
        type: 'DEPOSIT_INTO_ACCOUNT',
        payload: {account, amount}
    }

}

export const withdrawFromAccount = ( account, amount ) => {

    console.log("WithDrawing FROM Account");
    return {
        type: 'WITHDRAW_FROM_ACCOUNT',
        payload: {account, amount}
    }

}

export const newTransaction = ( transaction ) => {

    console.log("New Transaction: ", transaction);
    
    transaction.id = new Date().getTime();
    return {
        type: 'NEW_TRANSACTION',
        payload: transaction
    }

}