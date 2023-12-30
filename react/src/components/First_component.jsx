import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image2 from '../images/image2.jpg'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'

const Component = ()=>{
return <>
<div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"50px"}} >
  <h1>Logo</h1>
  <button className='btn' >Sign up</button>
</div>
</>
}



const First_component =()=>{
    return <>
    <div style={{marginTop:"15%",marginBottom:"15%",color:"white"}} >
    <h1>Generate more leads with a <br />
    professional landing page!</h1>
    <div style={{marginTop:"10px"}} >
    <input style={{padding:"10px",width:"250px",borderRadius:"10px",borderColor:"white",marginRight:"10px"}} type="text" placeholder="Email Address" />
    <button className="btn">Submit</button>
    </div>
    </div>
    
    </>
}

const Second_component =()=>{
    return <>
    <div style={{display:"flex",justifyContent:"space-evenly"}} >
        <div style={{marginTop:"5%",marginBottom:"8%"}}>
           <h2>Fully Responsive</h2>
           <p>This theme will look great on any device <br />
           no matter the size!</p>
        </div>
        <div style={{marginTop:"5%",marginBottom:"8%"}} >
            <h2>Boostrap 5 Ready</h2>
            <p>Featuring the latest build of the new <br />
            boostrap 5 frameworks</p>
        </div>
        <div style={{marginTop:"5%",marginBottom:"8%"}} >
            <h2>Easy to Use</h2>
            <p>Ready to use with your own content <br />
            or costumixe the source file
            </p>
        </div>
    </div>
    </>
}

const Third_Component = ()=>{
    return <div className='div' >
        
   <div style={{height:"20%", width:"50%",top:"5%",left:"5%"}} >
   <div style={{marginTop:"25%", marginLeft:"8%",marginRight:"3%"}} >
   <h2>Fully Responsive Design</h2>
   <p>When you see a theme created by Boostrap,you
      known that the theme <br /> will lock great on anyb 
    device Whether,its  a phone ,tablet or desktopthe page will behaveResponsive! </p>
   </div>
   </div>
   <div style={{height:"20%",width:"50%"}} >
   <img className='list' src={image3} alt="" />
   </div>
 </div>
 }


const Forth_component =()=>{
    return <div className='div' >
    <div style={{height:"20%",width:"50%"}} >
    <img className='list' src={image4} alt="" />
    </div>
    <div style={{height:"20%",width:"50%",top:"5%",left:"5%"}} >
    <div style={{marginTop:"25%", marginLeft:"8%",marginRight:"3%"}} >
    <h2>Fully Responsive Design</h2>
    <p>When you see a theme created by Boostrap,you
       known that the theme <br /> will lock great on anyb 
     device Whether,its  a phone ,tablet or desktopthe page will behaveResponsive! </p>
    </div>
    </div>
  </div>
}
const Fifth_component =()=>{
    return <>
    <div className='div' >
    <div style={{height:"20%",width:"50%",top:"5%",left:"5%"}} >
    <div style={{marginTop:"25%", marginLeft:"8%",marginRight:"3%"}} >
    <h2>Fully Responsive Design</h2>
    <p>When you see a theme created by Boostrap,you
       known that the theme <br /> will lock great on anyb 
     device Whether,its  a phone ,tablet or desktopthe page will behaveResponsive! </p>
    </div>
    </div>
    <div style={{height:"20%",width:"50%"}} >
    <img className='list' src={image2} alt="" />
    </div>
  </div>
    
    
    </>
}
const Sixth_component = ()=>{
    return <>
    <div  style={{textAlign:"center",marginTop:"20px", marginBottom:"20px"}} ><h2>Whats people are saying..</h2></div>

  <div style={{display:"flex",justifyContent:"space-arpund",alignItems:"center",paddingBottom:"60px"}} >
  <div style={{ paddingLeft:"100px",display:"inline-block", textAlign:"center"}} >
    <img className='picture' src={pic1} alt="" />
    <h2>Margaret E</h2>
    <p>"Boostarp is amazing! I have been <br />
        using it to create lots of super <br />
        nice landing pages"
    </p>
    </div>
    <div style={{display:"inline-block", textAlign:"center"}} >
    <img className='picture' src={pic2} alt="" />
    <h2>Fred F</h2>
    <p>"Boostarp is amazing! I have been <br />
        using it to create lots of super <br />
        nice landing pages"
    </p>
    </div>
    <div style={{display:"inline-block", textAlign:"center"}} >
    <img className='picture' src={pic3} alt="" />
    <h2>Sara W</h2>
    <p>"Boostarp is amazing! I have been <br />
        using it to create lots of super <br />
        nice landing pages"
    </p>
    </div>

  </div>
 

    
    </>
}
const Seventh_component =()=>{
return <>
  <div style={{marginTop:"5%",marginBottom:"5%",color:"white"}} >
    <h1>Generate more leads with a <br />
    professional landing page!</h1>
    <div style={{marginTop:"10px"}} >
    <input style={{padding:"10px",width:"250px",borderRadius:"10px",borderColor:"white",marginRight:"10px"}} type="text" placeholder="Email Address" />
    <button className="btn">Submit</button>
    </div>
    </div>

</>
}
const Eight_component =()=>{
    return <>
    <div className='main1'>
        <div style={{listStyleType:"none"}} >
        
            <div style={{display:"flex",color:"#0096FF"}}>
            <li style={{paddingRight:"10px",textDecorationLine:"underline"}} >About</li>
            <li style={{paddingRight:"10px",textDecorationLine:"underline"}} >Contact</li>
            <li style={{paddingRight:"10px",textDecorationLine:"underline"}} >Term of use </li>
            <li style={{paddingRight:"10px",textDecorationLine:"underline"}} >Privacy Policy</li> 
            </div>
            <p style={{marginTop:"7px"}} >@Youe Website 2023.All right reserved..</p>
            
        
        </div>
        <div className='icons' > 
        <i style={{marginRight:"20px"}} class="fa-brands fa-facebook"></i>
        <i style={{marginRight:"20px"}} class="fa-brands fa-twitter"></i>
        <i style={{marginRight:"20px"}} class="fa-brands fa-instagram"></i>
        </div>
    </div>
    
    
    </>
}





export  {First_component,Second_component,Third_Component,Forth_component,Fifth_component,Component,Sixth_component,Seventh_component,Eight_component};