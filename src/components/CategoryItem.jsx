

function CategoryItem (props){
   const {idCategory}=props;
   
   return <div classname="card">
        {idCategory}
    </div>
}

export {CategoryItem}