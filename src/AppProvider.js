import React, { useEffect, useState } from 'react'
import AppContext from './Context'

const AppProvider = ({ children }) => {
    let [a_names, set_anames] = useState([]);
    let [e_names, set_enames] = useState([]);

    useEffect(() => {
        async function data() {
            // Names of martyred
            let names_response = await fetch('https://data.techforpalestine.org/api/v2/killed-in-gaza.min.json');
            let names = await names_response.json();
            //console.log(names);
            let ar_names = names.map((ind) => ind.name);
            let en_names = names.map((ind) => ind.en_name);

            set_anames(pre_ar => ar_names);
            set_enames(pre_en => pre_en);

        }
        data();
    }, [])

    return (
        <AppContext.Provider value={[a_names, e_names]}>
            {children}

        </AppContext.Provider>
    )
}

export default AppProvider
