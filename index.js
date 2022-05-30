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
            if(eraserOn==true)
                col.classList.remove('bclr');
            else
                col.classList.add('bclr');

        });
    });
}

let size = 16;
let eraserOn=false;

const container=document.querySelector('#container');

const gridBtn = document.querySelector('#gridSize');
gridBtn.addEventListener('click',()=>
{
    size = prompt('Enter the number of grids');
    sketch(size);
});

sketch();
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click',()=>{
    const cols = document.querySelectorAll('.column');
    cols.forEach((col)=>{
        col.classList.remove('bclr');
    });
    eraserOn=false;
});

const invertBtn = document.querySelector('#invert');
invertBtn.addEventListener('click',()=>{
    const cols = document.querySelectorAll('.column');
    cols.forEach((col)=>{
        col.classList.toggle('bclr');
    });
});

const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click',()=>{
    if(eraserOn)
        eraserOn=false;
    else
        eraserOn=true;
});