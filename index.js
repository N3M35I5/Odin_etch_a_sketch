let size = 16;
const container=document.querySelector('#container');

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
    container.appendChild(row)
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