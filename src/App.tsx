import { useState, useEffect } from 'react' // Mpnitorar
import * as C from './App.styles'
import { Category } from './types/Category'
import { Lancamento } from './types/Lancamento'
import { categories } from './data/categories'
import { lancamentos } from './data/lancamentos'
import { getCurrentMotnh } from './Helpers/dateFilter';



const App = () => {

  const [list, setList] = useState(lancamentos);
  const [filterList, setFilterList] = useState<Lancamento[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMotnh());

  useEffect(() => {

  }, [list, currentMonth]);


  return (


    <C.Container>

      <C.Header>

        <C.HeaderText>
          Sistema Financeiro</C.HeaderText>

      </C.Header>


      <C.Body>

        {/* Area de informações */}

        {/* Inserir Informações */}

        {/* Tabela de Lancamentos */}

      </C.Body>

    </C.Container>
  )
};


export default App;