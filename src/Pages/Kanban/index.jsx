import React from 'react'
import Column from '../../Components/Column'
import { jsPDF } from "jspdf";
const index = () => {
const handleCanvasDownload = async () => {
  const pdf = new jsPDF("portrait", "pt", "a4");
  const data = await document.querySelector("#htmlCanvas");
  data.style.display= "block";
  
  pdf.html(data).then(() => {
    pdf.save("solution.pdf");
  });
  setTimeout(() => {
    data.style.display= "none";
  }, 0);

  
}

  return (
    <>
    <div style={{height: "100vh", backgroundColor: 'pink', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
      <h1 style={{width: '50vw', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>Content!!</h1> 
    <button style={{width: '10vw', height: '8vh', backgroundColor: 'gold', borderRadius: '10vh'}} onClick={() => handleCanvasDownload()}>Download</button>
    </div>
    <div  id="htmlCanvas" style={{width: '60%', display: "none"}} >
      < Column />
        <Column />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi necessitatibus voluptas aliquam sapiente unde officia vero animi. Consequuntur, eveniet ad. Sint corporis facere reprehenderit quia omnis cupiditate animi excepturi!
        Consequatur aliquam tenetur numquam in eius officia, quasi sit explicabo reprehenderit cupiditate quam adipisci quisquam hic a delectus illo accusamus repellat ipsum nobis eaque magni consectetur! Non assumenda totam dolor.
        Fuga eos explicabo architecto minus labore minima qui, iure impedit accusamus! Blanditiis nisi sit vitae laborum, doloribus voluptatum placeat! Inventore mollitia hic reiciendis iure porro dicta corporis quis consequatur pariatur!
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />
      Line #1 <br />
      Line #2 <br />

</div>
    </>
  )
}

export default index