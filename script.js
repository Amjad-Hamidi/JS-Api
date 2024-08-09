
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res=>res.json()) 
        .then(data=>displayRepos(data))
       
       .catch(error => console.error('Error fetching repos:', error)); 


       function displayRepos(data) {
        console.log(data);
        const container = document.getElementById('Container');
        
        
        const table = document.createElement('table');
        table.border = '1';
        const thead = document.createElement('thead');
        const tr= document.createElement('tr');
        const titles = Object.keys(data);
        console.log(titles);
        titles.forEach((title) =>
            {
                const th = document.createElement('th');
                th.innerHTML = `<h2>${title}</h2>`;
                tr.appendChild(th);
            });
            
        thead.appendChild(tr);
        table.appendChild(thead);
        container.appendChild(table);



        const secondRaw=document.createElement('tr');
        const header = document.createElement('td');
        header.innerHTML = `<h2 class="userId">${data.userId}</h2>`;
        secondRaw.appendChild(header);
    
        const header2 = document.createElement('td');
        header2.innerHTML = `<h2 class="id">${data.id}</h2>`;
        secondRaw.appendChild(header2);
    
        const header3 = document.createElement('td');
        header3.innerHTML = `<h2 class="title">${data.title}</h2>`;
        secondRaw.appendChild(header3);
    
        const header4 = document.createElement('td');
        header4.innerHTML = `<h2 class="completed">${data.completed}</h2>`;
        secondRaw.appendChild(header4);
    

        table.appendChild(secondRaw);

        
    }
    