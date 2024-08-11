let bagItem;
onload();

function onload(){
let bagItemstr=localStorage.getItem('bag_Item');
bagItem=bagItemstr ?JSON.parse(bagItemstr):[];
displayItemsOnHomePage();
displayBagItemCount();
}

function addToBag(itemId){
bagItem.push(itemId);
localStorage.setItem('bag_Item',JSON.stringify(bagItem))
displayBagItemCount();
}
function displayBagItemCount(){
 let bagItemCount=document.querySelector('.bagItemsCount') ;
 if (bagItem.length>0){
  bagItemCount.style.visibility='visible';
  bagItemCount.innerText=bagItem.length;
 }else{
  bagItemCount.style.visibility='hidden';
 }
}
function displayItemsOnHomePage(){
  let itemsContainerElement=document.querySelector('.items_container');
  if (!itemsContainerElement){
    return;
  }
  let innerHtml='';
  items.forEach(item => {
    innerHtml +=`
    <div class="item_container" >
          <img class="item_image"src="${item.image}" alt="item-image">
          <div class="rating">
                  ${item.rating.stars}⭐ | ${item.rating.count}
          </div>
          <div class="company_name">${item.company}</div>
          <div class="item_name">${item.item_name}</div>
          <div class="price">
            <span class="current_price">Rs ${item.current_price}</span>
            <span class="original_price">Rs ${item.original_price}</span>
            <span class="discount_price">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to bag</button>
      </div>`
  });
  itemsContainerElement.innerHTML=innerHtml;
  
}
