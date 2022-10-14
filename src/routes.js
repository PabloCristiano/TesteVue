import Cadastro  from './components/cadastro/Cadastro';
import Home  from './components/home/Home';
import Config from './components/config/Config';
import Paginacao from './components/paginacao/Paginacao';

export const routes = [
    {path:'', component: Home, titulo: 'HOME'},
    {path:'/cadastro', component: Cadastro, titulo: 'CADASTRO'},
    {path:'/config', component: Config, titulo: 'CONFIGURAÇÃO'},
    {path:'/paginacao', component: Paginacao, titulo: 'PAGINAÇÃO'},

];
