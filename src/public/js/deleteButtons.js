const btnDelete = document.querySelectorAll('.delete')

if(btnDelete){
    const btnArray = Array.from(btnDelete);
    btnArray.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if(!confirm('Are you sure you want to delete it?')){
                e.preventDefault()
            }
        });
    });
}