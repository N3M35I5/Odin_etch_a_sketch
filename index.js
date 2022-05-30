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
            if(eraserOn)
            {
                col.style.background=eraserClr;
            }
            else if(multiColorOn)
            {
                let x = Math.floor(Math.random() * 256);
                let y = Math.floor(Math.random() * 256);
                let z = Math.floor(Math.random() * 256);
                let bgColor = "rgb(" + x + "," + y + "," + z + ")";
                col.style.background = bgColor;
            }
            else
                col.style.background=bclr;

        });
    });
}

let size = 16;
let eraserOn=false;
let multiColorOn = false;
let bclr = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
let eraserClr = "rgb(" + 254 + "," + 254 + "," + 254 + ")";
let onClr = "rgb(" + 173 + "," + 216 + "," + 230 + ")";


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
        col.style.background=eraserClr;
    });
    eraserOn=false;
    eraserBtn.classList.remove('on');
    multiColorOn=false;
    multiColorBtn.classList.remove('on');
});
/*
//This functionality is broken since color no longer changes by toggling a new class
const invertBtn = document.querySelector('#invert');
invertBtn.addEventListener('click',()=>{
    const cols = document.querySelectorAll('.column');
    cols.forEach((col)=>{
        col.classList.toggle('bclr');
    });
});
*/

const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click',()=>{
    if(eraserOn)
    {
        eraserOn=false;
        eraserBtn.classList.remove('on');
    }
    else
    {
        eraserOn=true;
        eraserBtn.classList.add('on');
    }
});
const multiColorBtn = document.querySelector('#colorMode');
multiColorBtn.addEventListener('click',()=>{
    if(multiColorOn)
    {
        multiColorOn=false;
        multiColorBtn.classList.remove('on');
    }
    else
    {
        multiColorOn = true;
        multiColorBtn.classList.add('on');
    }
});