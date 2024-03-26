// Array to store customers
let customers = [];

// Add event listener to form submit
document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var membershipType = document.getElementById('membershipType').value;

    // Create new customer object
    var customer = {
        name: name,
        email: email,
        phone: phone,
        membershipType: membershipType
    };

    // Add customer to list
    customers.push(customer);

    // Update customer list
    updateCustomerList();

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('membershipType').value = 'monthly';
});

// Function to update customer list
function updateCustomerList() {
    var list = document.getElementById('list');
    list.innerHTML = ''; // Clear previous list

    customers.forEach(function(customer, index) {
        var item = document.createElement('li');
        item.innerHTML = '<strong>' + customer.name + '</strong> - Email: ' + customer.email + ', Phone: ' + customer.phone + ', Membership Type: ' + customer.membershipType;
        
        // Add delete button
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function() {
            deleteCustomer(index);
        });
        item.appendChild(deleteBtn);

        list.appendChild(item);
    });
}

// Function to delete customer
function deleteCustomer(index) {
    customers.splice(index, 1); // Remove customer from array
    updateCustomerList(); // Update customer list
}

