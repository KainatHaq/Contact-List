const contacts = [
    {
      id: 1,
      name: "Kainat",
      gmail: "kainathaq52@gmail.com",
    },
    {
      id: 2,
      name: "Islam",
      gmail: "islamulhaq2811@gmail.com",
    },
    {
      id: 3,
      name: "Amin",
      gmail: "aminulhaq222@gmail.com",
    },
  ];
  
  function renderContacts(contacts) {
    const contactList = document.getElementById("contact-List");
    contactList.innerHTML = "";
    for (const contact of contacts) {
      const contactDiv = document.createElement("div");
      contactDiv.className = "contact";
      contactDiv.innerHTML = `
      <b>${contact.name}</b>
      <p>${contact.gmail}</p>
      `;
      contactList.appendChild(contactDiv);
    }
  }
  function filterContacts() {
    const filterInput = document
      .getElementById("filter-input")
      .value.toLowerCase();
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterInput)
    );
    renderContacts(filterContacts);
  }
  renderContacts(contacts);
  document.getElementById('filter-button').addEventListener('click', filterContacts);
  