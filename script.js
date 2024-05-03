fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        renderUI(data);
        const az = document.getElementById('az');
        const cox = document.getElementById('cox');
        const searchButton = document.getElementById('searchButton');
        const searchInput = document.getElementById('searchInput');

         searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim().toLowerCase();

            searchButton.addEventListener('click', () => {
              const searchTerm = searchInput.value.toLowerCase();
              const filteredData = data.filter(product => {
                  return product.title.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
              });
              renderUI(filteredData);
          });
        ;
        
        }
         )

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click(); 
            }
        });
    });

    az.addEventListener('click', (e) => {
      e.preventDefault();
      let salam = data.sort((a, b) => { return a.price - b.price });
      renderUI(salam);
  });

  cox.addEventListener('click', (e) => {
      e.preventDefault();
      let sagol = data.sort((a, b) => { return b.price - a.price });
      renderUI(sagol);
  });
    function renderUI(list) {
      let card = document.getElementById("card");
      let innerHTML = "";
      for (let i = 0; i < list.length; i++) {
          innerHTML +=
              `<div class="col-md-4 mb-4">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <img style="width:200px" src="${list[i].image}">
                          <h5 class="card-title">${list[i].title}</h5>
                          <p class="card-text">${list[i].description}</p>
                          <p class="card-text">${list[i].price}$</p>
                      </div>
                  </div>
              </div>`;
      }
      card.innerHTML = innerHTML;
}
       