import { types } from "../types/types";

export const authReducer = (state={} , action) => {

    switch (action.type) {
        case types.login:
            return {
                    ...action.payload,
                    logged: true
                   }
        
        case types.logout:
            return {
                    ...action.payload,
                    logged:false
                   }
    
        default:
            return state;
    }

}


/*
-Un Reducer no es más que una simple función pura.
-Los tipos de "types.login" y "types.logout" estan en el objeto en src>types>types.js .
*/