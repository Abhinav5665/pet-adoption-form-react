import React, {useState} from "react";
import HeaderComponenet from "./components/headercomponent";
import DisplayForm from "./components/displayform";
import DataTable from "./components/datatable";



function App() {

 const[data, setdata]=useState([]);
   const [showTable, setShowTable] = useState(false); 

 function handleFormSubmit(formData){
  setdata([...data, formData]);
  setShowTable(true);
 }

   function handleGoBack() {
    setShowTable(false);            // switch back to form view
  }




  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1518717758536-85ae29035b6d)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
      }}
    >
      <HeaderComponenet header="Pet Adoption Form" />

      {/* Wrapper adds spacing instead of card margin */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // spacing around card
          paddingTop:30,
          boxSizing: "border-box",
          height: "calc(100vh - 80px)", // fill remaining space below header
        }}
      >
         {(() => {
    if (showTable) {
      return <DataTable data={data} onGoBack={handleGoBack} />;
    } else {
      return <DisplayForm onSubmit={handleFormSubmit} />;
    }
  })()}

       
      </div>

 
    </div>
  );
}





export default App;