const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag  = document.getElementsByClassName("shoppingListContainers")[0];

let productId = 1;
const handleChange = (e) => {
const inputValue  = e.target.value;
const productContainer =  document.createElement("div");
productContainer.classList.add("productContainers");
const parentDiv = document.createElement("div");
parentDiv.classList.add("productName");
{/* <i class="fa-solid fa-trash-can"></i> */}
parentDiv.addEventListener("click", () => {
       const classExist = parentDiv.classList.contains("purchased");
       if(classExist === true) {
                parentDiv.classList.remove("purchased");
       } else {
                parentDiv.classList.add("purchased");

       }
});
const spanTag = document.createElement("span");
const trashIcon = document.createElement("i");
trashIcon.classList.add("fa-solid","fa-trash-can"); // notice two class.
trashIcon.addEventListener("click", () => {
       productContainer.remove();
});
spanTag.id = productId;
const product = productId.toString() + ". " + inputValue;
spanTag.append(product);
parentDiv.append(spanTag);
productContainer.append(parentDiv,trashIcon);
shoppingListTag.append(productContainer);
inputTag.value = "";
productId += 1;
};
inputTag.addEventListener("change",handleChange);
