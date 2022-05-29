function sketch(gridSize=16)
{
    for(let i =0; i<size;i++)
    {
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j =0; j<size ; j++)
        {
            const col = document.createElement('div');
            col.classList.add('column');
            row.appendChild(col);
        }
        if(i==0)
        {
            container.replaceChildren(row);        
        }
        else
            container.appendChild(row);
    }
    const cols = document.querySelectorAll('.column');
    cols.forEach((col)=>
    {
        col.addEventListener('mouseover',()=>
        {
            //console.log(col);
            col.classList.add('bclr');
        });
    });
}

let size = 16;

const container=document.querySelector('#container');

const gridBtn = document.querySelector('#gridSize');
gridBtn.addEventListener('click',()=>
{
    size = prompt('Enter the number of grids');
    sketch(size);
});

sketch();