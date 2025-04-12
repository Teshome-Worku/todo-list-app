document.addEventListener('DOMContentLoaded', function() {
    let form2 = document.getElementById('form2');
    let unorderedList = document.getElementById('ul');
    let btn = document.getElementById('add');
    let form1 = document.getElementById('form1');
    let delete_all = document.getElementById('delete-all');
    let search = document.getElementById('search');

    function checkSearch() {
        if (unorderedList.children.length > 0) {
            form1.style.display = 'initial';
            delete_all.style.display = 'initial';


        } else {
            form1.style.display = 'none';
            delete_all.style.display = 'none';
        }
    }
    checkSearch();
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let taskValue = form2.elements['text'].value;
        if (taskValue === '') {
            alert('Please enter task you want to add!');
            return;
        }
        let li = document.createElement('li');
        let del = document.createElement('span');
        let task = document.createElement('span');
        li.appendChild(task);
        li.appendChild(del);

        task.classList.add('task');
        del.classList.add('delete')

        task.textContent = taskValue;
        del.innerHTML = '<i class="fas fa-trash-alt"></i>';
        unorderedList.appendChild(li);
        form2.elements['text'].value = '';
        checkSearch();
        del.addEventListener('click', (e) => {
            let li = e.target.closest('li');
            if (li) {
                li.parentElement.removeChild(li);
            }
            checkSearch();
        });
    })
    delete_all.addEventListener('click', (e) => {
        e.preventDefault();
        // while (unorderedList.firstChild) {
        //     unorderedList.removeChild(unorderedList.firstChild);
        // }
        unorderedList.innerHTML = ''; //same with the above code
        checkSearch();
    });
    search.addEventListener('keyup', (e) => {
        e.preventDefault();
        const val = e.target.value.toLowerCase();
        const tasks = unorderedList.getElementsByTagName('li');
        Array.from(tasks).forEach(function(task1) {
            const title = task1.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(val) !== -1) {
                task1.style.display = 'block';
            } else {
                task1.style.display = 'none';
            }

        });
    });

});