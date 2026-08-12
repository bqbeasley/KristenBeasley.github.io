const treeOfKnowledgeAndEvil= document.querySelector('#tree-of-knowledge-and-evil');

const devilTerm = document.querySelector('#devil-term');
const temptation = document.querySelector('#temptation');

var fruitEaten = false;
treeOfKnowledgeAndEvil.addEventListener("keydown",function(event) {
	const inputText = treeOfKnowledgeAndEvil.value;
	const inputSize = inputText.length;
	if(!fruitEaten){
	if(inputSize === 0) {
		devilTerm.style.boxShadow="4px 8px 4px #6A5C5D";
	}
	if(inputSize === 1) {
		devilTerm.style.boxShadow ="3px 7px 3px #6A5C6D";
	}
	if(inputSize === 2) {
		devilTerm.style.boxShadow = "2px 5px 2px #6A5C6D";
	}
	if(inputSize === 3) {
		devilTerm.style.boxShadow = "1px 3px 1px #6A5C6D";
	}
	if(inputSize >= 10) {
		devilTerm.style.boxShadow = " 0px 0px 0px"
		devilTerm.classList.toggle('large');
		fruitEaten = true;
		temptation.innerHTML = "Yes, it is safe. Hit enter when you're ready."
	} 
	}
});
