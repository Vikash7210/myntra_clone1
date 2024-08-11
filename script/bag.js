const CONVENIENCE_FEE=99;
let bag_items=[];
onload();
function onload(){
  loadBagItemObject();
  displaybagSummary();
  displayBagItems();
}
function displaybagSummary(){
  let totalProduct=bag_items.length;
  let totalMRP=0;
  let totalDiscount=0;
  let totalPayableAmount=0;
  bag_items.forEach(bagItem =>{
    totalMRP+=bagItem.original_price;
    totalDiscount+=bagItem.original_price-bagItem.current_price;
  } );
  totalPayableAmount=totalMRP-totalDiscount+CONVENIENCE_FEE;

  let bagSummaryContainer=document.querySelector(".bag-summary");
  bagSummaryContainer.innerHTML=`
  <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalProduct} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹ ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹${CONVENIENCE_FEE}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹${totalPayableAmount}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
  `;
}
function removeItemsFromBag(itemId){
  bagItem=bagItem.filter(bagItemId => bagItemId!=itemId);
  loadBagItemObject();
  displayBagItemCount();
  displayBagItems();
  displaybagSummary();
}
function loadBagItemObject(){
  bag_items=bagItem.map(ItemId => {
    for(let i=0;i<items.length;i++){
      if (ItemId==items[i].id){
        return items[i];
      }
    }
  });
  
}
function displayBagItems(){
let bagItemsContainer=document.querySelector('.bag-items-container')
let inner_html=``;
bag_items.forEach(bagItemObject => {
   inner_html+=generateInnerHtml(bagItemObject);
});
bagItemsContainer.innerHTML=inner_html;
}
function generateInnerHtml(item){
return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeItemsFromBag(${item.id})" >X</div>s
          </div>
`;
}
