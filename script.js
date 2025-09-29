var slideindex = 1;
showdivs(1);
function plusDivs(n) {
  showdivs((slideindex += n));
}
function showdivs(n) {
  var i;
  var x = document.getElementsByClassName("myslides");
  if (n > x.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideindex - 1].style.display = "block";
}
var flkty = new Flickity(".carousel", {
  wrapAround: true,
  autoPlay: false,
  imagesLoaded: true,
  contain: true,
  friction: 0.01, // Set a very low friction value
  pageDots: false, // Hide the page dots
});
function myfunction() {
  const value1 = document.getElementById("warranty").value;
  const brandDropdown = document.getElementById("Brand");
  const selectedBrand = brandDropdown.options[brandDropdown.selectedIndex].innerText;
  localStorage.setItem("v1", value1);
  localStorage.setItem("v2", selectedBrand);
}

function updateTotalCost() {
  // Get the item count and calculate the total cost
  const itemCount = document.getElementById("itemCount").value;
  const costPerItem = 50; // Replace with your actual cost per item
  const totalCost = itemCount * costPerItem;

  // Update the total cost in the HTML
  document.getElementById("totalCost").innerText = totalCost;

  // Calculate and update payment summary
  const subTotal = totalCost;
  const tax = 0.1 * subTotal; // Assuming 10% tax
  const fee = 5; // Assuming a fixed fee
  const grandTotal = subTotal + tax + fee;

  document.getElementById("subTotal").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("fee").innerText = fee;
  document.getElementById("grandTotal").innerText = grandTotal;
}
// function cellnames() {
//   const spanvalue = document.getElementById("filtration-cell").querySelector("span").innerText;
//   localStorage.setItem("spancontent", spanvalue);
//   document.getElementById("display-drops").style.visibility = "visible";
// }
function cellnames(elementID) {
  const filtrationCell = document.getElementById(elementID);
  var spanValue = filtrationCell.querySelector("span").innerHTML;
  localStorage.setItem("spancontent", spanValue);
  document.getElementById("display-drops").style.visibility = "visible";
}
function toggleForm() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  if (username === "admin" && password === "admin") {
    document.getElementById("loginfloat").style.display = "none";
  } else {
    alert("Please verify Details");
  }

  // Implement your login logic here
  console.log(`Login - Username: ${username}, Password: ${password}`);
}

function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  // Implement your signup logic here
  console.log(`Sign Up - Username: ${username}, Password: ${password}`);
}


function login2() {
            console.log('Login button clicked');
            clearSignUpForm();
            showLoginForm();
        }

        function toggleForm2() {
            const loginForm = document.getElementById('loginForm2');
            const signUpForm = document.getElementById('signUpForm');

            loginForm.style.display = 'none';
            signUpForm.style.display = 'block';
        }

        function signup2() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const city = document.getElementById('city').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;
        const jobTitle = document.getElementById('jobTitle').value;
        const typeOfService = document.getElementById('typeOfService').value;

        console.log(`Sign Up - Full Name: ${fullName}, Email: ${email}, Mobile Number: ${mobileNumber}, City: ${city}, Password: ${password}, Gender: ${gender}, Job Title: ${jobTitle}, Type of Service: ${typeOfService}`);
        }
        function redirectToLogin() {
            console.log('Redirecting to login page...');
            clearSignUpForm();
            showLoginForm();
        }

        function redirectToSignup() {
            console.log('Redirecting to signup page...');
            clearSignUpForm();
            showSignUpForm();
        }

        function clearSignUpForm() {
            const signUpForm = document.getElementById('signUpForm');
            const formElements = signUpForm.getElementsByTagName('input');

            for (let i = 0; i < formElements.length; i++) {
                formElements[i].value = '';
            }
        }

        function showLoginForm() {
            const loginForm = document.getElementById('loginForm2');
            const signUpForm = document.getElementById('signUpForm');

            loginForm.style.display = 'block';
            signUpForm.style.display = 'none';
        }

        function showSignUpForm() {
            const loginForm = document.getElementById('loginForm2');
            const signUpForm = document.getElementById('signUpForm');

            loginForm.style.display = 'none';
            signUpForm.style.display = 'block';
}
function valfun(vID)
{
  var a = document.getElementById(vID).value;
  b = /^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@\w+([\.-]?(\w{2,3}))?(\.\w{2,3})$/;
  if (b.test(a) == true) {
    alert("valid email-id");
  }
  else {
    alert("invalid email-id");
  }
}