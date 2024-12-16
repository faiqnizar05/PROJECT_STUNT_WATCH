// Tambahkan logika atau interaktivitas di sini jika diperlukan
console.log("Stunt Watch website loaded!");

function toggleMenu() {
    const profileBtn = document.querySelector('.profile-btn');
    const profileMenu = document.getElementById('profileMenu');
    const icon = profileBtn.querySelector('i');

    // Toggle visibility of the menu
    profileBtn.classList.toggle('active');
}


// Function to open the modal
function openModal() {
    document.getElementById("consultationModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("consultationModal").style.display = "none";
}

// Function to handle form submission and add data to the table
document.getElementById("consultationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent page reload on form submission

    // Get the input values
    const doctorName = document.getElementById("doctorName").value;
    const consultationTopic = document.getElementById("consultationTopic").value;
    const consultationDate = document.getElementById("consultationDate").value;

    // Create a new row in the table
    const table = document.getElementById("consultationTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    // Insert new cells in the row and add the data
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = consultationDate;
    cell2.textContent = doctorName;
    cell3.textContent = consultationTopic;
    cell4.textContent = "Proses";  // Default status (can be changed if necessary)

    // Clear the form fields
    document.getElementById("consultationForm").reset();

    // Close the modal
    closeModal();
});

// Close the modal if the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target == document.getElementById("consultationModal")) {
        closeModal();
    }
}
