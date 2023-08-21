let addBtn=document.querySelector('#add_btn');
let list=document.querySelector('#list');
let editBtn=document.querySelector('#edit_btn');
let deleteBtn=document.querySelector('#delete_btn');
let title=document.querySelector('#book_name')

let data=JSON.parse(localStorage.getItem('title'))?JSON.parse(localStorage.getItem('title')):[];

let index=0;

function showData(){
    title.value = ''
    list.innerHTML = ''
    data.forEach((item,id)=>{
        list.innerHTML+=
        `<li>
        <span class="book_title">${item}</span>
        <div class="btns">
            <a href="#" id="edit_btn"  onclick='editData(${id})'><i class="fa-solid fa-pen"></i></a>
            <hr>
            <a href="#" id="delete_btn"  onclick='deleteData(${id})'><i class="fa-solid fa-trash"></i></a>
        </div>
      </li>`
    
        itemContent=document.querySelectorAll('ul#list>li>span.book_title');
    })
}
function addData(){
    localStorage.setItem('title', JSON.stringify(data))
}
addBtn.addEventListener('click',()=>{
    if(addBtn.innerHTML=='ADD'){
        if(title.value!=''){
            data.push(title.value);
            addData();
            showData();
        }
    } else{
        data[index]=title.value;
        addData();
        showData();
        addBtn.innerHTML='ADD'
    }
})
function editData(id){
    addBtn.innerHTML='Update';
    index=id;
    title.value=data[id];
}
function deleteData(id){
    data.splice(id,1);
    addData();
    showData();
}
showData();
document.addEventListener('keydown', () => {
    title.focus()
  })