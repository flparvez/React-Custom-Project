import React from 'react';

const PostData = () => {

   


let myImage = null
function handleImage(e){
    myImage = e.target.files[0];
    // console.log(myImage);
}

function handleSubmit(e){
    e.preventDefault();
    let user = document.getElementById('user').value;
    let content = document.getElementById('content').value;
    let form_data = new FormData();
    form_data.append('user',user);
    form_data.append('content', content);
    form_data.append('image', myImage);




axios.post("http://127.0.0.1:8000/apiV1/status/", form_data,{
    header: {
       "Content-Type":"multipart/form-data"
    }
}).then(Response => console.log(Response))
// .then(data => console.log(data))


}


    return (
        <div>
           <form className='text-center bg-slate-400' id="myFrom" onSubmit={handleSubmit} >

<input  type="number" value="2" id="user"/>
<br/>
<input className='mt-5' type="text"  id="content"/>
<br/>
<input type="file" id="image" onChange={handleImage}/>
<br/>
<button type="submit" id="submit" >Submit</button>
</form>
        </div>
    );
};

export default PostData;