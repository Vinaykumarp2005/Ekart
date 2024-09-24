
    // Do not remove the braces; write your code inside the braces.
    let parent=document.querySelector('.parent')
    let cart=document.querySelector('.cart')
  let btn1=document.querySelector('.addcart');
  let carts=[];
  
    //get api
    function getTodosdata(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>{
            // console.log(products)
            
            products.forEach((productsobj)=>{
                parent.innerHTML+=`<div class='col g-2  '>
                
                <div class='card h-100'>
                <div class="card-header h-100 p-1">
                  <img src=${productsobj.image} alt="" width='100%' height="300px">
              </div>
                <div class=' card-body h-100 p-3 text-center shadow'>
                
                <p class='lead '>${productsobj.title}</p>
                <p class='lead '><i class="fa-solid fa-star" style="color: #FFD43B;"></i>${productsobj.rating.rate} (${productsobj.rating.count})</p>
                <p class='lead '> $ ${productsobj.price}</p>
                <button class="btn btn-primary " data-bs-toggle="modal" data-bs-target='#${productsobj.id}'>Description</button>
                      <div class="modal fade" id='${productsobj.id}' data-bs-backdrop="static">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <div class="modal-title fs-3 fw-semibold">Details</div>
                                      
                                      <button class="btn btn-close" data-bs-dismiss="modal"></button>
                                  </div>
                                  <div class="modal-body">
                                      <p class="lead"> ${productsobj.description} </p>
                                      </div>                     
                           </div>
                              
                          </div>
                         
                      </div>
                </div>
                <div class="card-footer mx-auto h-100">
              <button class='btn btn-success addcart' id='${productsobj.id}' >Add to cart</button>
  
  
                </div>
                <div/>
                </div> `
            })
        }).catch(err=>console.log(err))
    }
    
    getTodosdata();
  
  
  
    btn1.addEventListener('click',()=>{
      let ele=products.find(el=>el.id==`${id}`);
      cart.innerHTML+=`<div class='col g-2  '>
                
                <div class='card h-100'>
                <div class="card-header h-100 p-1">
                
                  <img src=${ele.image} alt="" width='100%' height="300px">
              </div>
                <div class=' card-body h-100 p-3 text-center shadow'>
                
                <p class='lead '>${ele.title}</p>
                <p class='lead '><i class="fa-solid fa-star" style="color: #FFD43B;"></i>${ele.rating.rate} (${ele.rating.count})</p>
                <p class='lead '> $ ${ele.price}</p>`
    })
  