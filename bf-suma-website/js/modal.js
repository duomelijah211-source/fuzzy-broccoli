const modal = document.getElementById("productModal");

const closeModal = document.getElementById("closeModal");

function attachModalEvents(){

    document.querySelectorAll(".view-product").forEach(button=>{

        button.addEventListener("click",()=>{

            const id = Number(button.dataset.id);

            const product = products.find(p=>p.id===id);

            document.getElementById("modalImage").src = product.image;

            document.getElementById("modalTitle").textContent = product.name;

            document.getElementById("modalCategory").textContent = product.category;

            document.getElementById("modalPrice").textContent = product.price;

            document.getElementById("modalDescription").textContent = product.description;

            document.getElementById("modalWhatsapp").href =
            `https://wa.me/254141976773?text=${encodeURIComponent("Hello Mr. Duom, I'm interested in " + product.name)}`;

            modal.classList.add("active");

        });

    });

}

closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

});