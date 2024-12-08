function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
        return inputNumber;
    }
    
    
    function getTextValueById(id){
    const inputText = document.getElementById(id).innerText;
    const textNumber = parseFloat(inputText);
    return textNumber;
    
    }
    
    
    function showSectionById(id){
        document.getElementById('donate-section').classList.add('hidden');
        document.getElementById('history-section').classList.add('hidden')
    
        // show the section with the provide id as parameter
        document.getElementById(id).classList.remove('hidden')
    }
    
    
    
    
    
    
    