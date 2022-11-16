let productName =document.getElementById('productNameInp');
let productPrice =document.getElementById('productPriceInp');
let productcategory =document.getElementById('productCategoryInp');
let productDesc =document.getElementById('productDescInp');
let addBtn=document.getElementById('addbtn');
let searchInp =document.getElementById('searchInp');
let productContainer ;
let currentIndex=0;
if ( localStorage.getItem('ProductInfo') !=null )
{
   productContainer = JSON.parse( localStorage.getItem('ProductInfo')) 
   displayProduct()
}
else
{
   productContainer=[] 
}
addBtn.onclick=function()
{

   if(addBtn.innerHTML='Add Product')
   {
      addProduct()
   }
   else
   {
    updateProduct()
   }
   displayProduct()
  
   clearForm()
   
}

///////////////////////////////////////////////

function clearForm()
{
   productName.value='';
   productPrice.value='';
   productcategory.value='';
   productDesc.value='';
}
//////////////////////////////////////////////

function addProduct()
{
    let product =
    {
      name: productName.value,
      price: productPrice.value,
      category: productcategory.value,
      description: productDesc.value 
    };
    productContainer.push(product)
    localStorage.setItem('ProductInfo',JSON.stringify(productContainer))
   
}
//////////////////////////////////////////////////////////////////

 function displayProduct()
 {
    var cartona=``;
    for(let i =0 ; i< productContainer.length; i++ )
    {
      cartona+=` <tbody>
        
          <td>${productContainer[i].name}</td>
          <td>${productContainer[i].price}</td>
          <td>${productContainer[i].category}</td>
          <td>${productContainer[i].description}</td>
          <td><button  onclick="getProductInfo(${i})" class="btn btn-outline-warning">Update</button></td>
          <td><button  onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
          </tbody> `
      
    }
    document.getElementById('tabledata').innerHTML=cartona;
 }
/////////////////////////////////////////////////////////////////////////////////
 function search(searchTerm)
 {
   
   var cartona=``;
   for(let i =0 ; i< productContainer.length; i++ )

   if (productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()))
   {
     cartona+=` <tbody>
        
         <td>${productContainer[i].name}</td>
         <td>${productContainer[i].price}</td>
         <td>${productContainer[i].category}</td>
         <td>${productContainer[i].description}</td>
         <td><button class="btn btn-outline-warning">update</button></td>
         <td><button class="btn btn-outline-danger">delete</button></td>
         </tbody> `
     
   }
   document.getElementById('tabledata').innerHTML=cartona; 
}
///////////////////////////////////////////////////////////////////////////
  function deleteProduct(index)
  {
   currentIndex=index;
   productContainer.splice(index,1)
  localStorage.setItem('ProductInfo',JSON.stringify(productContainer))
   displayProduct()
  }
  ////////////////////////////////////////////////////////////////////

  function getProductInfo(index)
  {
   currentIndex=index;
   var currentProduct=productContainer[index];
   productName.value=currentProduct.name;
   productPrice.value=currentProduct.price;
   productcategory.value=currentProduct.category;
   productDesc.value=currentProduct.description;
   addBtn.innerHTML="Update Product";
  }

  //////////////////////////////////////////////////

function updateProduct()
{
   let product =
   {
     name: productName.value,
     price: productPrice.value,
     category: productcategory.value,
     description: productDesc.value 
   };
   productContainer[currentIndex]=product;
   localStorage.setItem('ProductInfo',JSON.stringify(productContainer));
   addBtn.innerHTML = 'Add product';
   alert(currentIndex)
}

////////////////////////////////////////////

var nameAlert = document.getElementById('nameAlert');
    productName.onkeyup = function () {
   var nameRejex = /[a-z]{2,9}$/;
   if (nameRejex.test(productName.value))    //lw tmm(valid)
   {
     addBtn.removeAttribute('disabled');
    productName.classList.add('is-valid');
  productName.classList.remove('is-invalid');

   }
   else    //lw m4 tmm(not valid)
   {
     addBtn.disabled = true;
    productName.classList.add('is-invalid');
    productName.classList.remove('is-valid');
   //  nameAlert.classList.remove('d-none');
   }
 }