function clearScreen() {
    document.getElementById('result').value = '';
  }
  
  function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    try {
      document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (e) {
      document.getElementById('result').value = 'Error';
    }
  }
  
  function calculateSquareRoot() {
    try {
      document.getElementById('result').value = Math.sqrt(eval(document.getElementById('result').value));
    } catch (e) {
      document.getElementById('result').value = 'Error';
    }
  }
  