# 📐 Cube & Math Operations  

[![Author](https://img.shields.io/badge/Author-Gauri%20Shankar%20Katara-blue)](#)  
[![Date](https://img.shields.io/badge/Date-2025--09--04-brightgreen)](#)  
[![Language](https://img.shields.io/badge/Language-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)](#)  

---

## 🚀 Live Demo  
🔗 Click below to view projects:  
- [Smart Calculator](https://kgshankar527.github.io/My-projects/Project1/)  
- [Square](https://kgshankar527.github.io/My-projects/Project2/)  
- [Cube Calculations](https://kgshankar527.github.io/My-projects/Project3/)  
- [To Do List](https://kgshankar527.github.io/My-projects/To-do-list/)  
- [Form Validation](https://kgshankar527.github.io/My-projects/Form-validation/)  
- [Countdown Timer](https://kgshankar527.github.io/My-projects/Countdown-Timer/)  
- [Magic Menu](https://kgshankar527.github.io/My-projects/Magic-menu/)  
- [Loop use ATM](https://kgshankar527.github.io/My-projects/Mini-ATM/)  
- [Sliding-sign in-up](https://kgshankar527.github.io/My-projects/Sliding-signin-up/)  

---

## 🔢 Math Examples  

### 🔲 Squares & Cubes  
- Input: **5** → Square = 25, Cube = 125  
- Input: **9** → Square = 81, Cube = 729  
- Input: **12** → Square = 144, Cube = 1728  

---

### ➗ Arithmetic Operations  
**Inputs: (20, 4)**  
- ➕ Addition = 24  
- ➖ Subtraction = 16  
- ✖ Multiplication = 80  
- ➗ Divide = 5  
- 🔗 Remainder = 0  

**Inputs: (15, 7)**  
- ➕ Addition = 22  
- ➖ Subtraction = 8  
- ✖ Multiplication = 105  
- ➗ Divide = 2.142857  
- 🔗 Remainder = 1  

**Inputs: (100, 25)**  
- ➕ Addition = 125  
- ➖ Subtraction = 75  
- ✖ Multiplication = 2500  
- ➗ Divide = 4  
- 🔗 Remainder = 0  

---

## 🎲 Random Data  

### Random Numbers  
- Between (1–10): 3, 7, 9  
- Between (50–100): 64, 77, 92  
- Between (100–999): 145, 678, 932  

### Random Math Example  
- Random Input = **8**  
  - Square = 64  
  - Cube = 512  

---

## 🧮 Loop Examples  

### For Loop, While loop, Do & while loop (1 to 10 Squares)  
```javascript 
    let correctPin = "1234";
    let attempts = 0;
    let balance = 10000;
    let screen = document.getElementById("screen");

    function pressNum(num) {
      document.getElementById("pinInput").value += num;
    }

    function clearInput() {
      document.getElementById("pinInput").value = "";
    }

    function submitPin() {
      let pin = document.getElementById("pinInput").value;
      attempts++;

      if (pin === correctPin) {
        screen.innerHTML = "✅ Access Granted!<br>Select Option:";
        document.getElementById("pinInput").classList.add("hidden");
        document.getElementById("keypad").classList.add("hidden");
        document.getElementById("menu-section").classList.remove("hidden");
      } else {
        if (attempts >= 3) {
          screen.innerHTML = "🚫 Card Blocked!";
          document.getElementById("pinInput").disabled = true;
        } else {
          screen.innerHTML = "❌ Wrong PIN! Attempts left: " + (3 - attempts);
          clearInput();
        }
      }
    }

    function checkBalance() {
      screen.innerHTML = "💰 Your Balance is ₹" + balance;
    }

    function withdrawMoney() {
      let amount = prompt("Enter amount to withdraw:");
      amount = Number(amount);
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        screen.innerHTML = "✅ Withdraw ₹" + amount + " successful.<br>Remaining Balance: ₹" + balance;
      } else {
        screen.innerHTML = "⚠️ Invalid amount or insufficient balance!";
      }
    }

    function exitATM() {
      screen.innerHTML = "👋 Thank you for using our ATM!";
      setTimeout(() => {
        location.reload();
      }, 2000);
    }


