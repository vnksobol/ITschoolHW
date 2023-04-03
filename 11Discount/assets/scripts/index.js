let priceItem1 = document.getElementById('item1'); 
let priceItem2 = document.getElementById('item2');
let priceItem3 = document.getElementById('item3');
let priceItem4 = document.getElementById('item4');
let priceItem5 = document.getElementById('item5'); 
const btn = document.querySelector('#btn');

const sumPriceTotal = () => {
	return (+priceItem1.textContent + +priceItem2.textContent + +priceItem3.textContent + +priceItem4.textContent + +priceItem5.textContent);
};

total.textContent = sumPriceTotal();

const discountTotal = showPrice => {
	let showNewPrice = +showPrice.textContent * 0.8;
	return showPrice.textContent = showNewPrice;
};

function wrapperToDiscount() {
	discountTotal(priceItem1);
	discountTotal(priceItem2);
	discountTotal(priceItem3);
	discountTotal(priceItem4);
	discountTotal(priceItem5);
	changeBtnText();
	total.textContent = sumPriceTotal();
}

btn.addEventListener('click', wrapperToDiscount);

function changeBtnText() {
	let buttonText = document.getElementById('buttontext');
	buttonText.textContent = 'Купон использован';
  }

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'rgb(227, 91, 12)';
});
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'rgb(0, 0, 0)';
});