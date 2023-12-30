import './App.css'
import { First_component,Component,Second_component,Third_Component,Forth_component,Fifth_component,Sixth_component,Seventh_component,Eight_component} from './components/First_component'
import image1 from './images/image1.jpg'



const App = ()=>{
return <>
<Component/>
<div className='back1' >
  <First_component/>
</div>
<Second_component/>
<Third_Component/>
<Forth_component/>
<Fifth_component/>
<Sixth_component/>

<div className='back2'>
  <Seventh_component/>
</div>
<Eight_component/>
</>

}

export default App;