class Nodo {
    constructor(dato){
        this.dato = dato;
        this.sig = null;
        this.ant = null;
        this.hi = null;
        this.hd = null;
    }
}
class ArbolBinario{
    constructor(){
        this.raiz = null;
        this.primero = null;
        this.ultimo = null;
    }
    agregarNodo(nuevo){
        if (this.primero == null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
       
         }
         this.ultimo.sig = nuevo;
         nuevo.ant = this.ultimo;
         this.ultimo = nuevo;
    }
    expresionToListas(expresion){
        let vectorExpresion = expresion.split(''); 
        
        for (let i = 0; i < vectorExpresion.length; i++) {
            this.agregarNodo(new Nodo(vectorExpresion[i]));
        }
    }
    generarArbolBinaro(){
        let temp = this.primero;
        while (temp) {
            if (temp.dato == '*' || temp.dato == '/') {
                temp.hi = temp.ant;
                console.log(`${temp.ant.dato} ahora es el hijo izquierdo de ${temp.dato}`);
                temp.hd = temp.sig;
                console.log(`${temp.sig.dato} ahora es el hijo derecho de ${temp.dato}`);
                if (temp.hi.dato === this.primero.dato || temp.hd.dato === this.primero.dato) {
                    this.primero = temp;
                }
                if (temp.sig.sig != null) { 
                    temp.sig.sig.ant = temp;
                    temp.sig = temp.sig.sig;
                }else{
                    temp.sig = null;
                }
                if (temp.ant.ant != null) {
                    temp.ant.ant.sig = temp;
                    temp.ant = temp.ant.ant; 
                }else{
                    temp.ant = null;
                }
                
            }
            temp = temp.sig;
        }
        temp = this.primero
        while (temp) {
            if (temp.dato == '+' || temp.dato == '-') {
                temp.hi = temp.ant;
                console.log(`${temp.ant.dato} ahora es el hijo izquierdo de ${temp.dato}`);
                temp.hd = temp.sig;
                console.log(`${temp.sig.dato} ahora es el hijo derecho de ${temp.dato}`);
                if (temp.hi.dato === this.primero.dato || temp.hd.dato === this.primero.dato) {
                    this.primero = temp;
                }
                if (temp.sig.sig != null) { 
                    temp.sig.sig.ant = temp;
                    temp.sig = temp.sig.sig;
                }else{
                    temp.sig = null;
                }
                if (temp.ant.ant != null) {
                    temp.ant.ant.sig = temp;
                    temp.ant = temp.ant.ant; 
                }else{
                    temp.ant = null;
                }
                
            }
            temp = temp.sig;
        }
            this.raiz = this.primero;     
    }
    inOrder(){
        if (this.raiz == null) {
            return'No hay nodos en el arbol binario';
        }else{
            return inOrderRec(this.raiz, new Array());
        }
        function inOrderRec(nodoX, array){
            if (nodoX.hi != null){
                inOrderRec(nodoX.hi, array);
            }    
            array.push(nodoX.dato);
            if (nodoX.hd != null){
                inOrderRec(nodoX.hd, array);
            }
            return array;
    
        }   
    }
    preOrder(){
        if (this.raiz == null) {
            return'No hay nodos en el arbol binario';
        }else{
            return preOrderRec(this.raiz, new Array());
        }
        function preOrderRec(nodoX, array){

            if (nodoX!= null){
                array.push(nodoX.dato);
            }    
            if (nodoX.hi != null){
                preOrderRec(nodoX.hi, array);
            }
            if (nodoX.hd != null){
                preOrderRec(nodoX.hd, array);
            }
            return array;
    
        }   
    }
    postOrder(){
        if (this.raiz == null) {
            return'No hay nodos en el arbol binario';
        }else{
            return postOrderRec(this.raiz, new Array());
        }
        function postOrderRec(nodoX, array){

            if (nodoX.hi!= null){
                postOrderRec(nodoX.hi, array);
            }    
            if (nodoX.hd != null){
                postOrderRec(nodoX.hd, array);
            }
            if (nodoX != null){
               array.push(nodoX.dato);
            }
            return array;
    
        }   
    }
    resultadoPostOrder(){
        let expresionPostOreder = this.postOrder();
        let resultadoPostOrder = [];
       for (let i = 0; i < expresionPostOreder.length ; i++) {
            switch (expresionPostOreder[i]) {
                case '*':
                    resultadoPostOrder[resultadoPostOrder.length-2] = parseFloat((resultadoPostOrder[resultadoPostOrder.length-2])) * parseFloat((resultadoPostOrder[resultadoPostOrder.length-1]));
                    resultadoPostOrder.pop();
                    break;
                case '/':
                    resultadoPostOrder[resultadoPostOrder.length-2] = parseFloat((resultadoPostOrder[resultadoPostOrder.length-2])) / parseFloat((resultadoPostOrder[resultadoPostOrder.length-1]));
                    resultadoPostOrder.pop();
                    break;
                case '+':
                    resultadoPostOrder[resultadoPostOrder.length-2] = parseFloat((resultadoPostOrder[resultadoPostOrder.length-2])) + parseFloat((resultadoPostOrder[resultadoPostOrder.length-1]));
                    resultadoPostOrder.pop();
                    break;
                case '-':
                    resultadoPostOrder[resultadoPostOrder.length-2] = parseFloat((resultadoPostOrder[resultadoPostOrder.length-2])) - parseFloat((resultadoPostOrder[resultadoPostOrder.length-1]));
                    resultadoPostOrder.pop();
                    break;    
                default:
                    resultadoPostOrder.push(expresionPostOreder[i]);
                    break;
            }
       }
       return resultadoPostOrder[0];
    }
    resultadoPreOrder(){
        let expresionPreOrder = this.preOrder();
        let resultadoPreOrder = [];
       for (let i = expresionPreOrder.length-1; i >-1 ; i--) {
            switch (expresionPreOrder[i]) {
                case '*':
                    resultadoPreOrder[resultadoPreOrder.length-2] = parseFloat((resultadoPreOrder[resultadoPreOrder.length-1])) * parseFloat((resultadoPreOrder[resultadoPreOrder.length-2]));
                    resultadoPreOrder.pop();
                    break;
                case '/':
                    resultadoPreOrder[resultadoPreOrder.length-2] = parseFloat((resultadoPreOrder[resultadoPreOrder.length-1])) / parseFloat((resultadoPreOrder[resultadoPreOrder.length-2]));
                    resultadoPreOrder.pop();
                    break;
                case '+':
                    resultadoPreOrder[resultadoPreOrder.length-2] = parseFloat((resultadoPreOrder[resultadoPreOrder.length-1])) + parseFloat((resultadoPreOrder[resultadoPreOrder.length-2]));
                    resultadoPreOrder.pop();
                    break;
                case '-':
                    resultadoPreOrder[resultadoPreOrder.length-2] = parseFloat((resultadoPreOrder[resultadoPreOrder.length-1])) - parseFloat((resultadoPreOrder[resultadoPreOrder.length-2]));
                    resultadoPreOrder.pop();
                    break;    
                default:
                    resultadoPreOrder.push(expresionPreOrder[i]);
                    break;
            }
       }
       return resultadoPreOrder[0];
    }
}

let arbolBinario = new ArbolBinario();
arbolBinario.expresionToListas("1+9*8-5/2");
console.log(arbolBinario.generarArbolBinaro());
console.log(`InOrder : ${arbolBinario.inOrder()}`);
console.log(`PreOrder : ${arbolBinario.preOrder()}`);
console.log(`PostOrder : ${arbolBinario.postOrder()}`);
console.log(`Resultado PostOrder : ${arbolBinario.resultadoPostOrder()}`);
console.log(`Resultado PreOrder : ${arbolBinario.resultadoPreOrder()}`);








