import React, {useState} from "react";

const styleinput={height:40, width:470,}
function DisplayForm({onSubmit}) {
  const [formData, setFormData]=useState({
    petName:"",
    petType:"",
    breed:"",
    yourName:"",
    email:"",
    phone:""
  });

  function handleChange(change){
    setFormData({ ...formData,[change.target.name]:change.target.value})
  }
  function handleSubmit(){
    onSubmit(formData);
    setFormData({
        petName:"",
    petType:"",
    breed:"",
    yourName:"",
    email:"",
    phone:""


    });
  }
  return (
    <div
      style={{
        width: 570,
        height: "100%", // now fills wrapper height exactly
        backgroundColor: "rgba(202, 134, 134, 0.5)",
         borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

        borderColor: "gray",
        borderWidth: 1,
        padding: 20,
        boxSizing: "border-box",
        overflowY: "auto",
        
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" ,paddingLeft:25, paddingTop:10,}}>

     <div >
      <h4 style={{color:"rgba(30, 30, 31, 0.61)" ,marginBottom:10, fontSize:20}}>Pet Name</h4>
      <input type="text" value={formData.petName} onChange={handleChange} placeholder="  Pet Name" name="petName" style={styleinput} />
     </div>

     <div >
      <h4 style={{color:"rgba(30, 30, 31, 0.61)", marginBottom:10, fontSize:20}}>Pet Type</h4>
       <select
            name="petType"
            value={formData.petType} onChange={handleChange}
           
            style={styleinput}
          >
            <option value="">-- Select Pet Type --</option>
            <option value="Dog">Dog</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Cat">Cat</option>
            <option value="Goat">Goat</option>
            <option value="Hamster">Hamster</option>
            <option value="Raccoon">Raccoon</option>
          </select>

      
     </div>
     <div >
      <h4 style={{color:"rgba(30, 30, 31, 0.61)", marginBottom:10, fontSize:20}}>Breed</h4>
      <input type="text"value={formData.breed} onChange={handleChange} placeholder="  Breed" name="breed" style={styleinput}/>

     </div>
     <div >
      <h4 style={{color:"rgba(30, 30, 31, 0.61)", marginBottom:10, fontSize:20}}>Your Name</h4>
      <input type="text"value={formData.yourName} onChange={handleChange} placeholder="  Your Name" name="yourName" style={styleinput} />

     </div>
     <div >
      <h4 style={{color:"rgba(30, 30, 31, 0.61)", marginBottom:10, fontSize:20}}>Email</h4>
      <input type="Email" value={formData.email} onChange={handleChange} placeholder="  Email" name="email" style={styleinput}/>

     </div>
     <div >
      <h4 style={{color:"rgba(30, 30, 31, 0.61)", marginBottom:10, fontSize:20}}>phone</h4>
      <input type="number"value={formData.phone} onChange={handleChange} placeholder="  Phone"  name="phone"style={styleinput}/>

     </div >
     <div style={{paddingTop:5}}>

     <button style={{height:40, width:470 , backgroundColor:"rgba(200, 44, 44, 0.5)", fontSize:20}}onClick={handleSubmit}>Submit</button>
     </div>
    </div>
      </div>
  );
}

export default DisplayForm;