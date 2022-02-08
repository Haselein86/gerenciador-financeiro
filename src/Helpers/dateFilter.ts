import { Lancamento } from './../types/Lancamento';


export const getCurrentMotnh = ()=> {

    let now = new Date();

    return `${now.getFullYear()}-${now.getMonth()+1}}`;

};



export const filterListByMonth = (list: Lancamento[], date: string): Lancamento[] => {

    let newList: Lancamento[] = [];

    //let date

    return newList;

}



